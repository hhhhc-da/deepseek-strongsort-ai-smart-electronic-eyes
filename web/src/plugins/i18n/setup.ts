import type { App } from 'vue'

import dayjs from 'dayjs'
import { watch } from 'vue'
import { createI18n } from 'vue-i18n'

import { useLocaleStore } from '@/stores/locale'

import { applyHtmlLangDir, DEFAULT_LOCALE, getLocaleConfig, normalizeLocale, resolveLocale } from './locale'
import { messages } from './messages'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

function applyLocale(locale: string) {
  const normalized = normalizeLocale(locale) ?? DEFAULT_LOCALE
  i18n.global.locale.value = normalized
  applyHtmlLangDir(normalized)
  dayjs.locale(getLocaleConfig(normalized).dayjs)
}

export function setupI18n(app: App) {
  const localeStore = useLocaleStore()
  const initialLocale = resolveLocale(localeStore.locale)

  if (localeStore.locale !== initialLocale)
    localeStore.setLocale(initialLocale)

  applyLocale(initialLocale)

  watch(() => localeStore.locale, (nextLocale) => {
    const normalized = normalizeLocale(nextLocale) ?? DEFAULT_LOCALE
    if (normalized !== nextLocale) {
      localeStore.setLocale(normalized)
      return
    }
    applyLocale(normalized)
  })

  app.use(i18n)
}
