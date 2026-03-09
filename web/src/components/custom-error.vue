<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  code: number
  subtitle?: string
  subtitleKey?: string
  error?: string
  errorKey?: string
}>()

const { t } = useI18n()

const subtitleText = computed(() => props.subtitle ?? (props.subtitleKey ? t(props.subtitleKey) : ''))
const errorText = computed(() => props.error ?? (props.errorKey ? t(props.errorKey) : ''))
</script>

<template>
  <div class="max-w-2xl mx-auto text-center">
    <h1 class="font-bold text-8xl">
      {{ code }}
    </h1>
    <h2 class="mt-4 text-2xl font-bold">
      {{ subtitleText }}
    </h2>
    <p class="text-stone-400">
      {{ errorText }}
    </p>

    <footer class="mt-8">
      <slot>
        <div class="flex justify-center gap-2">
          <UiButton variant="outline" @click="$router.back()">
            {{ t('errors.actions.back') }}
          </UiButton>
          <UiButton @click="$router.push('/')">
            {{ t('errors.actions.backHome') }}
          </UiButton>
        </div>
      </slot>
    </footer>
  </div>
</template>
