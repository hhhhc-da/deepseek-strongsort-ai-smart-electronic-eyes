<script setup lang="ts">
import Error from '@/components/custom-error.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Error
      :code="503"
      subtitle-key="errors.maintenance.title"
      error-key="errors.maintenance.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
  titleKey: errors.maintenance.title
</route>
