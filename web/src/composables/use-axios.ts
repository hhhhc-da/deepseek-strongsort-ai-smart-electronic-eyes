import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import axios, { AxiosHeaders } from 'axios'
import { toast } from 'vue-sonner'

import { RouterPath } from '@/constants/route-path'
import pinia from '@/plugins/pinia/setup'
import router from '@/router'
import { getApiEnvelopeMessage, isInvalidTokenMessage } from '@/services/types/api.type'
import { useAuthStore } from '@/stores/auth'
import env from '@/utils/env'

let isRedirectingToLogin = false

const axiosInstance = axios.create({
  baseURL: env.VITE_SERVER_API_URL + env.VITE_SERVER_API_PREFIX,
  timeout: env.VITE_SERVER_API_TIMEOUT,
})

function getAuthErrorMessage(payload: unknown) {
  const candidate = getApiEnvelopeMessage(payload)
  return isInvalidTokenMessage(candidate) ? candidate : null
}

function handleInvalidToken(message: string) {
  const authStore = useAuthStore(pinia)
  authStore.clearAuth()

  if (isRedirectingToLogin)
    return

  isRedirectingToLogin = true

  const currentPath = router.currentRoute.value.fullPath
  const shouldPreserveRedirect = currentPath && router.currentRoute.value.path !== RouterPath.LOGIN

  toast.error('登录已失效，请重新登录', {
    description: message,
  })

  router.replace({
    path: String(RouterPath.LOGIN),
    query: shouldPreserveRedirect ? { redirect: currentPath } : undefined,
  }).finally(() => {
    isRedirectingToLogin = false
  })
}

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const authStore = useAuthStore(pinia)
  const headers = AxiosHeaders.from(config.headers)

  if (authStore.token)
    headers.set('Authorization', `Bearer ${authStore.token}`)

  config.headers = headers

  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  const authErrorMessage = getAuthErrorMessage(response.data)

  if (authErrorMessage) {
    handleInvalidToken(authErrorMessage)
    return Promise.reject(new Error(authErrorMessage))
  }

  return response
}, (error: AxiosError) => {
  const authErrorMessage = getAuthErrorMessage(error.response?.data)

  if (authErrorMessage)
    handleInvalidToken(authErrorMessage)

  return Promise.reject(error)
})

export function useAxios() {
  return {
    axiosInstance,
  }
}
