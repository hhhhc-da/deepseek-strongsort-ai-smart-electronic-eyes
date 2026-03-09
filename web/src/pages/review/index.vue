<script setup lang="ts">
import { BasicPage } from '@/components/global-layout'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

type ReviewStatus = 'pending' | 'approved' | 'rejected'
type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

const videoUrl = ref('')
const videoPoster = '/placeholder.png'

const caseInfo = ref({
  id: 'MR-20260205-0137',
  source: 'Camera-24 / Gate C',
  capturedAt: '2026-02-05 14:22:18',
  location: 'N2 Intersection · Lane 3',
  eventType: '左转违章',
  plate: '沪A·8K20X',
  confidence: 0.92,
  model: 'TrafficEye v2.3',
  uploader: 'system@city-eye',
})

const tags = ['疑似违规', '夜间', '高优先级']
const annotation = ref('')
const status = ref<ReviewStatus>('pending')

const statusMeta = computed<{ label: string, variant: BadgeVariant }>(() => {
  if (status.value === 'approved') {
    return { label: '已通过', variant: 'default' }
  }

  if (status.value === 'rejected') {
    return { label: '已驳回', variant: 'destructive' }
  }

  return { label: '待审核', variant: 'secondary' }
})

function handleApply() {
  status.value = 'approved'
}

function handleReject() {
  status.value = 'rejected'
}
</script>

<template>
  <BasicPage
    title="人工审核"
    description="审核视频证据与文本信息，并给出最终结论"
    sticky
  >
    <template #actions>
      <div class="flex items-center gap-2">
        <Badge :variant="statusMeta.variant">
          {{ statusMeta.label }}
        </Badge>
        <span class="text-xs text-muted-foreground">
          Case {{ caseInfo.id }}
        </span>
      </div>
    </template>

    <div class="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <Card class="overflow-hidden">
        <CardHeader>
          <CardTitle>视频显示区</CardTitle>
          <CardDescription>来源：{{ caseInfo.source }} · {{ caseInfo.capturedAt }}</CardDescription>
        </CardHeader>
        <CardContent class="space-y-3">
          <div class="aspect-video w-full overflow-hidden rounded-md border bg-muted">
            <video
              v-if="videoUrl"
              class="h-full w-full"
              controls
              :src="videoUrl"
              :poster="videoPoster"
            />
            <div v-else class="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
              暂无视频，等待载入或替换
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div>分辨率：1920×1080</div>
            <div>时长：00:32</div>
            <div>帧率：25 FPS</div>
            <div>置信度：{{ caseInfo.confidence }}</div>
          </div>
        </CardContent>
      </Card>

      <div class="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>文本信息区</CardTitle>
            <CardDescription>案件概要与系统识别信息。</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="grid gap-2 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">案件编号</span>
                <span class="font-medium">{{ caseInfo.id }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">事件类型</span>
                <span class="font-medium">{{ caseInfo.eventType }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">车牌号码</span>
                <span class="font-medium">{{ caseInfo.plate }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">位置</span>
                <span class="font-medium">{{ caseInfo.location }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">检测模型</span>
                <span class="font-medium">{{ caseInfo.model }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-muted-foreground">上传者</span>
                <span class="font-medium">{{ caseInfo.uploader }}</span>
              </div>
            </div>

            <Separator />

            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in tags" :key="tag" variant="outline">
                {{ tag }}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>批注区</CardTitle>
            <CardDescription>记录人工审核意见、关键帧与处理建议。</CardDescription>
          </CardHeader>
          <CardContent class="space-y-3">
            <Textarea
              v-model="annotation"
              placeholder="请填写审核意见，例如：关键帧 00:12 车辆压线，建议保留证据并开具处罚。"
              class="min-h-32 resize-y"
            />
            <p class="text-xs text-muted-foreground">
              建议包含：违规点、关键帧时间、处理建议。
            </p>
          </CardContent>
          <CardFooter class="flex gap-2">
            <Button type="button" variant="destructive" class="flex-1" @click="handleReject">
              Reject
            </Button>
            <Button type="button" class="flex-1" @click="handleApply">
              Apply
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </BasicPage>
</template>
