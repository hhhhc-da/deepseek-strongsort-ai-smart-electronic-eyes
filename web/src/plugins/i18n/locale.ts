export type LocaleCode = 'zh' | 'en'

type LocaleDir = 'ltr' | 'rtl'

export interface LocaleConfig {
  code: LocaleCode
  labelKey: string
  dayjs: string
  dir: LocaleDir
}

export const DEFAULT_LOCALE: LocaleCode = 'zh'

export const SUPPORTED_LOCALES: LocaleConfig[] = [
  {
    code: 'zh',
    labelKey: 'common.languages.zh',
    dayjs: 'zh-cn',
    dir: 'ltr',
  },
  {
    code: 'en',
    labelKey: 'common.languages.en',
    dayjs: 'en',
    dir: 'ltr',
  },
]

const localeMap = new Map<LocaleCode, LocaleConfig>(
  SUPPORTED_LOCALES.map(locale => [locale.code, locale]),
)
const supportedCodes = new Set<LocaleCode>(SUPPORTED_LOCALES.map(locale => locale.code))

export function normalizeLocale(input?: string | null): LocaleCode | null {
  if (!input)
    return null

  const normalized = input.replace('_', '-').toLowerCase()
  const base = normalized.split('-')[0] as LocaleCode

  return supportedCodes.has(base) ? base : null
}

export function getLocaleConfig(code: LocaleCode): LocaleConfig {
  return localeMap.get(code) ?? localeMap.get(DEFAULT_LOCALE)!
}

export function getBrowserLocale(): LocaleCode | null {
  if (typeof navigator === 'undefined')
    return null

  const candidates = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language]

  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate)
    if (normalized)
      return normalized
  }

  return null
}

export function resolveLocale(preferred?: string | null): LocaleCode {
  return normalizeLocale(preferred) ?? getBrowserLocale() ?? DEFAULT_LOCALE
}

export function applyHtmlLangDir(locale: LocaleCode) {
  if (typeof document === 'undefined')
    return

  const config = getLocaleConfig(locale)
  document.documentElement.lang = config.code
  document.documentElement.dir = config.dir
}
