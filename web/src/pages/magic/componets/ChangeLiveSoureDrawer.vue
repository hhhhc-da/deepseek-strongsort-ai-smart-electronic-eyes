<script setup lang="ts">
import { toast } from 'vue-sonner'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLiveStore } from '@/stores/live'

const LiveStore = useLiveStore()
const LiveSoure = ref<string>('')

// 用来修改 Live Source
function ChangeSubmit() {
  if (LiveSoure.value !== '') {
    LiveStore.setSource(LiveSoure.value)
  }
  else {
    toast({
      title: '⚠️直播源不能为空',
      description: '请设置正确的直播源',
      variant: 'destructive',
    })
  }
}
</script>

<template>
  <Toaster />
  <Drawer>
    <DrawerTrigger as-child>
      <!-- 下面是外面显示的按钮 -->
      <Button variant="ghost" size="icon">
        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-4 h-4"><path fill="currentColor" fill-rule="evenodd" d="M7.07.65a.85.85 0 0 0-.828.662l-.238 1.05q-.57.167-1.08.448l-.91-.574a.85.85 0 0 0-1.055.118l-.606.606a.85.85 0 0 0-.118 1.054l.574.912q-.28.509-.447 1.079l-1.05.238a.85.85 0 0 0-.662.829v.857a.85.85 0 0 0 .662.829l1.05.238q.166.57.448 1.08l-.575.91a.85.85 0 0 0 .118 1.055l.607.606a.85.85 0 0 0 1.054.118l.911-.574q.51.28 1.079.447l.238 1.05a.85.85 0 0 0 .829.662h.857a.85.85 0 0 0 .829-.662l.238-1.05q.57-.166 1.08-.447l.911.574a.85.85 0 0 0 1.054-.118l.606-.606a.85.85 0 0 0 .118-1.054l-.574-.911q.282-.51.448-1.08l1.05-.238a.85.85 0 0 0 .662-.829v-.857a.85.85 0 0 0-.662-.83l-1.05-.237q-.166-.57-.447-1.08l.574-.91a.85.85 0 0 0-.118-1.055l-.606-.606a.85.85 0 0 0-1.055-.118l-.91.574a5.3 5.3 0 0 0-1.08-.448l-.239-1.05A.85.85 0 0 0 7.928.65zM4.92 3.813a4.5 4.5 0 0 1 1.795-.745L7.071 1.5h.857l.356 1.568a4.5 4.5 0 0 1 1.795.744l1.36-.857l.607.606l-.858 1.36c.37.527.628 1.136.744 1.795l1.568.356v.857l-1.568.355a4.5 4.5 0 0 1-.744 1.796l.857 1.36l-.606.606l-1.36-.857a4.5 4.5 0 0 1-1.795.743L7.928 13.5h-.857l-.356-1.568a4.5 4.5 0 0 1-1.794-.744l-1.36.858l-.607-.606l.858-1.36a4.5 4.5 0 0 1-.744-1.796L1.5 7.93v-.857l1.568-.356a4.5 4.5 0 0 1 .744-1.794L2.954 3.56l.606-.606zM9.026 7.5a1.525 1.525 0 1 1-3.05 0a1.525 1.525 0 0 1 3.05 0m.9 0a2.425 2.425 0 1 1-4.85 0a2.425 2.425 0 0 1 4.85 0" clip-rule="evenodd" /></svg>
      </Button>
    </DrawerTrigger>
    <!-- Drawer的内容区 -->
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <!-- 头部 -->
        <DrawerHeader>
          <DrawerTitle>ChangeLiveSoure</DrawerTitle>
          <DrawerDescription>修改直播源.</DrawerDescription>
        </DrawerHeader>
        <!-- 主体 -->
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <Label for="livesoure">Live Soure</Label>
          <Input id="livesoure" v-model="LiveSoure" type="text" :placeholder="LiveStore.getSource" />
        </div>
        <!-- Drawer的底部 -->
        <DrawerFooter>
          <!-- 提交按钮 -->
          <Button @click="ChangeSubmit">
            Change
          </Button>
          <!-- 取消按钮 -->
          <DrawerClose as-child>
            <Button variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>
