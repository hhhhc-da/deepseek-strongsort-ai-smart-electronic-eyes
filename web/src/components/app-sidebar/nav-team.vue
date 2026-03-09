<script lang="ts" setup>
import {
  ChevronRight,
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'

import { useSidebar } from '@/components/ui/sidebar'

import type { NavGroup, NavItem } from './types'

const { navMain } = defineProps<{
  navMain: NavGroup[]
}>()

const { t } = useI18n()

const route = useRoute()

const { state, isMobile } = useSidebar()

function getMenuLabel(item: { titleKey: string, title?: string }) {
  return item.title ?? t(item.titleKey)
}

function isCollapsed(menu: NavItem): boolean {
  const pathname = route.path
  navMain.forEach((group) => {
    group.items.forEach((item) => {
      if (item.url === pathname) {
        return true
      }
    })
  })
  return !!menu.items?.some(item => item.url === pathname)
}

function isActive(menu: NavItem): boolean {
  const pathname = route.path
  if (menu.url) {
    return pathname === menu.url
  }
  return !!menu.items?.some(item => item.url === pathname)
}
</script>

<template>
  <UiSidebarGroup v-for="group in navMain" :key="group.titleKey">
    <UiSidebarGroupLabel>{{ getMenuLabel(group) }}</UiSidebarGroupLabel>
    <UiSidebarMenu>
      <template v-for="menu in group.items" :key="menu.url ?? menu.titleKey">
        <UiSidebarMenuItem v-if="!menu.items">
          <UiSidebarMenuButton as-child :is-active="isActive(menu)" :tooltip="getMenuLabel(menu)">
            <router-link :to="menu.url">
              <component :is="menu.icon" />
              <span>{{ getMenuLabel(menu) }}</span>
            </router-link>
          </UiSidebarMenuButton>
        </UiSidebarMenuItem>

        <UiSidebarMenuItem v-else>
          <!-- sidebar expanded -->
          <UiCollapsible
            v-if="state !== 'collapsed' || isMobile"
            as-child :default-open="isCollapsed(menu)"
            class="group/collapsible"
          >
            <UiSidebarMenuItem>
              <UiCollapsibleTrigger as-child>
                <UiSidebarMenuButton :tooltip="getMenuLabel(menu)">
                  <component :is="menu.icon" v-if="menu.icon" />
                  <span>{{ getMenuLabel(menu) }}</span>
                  <ChevronRight
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </UiSidebarMenuButton>
              </UiCollapsibleTrigger>
            </UiSidebarMenuItem>
            <UiCollapsibleContent>
              <UiSidebarMenuSub>
                <UiSidebarMenuSubItem v-for="subItem in menu.items" :key="subItem.url ?? subItem.titleKey">
                  <UiSidebarMenuSubButton as-child :is-active="isActive(subItem as NavItem)">
                    <router-link :to="subItem?.url || '/'">
                      <component :is="subItem.icon" v-if="subItem.icon" />
                      <span>{{ getMenuLabel(subItem) }}</span>
                    </router-link>
                  </UiSidebarMenuSubButton>
                </UiSidebarMenuSubItem>
              </UiSidebarMenuSub>
            </UiCollapsibleContent>
          </UiCollapsible>

          <!-- sidebar collapsed -->
          <UiDropdownMenu v-else>
            <UiDropdownMenuTrigger as-child>
              <UiSidebarMenuButton :tooltip="getMenuLabel(menu)">
                <component :is="menu.icon" v-if="menu.icon" />
                <span>{{ getMenuLabel(menu) }}</span>
              </UiSidebarMenuButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="start" side="right">
              <UiDropdownMenuLabel>{{ getMenuLabel(menu) }}</UiDropdownMenuLabel>
              <UiDropdownMenuSeparator />
              <UiDropdownMenuItem v-for="subItem in menu.items" :key="subItem.url ?? subItem.titleKey" as-child>
                <router-link :to="subItem?.url || '/'">
                  <component :is="subItem.icon" v-if="subItem.icon" />
                  <span>{{ getMenuLabel(subItem) }}</span>
                </router-link>
              </UiDropdownMenuItem>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </UiSidebarMenuItem>
      </template>
    </UiSidebarMenu>
  </UiSidebarGroup>
</template>
