import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLiveStore = defineStore('live', () => {
  const source = ref(import.meta.env.VITE_LIVE_SOURCE)

  const getSource = computed(() => source.value)

  function setSource(newSource: string) {
    source.value = newSource
  }

  function clearSource() {
    source.value = ''
  }

  return { source, getSource, setSource, clearSource }
}, {
  persist: {
    key: 'my-live-source',
  },
})
