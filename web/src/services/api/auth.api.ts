import { useAxios } from '@/composables/use-axios'

import type { ApiEnvelope } from '../types/api.type'

export interface LoginPayload {
  username: string
  password: string
}

export type LoginApiResponse = ApiEnvelope<never> & {
  Token?: string
}

export async function loginByPassword(payload: LoginPayload) {
  const { axiosInstance } = useAxios()
  const response = await axiosInstance.post<LoginApiResponse>('login', payload)

  return response.data
}
