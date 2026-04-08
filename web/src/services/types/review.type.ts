import type { ApiEnvelope } from './api.type'

export type ReviewRow = [
  number | string,
  string,
  string,
  string,
  string,
]

export interface ReviewItem {
  id: string
  plate: string
  text: string
  videoUrl: string
  capturedAt: string
}

export type UploadReviewStatus = '0reject' | '1accept'

export interface UploadReviewPayload {
  id: string
  plate: string
  text: string
  status: UploadReviewStatus
}

export type ReceiveReviewApiResponse = ApiEnvelope<ReviewRow[]>

export type UploadReviewApiResponse = ApiEnvelope
