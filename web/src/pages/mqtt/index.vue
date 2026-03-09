<script setup lang="ts">
import type { IClientOptions, IClientSubscribeOptions, MqttClient } from 'mqtt'
import type { Buffer } from 'node:buffer'

import mqtt from 'mqtt'
import { storeToRefs } from 'pinia'

import { BasicPage } from '@/components/global-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useMqttStore } from '@/stores/mqtt'

interface MQTTMessage {
  id: string
  topic: string
  message: string
  timestamp: string
}

const client = ref<MqttClient | null>(null)
const connectionStatus = ref<'connected' | 'connecting' | 'disconnected' | 'error'>('disconnected')
const messages = ref<MQTTMessage[]>([])

const mqttStore = useMqttStore()
const { brokerUrl, topic, clientId, username, password } = storeToRefs(mqttStore)

const connectionOptions = computed<IClientOptions>(() => ({
  clientId: clientId.value,
  username: username.value || undefined,
  password: password.value || undefined,
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 3000,
  protocolId: 'MQTT',
  protocolVersion: 5, // MQTT 3.1.1
  // wsOptions: {}, // 可选，部分服务器需要
}))

const subscribeOptions: IClientSubscribeOptions = {
  qos: 0,
}

const statusMeta = computed(() => {
  switch (connectionStatus.value) {
    case 'connected':
      return { label: '已连接', variant: 'default' as const, dotClass: 'bg-emerald-500' }
    case 'connecting':
      return { label: '连接中', variant: 'secondary' as const, dotClass: 'bg-amber-500' }
    case 'error':
      return { label: '连接错误', variant: 'destructive' as const, dotClass: 'bg-destructive' }
    default:
      return { label: '未连接', variant: 'outline' as const, dotClass: 'bg-muted-foreground/60' }
  }
})

function connectToBroker() {
  connectionStatus.value = 'connecting'

  try {
    client.value = mqtt.connect(brokerUrl.value, connectionOptions.value)

    client.value.on('connect', () => {
      connectionStatus.value = 'connected'
      console.warn('✅ 成功连接到MQTT服务器')

      client.value?.subscribe(topic.value, subscribeOptions, (err) => {
        if (err) {
          console.error('订阅错误:', err)
        }
        else {
          console.warn(`🔔 已订阅主题: ${topic.value}`)
        }
      })
    })

    client.value.on('message', (receivedTopic: string, message: Buffer) => {
      try {
        const msg = message.toString()
        console.warn(`📩 收到消息 [${receivedTopic}]: ${msg}`)

        messages.value.unshift({
          id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
          topic: receivedTopic,
          message: msg,
          timestamp: new Date().toLocaleTimeString(),
        })

        if (messages.value.length > 100) {
          messages.value.pop()
        }
      }
      catch (e) {
        console.error('❗ 消息处理错误:', e)
      }
    })

    client.value.on('error', (err: Error) => {
      connectionStatus.value = 'error'
      console.error('❌ MQTT连接错误:', err)
    })

    client.value.on('close', () => {
      if (connectionStatus.value !== 'error') {
        connectionStatus.value = 'disconnected'
      }
      console.warn('🛑 连接已关闭')
    })

    client.value.on('reconnect', () => {
      connectionStatus.value = 'connecting'
      console.warn('🔁 正在尝试重新连接...')
    })
  }
  catch (error) {
    connectionStatus.value = 'error'
    console.error('❌ MQTT初始化错误:', error)
  }
}

function disconnectFromBroker() {
  if (client.value) {
    client.value.end()
    client.value = null
    connectionStatus.value = 'disconnected'
  }
}

onMounted(() => {
  connectToBroker()
})

onBeforeUnmount(() => {
  disconnectFromBroker()
})

function handleReconnect() {
  disconnectFromBroker()
  connectToBroker()
}
</script>

