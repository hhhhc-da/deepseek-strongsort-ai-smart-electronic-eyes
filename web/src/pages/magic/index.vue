<script setup lang="ts">
import type { IClientOptions, IClientSubscribeOptions, MqttClient } from 'mqtt'
// MQTT相关
import type { Buffer } from 'node:buffer'

// @ts-expect-error 无需在意 忽略dplayer引入 在 ts中午type报错
import DPlayer from 'dplayer'
import flvjs from 'flv.js'
import mqtt from 'mqtt'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { BasicPage } from '@/components/global-layout'
import { Badge } from '@/components/ui/badge'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLiveStore } from '@/stores/live'

import ChangeLiveSoureDrawer from './componets/ChangeLiveSoureDrawer.vue'

interface Message {
  title: string
  content: string
  bottom: string
}

const Message1 = ref<Message>({
  title: 'CPU 占用率',
  content: '',
  bottom: '',
})

const { axiosInstance } = useAxios()
const Message2 = ref<Message>({
  title: '内存占用率',
  content: '',
  bottom: '',
})

const Message3 = ref<Message>({
  title: '检测分类类别',
  content: '',
  bottom: '',
})

const Message4 = ref<Message>({
  title: '待处理事项',
  content: '',
  bottom: '',
})

// 公告
const Announcement = ref<string[]>([])
async function fetchAnnouncement() {
  try {
    const resp = await axiosInstance.post('fetch_data')
    if (resp.data?.Code === 0 && Array.isArray(resp.data?.Data)) {
      Announcement.value = resp.data.Data.map((item: any) => {
        return `[${item.time}]${item.plate}:${item.text}`
      })
      // 更新Message1-4的内容
      if (resp.data.Params) {
        // Message1.value.content = `CPU:${resp.data.Params.Cpu ?? 0}%`
        // Message1.value.bottom = `内存:${resp.data.Params.Mem ?? 0}%`
        // Message2.value.content = `${resp.data.Params.Acc ?? 0}%`

        Message1.value.content = `${resp.data.Params.Cpu ?? 0}%`
        Message1.value.bottom = `${resp.data.Params.Acc ?? 0}%`
        Message2.value.content = `${resp.data.Params.Men ?? 0}%`

        Message3.value.content = resp.data.Params.Num_type ?? '0'
        Message4.value.content = resp.data.Params.Cnt ?? '0'
      }
    }
  }
  catch (error) {
    console.error('获取数据失败:', error)
  }
}

const dplayerContainer = ref<HTMLElement | null>(null)
// 滚动消息
const Notice = ref<string[]>([
  '等待MQTT消息...',
])

// MQTT配置
const brokerUrl = 'ws://localhost:8082/mqtt'
const topic = 'awa'
const clientId = `magic-client-${Math.random().toString(16).substr(2, 8)}`

const connectionOptions: IClientOptions = {
  clientId,
  username: 'admin',
  password: 'admin',
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 3000,
  protocolId: 'MQTT',
  protocolVersion: 4,
}

const subscribeOptions: IClientSubscribeOptions = {
  qos: 0,
}

const mqttClient = ref<MqttClient | null>(null)
const mqttStatus = ref<'connected' | 'connecting' | 'disconnected' | 'error'>('disconnected')

