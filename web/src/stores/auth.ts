import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', () => {
  const token = ref('')
  const isLogin = computed(() => Boolean(token.value))

  function setLogin(nextToken: string) {
    token.value = nextToken.trim()
  }

  function clearAuth() {
    token.value = ''
  }

  return {
    token,
    isLogin,
    setLogin,
    clearAuth,
  }
}, {
  persist: true,
})
