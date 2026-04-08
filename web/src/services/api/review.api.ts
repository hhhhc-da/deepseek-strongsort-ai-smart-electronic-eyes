import { useAxios } from '@/composables/use-axios'
import env from '@/utils/env'

import type { ReceiveReviewApiResponse, ReviewItem, ReviewRow, UploadReviewApiResponse, UploadReviewPayload } from '../types/review.type'

import { getApiEnvelopeMessage } from '../types/api.type'

function toAbsoluteVideoUrl(videoUrl: string) {
  if (!videoUrl)
    return ''

  if (/^https?:\/\//.test(videoUrl))
    return videoUrl

  return new URL(videoUrl.replace(/^\/+/, ''), `${env.VITE_SERVER_API_URL}/`).toString()
}

function mapReviewRow(row: ReviewRow): ReviewItem {
  const [id, plate, text, videoUrl, capturedAt] = row

  return {
    id: String(id),
    plate,
    text,
    videoUrl: toAbsoluteVideoUrl(videoUrl),
    capturedAt,
  }
}

export async function getNextReview() {
  const { axiosInstance } = useAxios()
  const response = await axiosInstance.get<ReceiveReviewApiResponse>('/receive_review')

  if (response.data.Code !== 0) {
    throw new Error(getApiEnvelopeMessage(response.data) || '获取待审核数据失败')
  }

  const nextItem = response.data.Data?.[0]

  return nextItem ? mapReviewRow(nextItem) : null
}

export async function submitReview(payload: UploadReviewPayload) {
  const { axiosInstance } = useAxios()
  const response = await axiosInstance.post<UploadReviewApiResponse>('/upload_review', payload)

  if (response.data.Code !== 0) {
    throw new Error(getApiEnvelopeMessage(response.data) || '提交审核失败')
  }

  return response.data
}
