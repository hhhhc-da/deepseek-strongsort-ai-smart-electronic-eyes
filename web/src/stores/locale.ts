import { defineStore } from 'pinia'

import type { LocaleCode } from '@/plugins/i18n/locale'

import { DEFAULT_LOCALE, normalizeLocale } from '@/plugins/i18n/locale'

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref<LocaleCode | ''>('')

  function setLocale(value: string) {
    const normalized = normalizeLocale(value) ?? DEFAULT_LOCALE
    locale.value = normalized
  }

  return {
    locale,
    setLocale,
  }
}, {
  persist: {
    storage: localStorage,
  },
})
