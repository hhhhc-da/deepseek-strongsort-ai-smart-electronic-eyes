<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { LocaleCode } from '@/plugins/i18n/locale'

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/plugins/i18n/locale'
import { useLocaleStore } from '@/stores/locale'

const { t } = useI18n()
const localeStore = useLocaleStore()

const localeIcons: Record<LocaleCode, string> = {
  en: 'flag:us-4x3',
  zh: 'flag:cn-4x3',
}

const selectedLocale = computed({
  get: () => (localeStore.locale || DEFAULT_LOCALE) as LocaleCode,
  set: (value: LocaleCode) => localeStore.setLocale(value),
})

const currentLocaleLabel = computed(() => {
  const current = SUPPORTED_LOCALES.find(locale => locale.code === selectedLocale.value) ?? SUPPORTED_LOCALES[0]
  return t(current.labelKey)
})
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="outline">
        <Icon icon="mdi:translate" />
        {{ currentLocaleLabel }}
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent class="w-56">
      <UiDropdownMenuLabel>{{ $t('changeLanguage') }}</UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuRadioGroup v-model="selectedLocale">
        <UiDropdownMenuRadioItem
          v-for="locale in SUPPORTED_LOCALES"
          :key="locale.code"
          :value="locale.code"
        >
          <Icon :icon="localeIcons[locale.code]" />
          <span class="ml-2">{{ t(locale.labelKey) }}</span>
        </UiDropdownMenuRadioItem>
      </UiDropdownMenuRadioGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
