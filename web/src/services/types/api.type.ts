export interface ApiEnvelope<T = unknown, P = Record<string, unknown>> {
  Code: number
  Message?: string
  Error?: string
  Data?: T
  Token?: string
  Params?: P
}

export function getApiEnvelopeMessage(payload: unknown): string | undefined {
  if (!payload || typeof payload !== 'object')
    return undefined

  const envelope = payload as Partial<ApiEnvelope>

  if (typeof envelope.Error === 'string' && envelope.Error)
    return envelope.Error

  if (typeof envelope.Message === 'string' && envelope.Message)
    return envelope.Message

  return undefined
}

export function isInvalidTokenMessage(message: string | undefined): boolean {
  return typeof message === 'string' && message.startsWith('INVALID_TOKEN_')
}
