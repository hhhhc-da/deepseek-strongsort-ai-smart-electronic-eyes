import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

function createClientId() {
  return `mqtt-client-${Math.random().toString(16).slice(2, 10)}`
}

function getDefaultConfig() {
  return {
    brokerUrl: import.meta.env.VITE_MQTT_URL ?? 'ws://localhost:8082/mqtt',
    topic: import.meta.env.VITE_MQTT_TOPIC ?? 'awa',
    clientId: createClientId(),
    username: import.meta.env.VITE_MQTT_USER ?? '',
    password: import.meta.env.VITE_MQTT_PASSWORD ?? '',
  }
}

export const useMqttStore = defineStore('mqtt', () => {
  const defaults = getDefaultConfig()

  const brokerUrl = shallowRef(defaults.brokerUrl)
  const topic = shallowRef(defaults.topic)
  const clientId = shallowRef(defaults.clientId)
  const username = shallowRef(defaults.username)
  const password = shallowRef(defaults.password)

  function resetConfig() {
    const nextDefaults = getDefaultConfig()
    brokerUrl.value = nextDefaults.brokerUrl
    topic.value = nextDefaults.topic
    clientId.value = nextDefaults.clientId
    username.value = nextDefaults.username
    password.value = nextDefaults.password
  }

  function regenerateClientId() {
    clientId.value = createClientId()
  }

  return {
    brokerUrl,
    topic,
    clientId,
    username,
    password,
    resetConfig,
    regenerateClientId,
  }
}, {
  persist: {
    key: 'mqtt-config',
  },
})
