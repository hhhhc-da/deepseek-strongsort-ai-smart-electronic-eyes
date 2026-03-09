<script setup lang="ts">
import Error from '@/components/custom-error.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Error
      :code="500"
      subtitle-key="errors.internal.title"
      error-key="errors.internal.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
  titleKey: errors.internal.title
</route>
