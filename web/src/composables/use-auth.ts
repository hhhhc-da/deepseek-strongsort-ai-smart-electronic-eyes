import { toast } from 'vue-sonner'

import { RouterPath } from '@/constants/route-path'
import { loginByPassword } from '@/services/api/auth.api'
import { getApiEnvelopeMessage } from '@/services/types/api.type'
import { useAuthStore } from '@/stores/auth'

export function useAuth() {
  const router = useRouter()

  const authStore = useAuthStore()
  const loading = ref(false)
  const errorMessage = ref('')

  function logout() {
    authStore.clearAuth()

    router.push({ path: String(RouterPath.LOGIN) })
  }

  function toHome() {
    router.push({ path: String(RouterPath.HOME) })
  }

  async function login(credentials: { username: string, password: string }) {
    if (loading.value)
      return false

    loading.value = true
    errorMessage.value = ''

    try {
      const response = await loginByPassword(credentials)
      const token = response.Token?.trim()

      if (!token) {
        const message = getApiEnvelopeMessage(response) || '登录失败，未收到有效 Token'
        errorMessage.value = message
        toast.error(message)
        return false
      }

      authStore.setLogin(token)
      toast.success('登录成功')

      const redirect = router.currentRoute.value.query.redirect as string
      if (!redirect || redirect.startsWith('//')) {
        toHome()
      }
      else {
        router.push(redirect)
      }

      return true
    }
    catch (error) {
      const message = error instanceof Error ? error.message : '登录失败，请稍后重试'
      errorMessage.value = message
      toast.error(message)
      return false
    }
    finally {
      loading.value = false
    }
  }

  return {
    errorMessage,
    loading,
    logout,
    login,
  }
}