<template>
  <BasicPage
    title="MQTT 客户端"
    description="连接状态与消息订阅概览"
    sticky
  >
    <template #actions>
      <Badge :variant="statusMeta.variant" class="gap-1">
        <span class="h-1.5 w-1.5 rounded-full" :class="statusMeta.dotClass" />
        {{ statusMeta.label }}
      </Badge>
      <Badge variant="outline" class="font-mono text-xs">
        {{ topic }}
      </Badge>
    </template>

    <div class="space-y-4">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>连接状态</CardTitle>
            <CardDescription>实时连接状态</CardDescription>
          </CardHeader>
          <CardContent class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full" :class="statusMeta.dotClass" />
            <span class="text-2xl font-semibold">
              {{ statusMeta.label }}
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>订阅主题</CardTitle>
            <CardDescription>Topic</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-semibold font-mono">
              {{ topic }}
            </div>
            <p class="text-xs text-muted-foreground">
              QoS {{ subscribeOptions.qos ?? 0 }}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>客户端 ID</CardTitle>
            <CardDescription>Client ID</CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm font-mono text-muted-foreground truncate">
              {{ clientId }}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>消息数</CardTitle>
            <CardDescription>缓存统计</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="text-2xl font-semibold">
              {{ messages.length }}
            </div>
            <p class="text-xs text-muted-foreground">
              最多保留 100 条
            </p>
          </CardContent>
        </Card>
      </div>

      <div class="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card class="overflow-hidden">
          <CardHeader>
            <CardTitle>消息流</CardTitle>
            <CardDescription>实时订阅消息（最多保留 100 条）。</CardDescription>
          </CardHeader>
          <CardContent class="px-0">
            <div class="max-h-[420px] overflow-y-auto">
              <ul class="divide-y">
                <li
                  v-for="msg in messages"
                  :key="msg.id"
                  class="px-6 py-3 transition-colors hover:bg-muted/40"
                >
                  <div class="flex items-start gap-3">
                    <span class="mt-1.5 h-2 w-2 rounded-full bg-primary/70" />
                    <div class="min-w-0 flex-1">
                      <div class="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span class="font-medium text-foreground">[{{ msg.timestamp }}]</span>
                        <span class="font-mono">{{ msg.topic }}</span>
                      </div>
                      <p class="mt-1 break-all font-mono text-xs text-muted-foreground">
                        {{ msg.message }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div v-if="messages.length === 0" class="px-6 py-12 text-center text-sm text-muted-foreground">
                暂无消息
              </div>
            </div>
          </CardContent>
        </Card>

        <div class="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>连接配置</CardTitle>
              <CardDescription>配置将持久化到本地</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="grid gap-3 sm:grid-cols-2">
                <div class="space-y-1 sm:col-span-2">
                  <Label for="mqtt-broker">Broker URL</Label>
                  <Input id="mqtt-broker" v-model="brokerUrl" placeholder="ws://localhost:8082/mqtt" />
                </div>
                <div class="space-y-1">
                  <Label for="mqtt-topic">Topic</Label>
                  <Input id="mqtt-topic" v-model="topic" placeholder="awa" />
                </div>
                <div class="space-y-1">
                  <Label for="mqtt-client">Client ID</Label>
                  <Input id="mqtt-client" v-model="clientId" placeholder="mqtt-client-xxxx" />
                </div>
                <div class="space-y-1">
                  <Label for="mqtt-username">Username</Label>
                  <Input id="mqtt-username" v-model="username" autocomplete="username" placeholder="admin" />
                </div>
                <div class="space-y-1">
                  <Label for="mqtt-password">Password</Label>
                  <Input
                    id="mqtt-password"
                    v-model="password"
                    type="password"
                    autocomplete="current-password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" @click="mqttStore.resetConfig">
                  重置为默认
                </Button>
                <Button variant="outline" size="sm" @click="mqttStore.regenerateClientId">
                  生成新 Client ID
                </Button>
                <Button size="sm" @click="handleReconnect">
                  应用并重连
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>连接详情</CardTitle>
              <CardDescription>Broker 与订阅配置</CardDescription>
            </CardHeader>
            <CardContent class="space-y-3 text-sm">
              <div class="flex items-start justify-between gap-3">
                <span class="text-muted-foreground">Broker</span>
                <span class="flex-1 text-right font-mono text-xs text-muted-foreground break-all">
                  {{ brokerUrl }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">协议版本</span>
                <span class="font-medium">
                  MQTT {{ connectionOptions.protocolVersion }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">自动重连</span>
                <span class="font-medium">
                  {{ connectionOptions.reconnectPeriod ?? 0 }} ms
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">连接超时</span>
                <span class="font-medium">
                  {{ connectionOptions.connectTimeout ?? 0 }} ms
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </BasicPage>
</template>
