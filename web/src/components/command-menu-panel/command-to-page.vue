<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSidebar } from '@/composables/use-sidebar'

import type { NavGroup, NavItem } from '../app-sidebar/types'

import CommandItemHasIcon from './command-item-has-icon.vue'

const emit = defineEmits<{
  (e: 'click'): void
}>()

const { t } = useI18n()

const { navData, otherPages } = useSidebar()

function getFlatNavItems(navData: NavGroup[]): NavItem[] {
  const flatItems: NavItem[] = []
  navData.forEach((group) => {
    group.items.forEach((item) => {
      if (item.items) {
        flatItems.push(...getFlatNavItems([item as unknown as NavGroup]))
      }
      else {
        flatItems.push(item)
      }
    })
  })
  return flatItems
}

const commands = computed(() => getFlatNavItems([
  ...(navData.value ?? []),
  ...(otherPages.value ?? []),
]))

const router = useRouter()
const route = useRoute()
function commandItemClick(url: string) {
  emit('click')
  if (route.fullPath !== url) {
    router.push(url)
  }
}

function getCommandLabel(item: { titleKey: string, title?: string }) {
  return item.title ?? t(item.titleKey)
}
</script>

<template>
  <UiCommandGroup :heading="t('nav.command.pages')">
    <UiCommandItem
      v-for="command in commands"
      :key="command.url ?? command.titleKey"
      :value="getCommandLabel(command)"
      @click="commandItemClick(command.url!)"
    >
      <CommandItemHasIcon :name="getCommandLabel(command)" :icon="command.icon" />
    </UiCommandItem>
  </UiCommandGroup>
</template>
