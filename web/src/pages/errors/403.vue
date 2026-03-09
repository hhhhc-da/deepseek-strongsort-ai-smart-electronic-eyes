<script setup lang="ts">
import Error from '@/components/custom-error.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Error
      :code="403"
      subtitle-key="errors.forbidden.title"
      error-key="errors.forbidden.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
  titleKey: errors.forbidden.title
</route>
