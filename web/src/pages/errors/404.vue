<script setup lang="ts">
import Error from '@/components/custom-error.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Error
      :code="404"
      subtitle-key="errors.notFound.title"
      error-key="errors.notFound.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
  titleKey: errors.notFound.title
</route>
