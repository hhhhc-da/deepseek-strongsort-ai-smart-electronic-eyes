import type { Router } from 'vue-router'

import nprogress from 'nprogress'
import { watch } from 'vue'

import { i18n } from '@/plugins/i18n/setup'

import { authGuard } from './auth-guard'

/**
 * global router guard
 * now only used for progress bar
 */
function setupCommonGuard(router: Router) {
  router.beforeEach(() => {
    nprogress.start()
    return true
  })
  router.afterEach((to) => {
    nprogress.done()
    updateDocumentTitle(String(to.meta?.titleKey || ''))
    return true
  })
}

function updateDocumentTitle(titleKey?: string) {
  if (typeof document === 'undefined')
    return

  const appName = i18n.global.t('common.appName')
  if (!titleKey) {
    document.title = appName
    return
  }

  const pageTitle = i18n.global.t(titleKey)
  document.title = pageTitle ? `${pageTitle} | ${appName}` : appName
}

export function createRouterGuard(router: Router) {
  setupCommonGuard(router)
  authGuard(router)

  watch(() => i18n.global.locale.value, () => {
    updateDocumentTitle(String(router.currentRoute.value.meta?.titleKey || ''))
  })

  updateDocumentTitle(String(router.currentRoute.value.meta?.titleKey || ''))
}
