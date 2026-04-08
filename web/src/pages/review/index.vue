<script setup lang="ts">
import { toast } from 'vue-sonner'

import type { ReviewItem, UploadReviewStatus } from '@/services/types/review.type'

import { BasicPage } from '@/components/global-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { getNextReview, submitReview } from '@/services/api/review.api'

type ReviewStatus = 'pending' | 'approved' | 'rejected'
type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

const currentReview = ref<ReviewItem | null>(null)
const annotation = ref('')
const fetchError = ref('')
const isLoading = ref(true)
const isSubmitting = ref(false)
const status = ref<ReviewStatus>('pending')

const statusMeta = computed<{ label: string, variant: BadgeVariant }>(() => {
  if (status.value === 'approved')
    return { label: '已接受', variant: 'default' }

  if (status.value === 'rejected')
    return { label: '已拒绝', variant: 'destructive' }

  return { label: currentReview.value ? '待审核' : '暂无案件', variant: 'secondary' }
})

const currentSummary = computed(() => {
  if (!currentReview.value) {
    return {
      capturedAt: '暂无数据',
      id: 'N/A',
      plate: '暂无数据',
      text: '暂无识别文本',
      videoUrl: '',
    }
  }

  return currentReview.value
})

const canSubmit = computed(() => {
  return Boolean(currentReview.value) && !isSubmitting.value && !isLoading.value
})

async function loadNextReview() {
  isLoading.value = true
  fetchError.value = ''

  try {
    const review = await getNextReview()
    currentReview.value = review
    annotation.value = review?.text ?? ''
    status.value = 'pending'
  }
  catch (error) {
    currentReview.value = null
    annotation.value = ''
    status.value = 'pending'

    const message = error instanceof Error ? error.message : '获取待审核数据失败'
    fetchError.value = message
    toast.error(message)
  }
  finally {
    isLoading.value = false
  }
}

async function handleDecision(nextStatus: UploadReviewStatus) {
  if (!currentReview.value || isSubmitting.value)
    return

  isSubmitting.value = true

  try {
    await submitReview({
      id: currentReview.value.id,
      plate: currentReview.value.plate,
      text: annotation.value.trim() || currentReview.value.text,
      status: nextStatus,
    })

    status.value = nextStatus === '1accept' ? 'approved' : 'rejected'
    toast.success(nextStatus === '1accept' ? '已接受当前案件' : '已拒绝当前案件')

    await loadNextReview()
  }
  catch (error) {
    const message = error instanceof Error ? error.message : '提交审核失败'
    toast.error(message)
  }
  finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  loadNextReview()
})
</script>

<template>
  <BasicPage
    title="人工审核"
    description="从待审队列中拉取案件，补充批注并提交人工结论"
    sticky
  >
    <template #actions>
      <div class="flex items-center gap-2">
        <Badge :variant="statusMeta.variant">
          {{ statusMeta.label }}
        </Badge>
        <span class="text-xs text-muted-foreground">
          Case {{ currentSummary.id }}
        </span>
        <Button type="button" variant="outline" size="sm" :disabled="isLoading || isSubmitting" @click="loadNextReview">
          刷新
        </Button>
      </div>
    </template>

    <div v-if="isLoading" class="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <Card class="overflow-hidden">
        <CardHeader>
          <CardTitle>视频显示区</CardTitle>
          <CardDescription>正在加载待审核案件</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
          <div class="aspect-video w-full rounded-md border bg-muted animate-pulse" />
          <div class="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div>正在同步案件信息</div>
            <div>请稍候</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>文本信息区</CardTitle>
          <CardDescription>等待接口返回</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-muted-foreground">
          <p>正在读取识别文本、视频地址和采集时间。</p>
        </CardContent>
      </Card>
    </div>

    <div v-else-if="!currentReview" class="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>暂无待审核案件</CardTitle>
          <CardDescription>
            {{ fetchError || '当前队列为空，可以稍后刷新继续审核。' }}
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-3 text-sm text-muted-foreground">
          <p>接口暂未返回新的审核任务。</p>
        </CardContent>
        <CardFooter>
          <Button type="button" @click="loadNextReview">
            重新获取
          </Button>
        </CardFooter>
      </Card>
    </div>

    <div v-else class="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <Card class="overflow-hidden">
        <CardHeader>
          <CardTitle>视频显示区</CardTitle>
          <CardDescription>{{ currentSummary.plate }} · {{ currentSummary.capturedAt }}</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
          <div class="aspect-video w-full overflow-hidden rounded-md border bg-muted">
            <video
              v-if="currentSummary.videoUrl"
              class="h-full w-full"
              controls
              :src="currentSummary.videoUrl"
              poster="/placeholder.png"
            />
            <div v-else class="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              当前案件未返回可播放视频地址
            </div>
          </div>

          <div class="grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
            <div>案件编号：{{ currentSummary.id }}</div>
            <div>采集时间：{{ currentSummary.capturedAt }}</div>
            <div class="sm:col-span-2 break-all">
              视频地址：{{ currentSummary.videoUrl || '暂无视频地址' }}
            </div>
          </div>
        </CardContent>
      </Card>

      <div class="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>文本信息区</CardTitle>
            <CardDescription>展示后端返回的车牌、识别文本和基础信息。</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="grid gap-2 text-sm">
              <div class="flex items-center justify-between gap-4">
                <span class="text-muted-foreground">案件编号</span>
                <span class="font-medium">{{ currentSummary.id }}</span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <span class="text-muted-foreground">车牌号码</span>
                <span class="font-medium">{{ currentSummary.plate }}</span>
              </div>
              <div class="flex items-start justify-between gap-4">
                <span class="text-muted-foreground">识别文本</span>
                <span class="max-w-64 text-right font-medium break-words">{{ currentSummary.text }}</span>
              </div>
              <div class="flex items-center justify-between gap-4">
                <span class="text-muted-foreground">采集时间</span>
                <span class="font-medium">{{ currentSummary.capturedAt }}</span>
              </div>
            </div>

            <Separator />

            <Badge variant="outline">
              待人工复核
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>批注区</CardTitle>
            <CardDescription>可直接编辑后端原始文本后再提交审核结果。</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <Textarea
              v-model="annotation"
              placeholder="请填写审核意见，例如：证据清晰，允许通过；或：关键帧不足，建议驳回。"
              class="min-h-32 resize-y"
              :disabled="isSubmitting"
            />
            <p class="text-xs text-muted-foreground">
              Reject 会提交 0reject，Accept 会提交 1accept。
            </p>
          </CardContent>
          <CardFooter class="flex gap-2">
            <Button
              type="button"
              variant="destructive"
              class="flex-1"
              :disabled="!canSubmit"
              @click="handleDecision('0reject')"
            >
              {{ isSubmitting ? '提交中...' : 'Reject' }}
            </Button>
            <Button
              type="button"
              class="flex-1"
              :disabled="!canSubmit"
              @click="handleDecision('1accept')"
            >
              {{ isSubmitting ? '提交中...' : 'Accept' }}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </BasicPage>
</template>

<route lang="yaml">
meta:
  auth: true
</route>
