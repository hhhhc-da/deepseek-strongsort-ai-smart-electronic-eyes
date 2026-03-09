import enCommon from './locales/en/common.json'
import enErrors from './locales/en/errors.json'
import enMarketing from './locales/en/marketing.json'
import enNav from './locales/en/nav.json'
import enPages from './locales/en/pages.json'
import zhCommon from './locales/zh/common.json'
import zhErrors from './locales/zh/errors.json'
import zhMarketing from './locales/zh/marketing.json'
import zhNav from './locales/zh/nav.json'
import zhPages from './locales/zh/pages.json'

export const messages = {
  en: {
    ...enCommon,
    ...enMarketing,
    ...enNav,
    ...enErrors,
    ...enPages,
  },
  zh: {
    ...zhCommon,
    ...zhMarketing,
    ...zhNav,
    ...zhErrors,
    ...zhPages,
  },
} as const