const statusMeta = computed(() => {
  switch (mqttStatus.value) {
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

const metricCards = computed(() => [Message1.value, Message2.value, Message3.value, Message4.value])

// 假设消息格式为JSON:
// {
//   "notice": [
//     "发现新车辆",
//     "检测到异常行为",
//     "系统运行正常"
//   ],
//   "params": {
//     "Cpu": 18,
//     "Mem": 45,
//     "Acc": 98.7,
//     "Num_type": 7,
//     "Cnt": 3
//   }
// }

function connectToMQTT() {
  mqttStatus.value = 'connecting'
  try {
    mqttClient.value = mqtt.connect(brokerUrl, connectionOptions)
    mqttClient.value.on('connect', () => {
      mqttStatus.value = 'connected'
      mqttClient.value?.subscribe(topic, subscribeOptions, (err) => {
        if (err) {
          console.error('订阅错误:', err)
        }
      })
    })
    mqttClient.value.on('message', (receivedTopic: string, message: Buffer) => {
      try {
        const msg = message.toString()
        // 假设消息格式为JSON: { notice: [], params: { Cpu, Mem, Acc, Num_type, Cnt } }
        let parsed
        try {
          parsed = JSON.parse(msg)
        }
        catch {
          parsed = null
        }
        if (parsed && typeof parsed === 'object') {
          if (Array.isArray(parsed.notice)) {
            Notice.value = parsed.notice
          }
          if (parsed.params) {
            // Message1.value.content = `CPU:${parsed.params.Cpu ?? 0}%`
            // Message1.value.bottom = `内存:${parsed.params.Mem ?? 0}%`
            // Message2.value.content = `${parsed.params.Acc ?? 0}%`

            Message1.value.content = `${parsed.params.Cpu ?? 0}%`
            Message1.value.bottom = `${parsed.params.Acc ?? 0}%`
            Message2.value.content = `${parsed.params.Mem ?? 0}%`

            Message3.value.content = parsed.params.Num_type ?? '0'
            Message4.value.content = parsed.params.Cnt ?? '0'
          }
        }
        else {
          // 非JSON消息，直接推送到Notice
          const decorated = receivedTopic ? `[${receivedTopic}] ${msg}` : msg
          Notice.value.unshift(decorated)
          if (Notice.value.length > 10)
            Notice.value.pop()
        }
      }
      catch (e) {
        console.error('MQTT消息处理错误:', e)
      }
    })
    mqttClient.value.on('error', (err: Error) => {
      mqttStatus.value = 'error'
      console.error('MQTT连接错误:', err)
    })
    mqttClient.value.on('close', () => {
      if (mqttStatus.value !== 'error') {
        mqttStatus.value = 'disconnected'
      }
    })
    mqttClient.value.on('reconnect', () => {
      mqttStatus.value = 'connecting'
    })
  }
  catch (error) {
    mqttStatus.value = 'error'
    console.error('MQTT初始化错误:', error)
  }
}

function disconnectMQTT() {
  if (mqttClient.value) {
    mqttClient.value.end()
    mqttClient.value = null
    mqttStatus.value = 'disconnected'
  }
}

const LiveStore = useLiveStore()
function initDplayer() {
  if (dplayerContainer.value && flvjs.isSupported()) {
    // eslint-disable-next-line no-new
    new DPlayer({
      container: dplayerContainer.value,
      live: true,
      autoplay: true,
      video: {
        url: LiveStore.getSource,
        type: 'flv',
        customType: {
          flv(video: HTMLVideoElement) {
            const flvPlayer = flvjs.createPlayer({
              type: 'flv',
              url: video.src,
            })
            flvPlayer.attachMediaElement(video)
            flvPlayer.load()
          },
        },
      },
    })
  }
}

onMounted(() => {
  initDplayer()
  fetchAnnouncement()
  connectToMQTT()
})

onBeforeUnmount(() => {
  disconnectMQTT()
})

watch(
  () => LiveStore.getSource,
  () => {
    initDplayer()
  },
)
</script>

<template>
  <BasicPage
    title="城市智慧交通电子眼"
    description="DeepSeek StrongSort 双AI赋能"
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
      <Card class="border-dashed bg-muted/40">
        <CardContent class="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Badge variant="secondary">
            实时通知
          </Badge>
          <div class="min-w-0 flex-1">
            <marquee scrollamount="8" class="text-sm text-muted-foreground">
              <span v-for="notice in Notice" :key="notice" class="mr-10">
                📢 {{ notice }}
              </span>
            </marquee>
          </div>
        </CardContent>
      </Card>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card v-for="metric in metricCards" :key="metric.title">
          <CardHeader>
            <CardTitle>{{ metric.title }}</CardTitle>
            <CardDescription>实时指标</CardDescription>
          </CardHeader>
          <CardContent class="space-y-1">
            <div class="text-2xl font-semibold">
              {{ metric.content || '--' }}
            </div>
            <p class="text-xs text-muted-foreground">
              {{ metric.bottom || '—' }}
            </p>
          </CardContent>
        </Card>
      </div>

      <div class="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <Card class="overflow-hidden">
          <CardHeader>
            <div>
              <CardTitle>实时直播</CardTitle>
              <CardDescription>当前源：{{ LiveStore.getSource }}</CardDescription>
            </div>
            <CardAction>
              <ChangeLiveSoureDrawer />
            </CardAction>
          </CardHeader>
          <CardContent>
            <div ref="dplayerContainer" class="aspect-video w-full rounded-md border bg-muted" />
          </CardContent>
        </Card>

        <Card class="overflow-hidden">
          <CardHeader>
            <CardTitle>通知</CardTitle>
            <CardDescription>最新公告与系统提示</CardDescription>
          </CardHeader>
          <CardContent class="max-h-[320px] space-y-2 overflow-y-auto text-sm">
            <div v-if="Announcement.length === 0" class="text-muted-foreground">
              暂无公告
            </div>
            <div
              v-for="announcement in Announcement"
              :key="announcement"
              class="rounded-md border border-dashed px-3 py-2 text-muted-foreground"
            >
              {{ announcement }}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </BasicPage>
</template>
