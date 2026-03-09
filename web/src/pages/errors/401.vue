<script setup lang="ts">
import Error from '@/components/custom-error.vue'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <Error
      :code="401"
      subtitle-key="errors.unauthorized.title"
      error-key="errors.unauthorized.description"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: blank
  titleKey: errors.unauthorized.title
</route>
