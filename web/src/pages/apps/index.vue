<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { TSort } from '@/components/sort-select/types'

import { BasicPage } from '@/components/global-layout'
import SortSelect from '@/components/sort-select/index.vue'

import AppCard from './components/app-card.vue'
import apps from './data/apps'

const { t } = useI18n()

const appList = ref(apps)

type AppType = 'all' | 'connected' | 'notConnected'

const searchTerm = ref('')
const appType = ref<AppType>('all')
const appTypeOptions = computed(() => ([
  { value: 'all', label: t('pages.apps.filters.types.all') },
  { value: 'connected', label: t('pages.apps.filters.types.connected') },
  { value: 'notConnected', label: t('pages.apps.filters.types.notConnected') },
] as const))

const selectedAppTypeLabel = computed(() => {
  return appTypeOptions.value.find(option => option.value === appType.value)?.label ?? appType.value
})

const sort = ref<TSort>('asc')

watch(searchTerm, (newValue) => {
  if (!newValue)
    appList.value = apps

  appList.value = apps.filter((app) => {
    return app.name.toLowerCase().includes(newValue.toLowerCase())
  })
})

watch(sort, (newValue) => {
  appList.value = apps.sort((a, b) => {
    if (newValue === 'asc')
      return a.name.localeCompare(b.name)
    return b.name.localeCompare(a.name)
  })
})

watch(appType, (newValue) => {
  appList.value = apps.filter((app) => {
    if (newValue === 'all')
      return true
    return newValue === 'connected'
      ? app.connected
      : !app.connected
  })
})
</script>

<template>
  <BasicPage
    :title="t('pages.apps.title')"
    :description="t('pages.apps.description')"
    sticky
  >
    <div class="flex items-end justify-between sm:items-center">
      <div class="flex flex-col gap-4 sm:flex-row">
        <UiInput
          v-model:model-value="searchTerm"
          :placeholder="t('pages.apps.filters.placeholder')"
          class="h-9 w-40 lg:w-[250px]"
        />

        <UiSelect v-model:model-value="appType">
          <UiSelectTrigger class-name="w-36">
            <UiSelectValue>{{ selectedAppTypeLabel }}</UiSelectValue>
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectItem v-for="option in appTypeOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </div>

      <SortSelect v-model:sort="sort" />
    </div>
    <main class="grid grid-cols-1 gap-4 mt-2 lg:grid-cols-3">
      <AppCard
        v-for="(app, index) in appList" :key="index"
        :app="app"
      />
    </main>
  </BasicPage>
</template>

<route lang="yaml">
meta:
  auth: true
  titleKey: pages.apps.title
</route>
