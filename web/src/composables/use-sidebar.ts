import { BadgeHelp, BellDot, Boxes, Bug, Component, CreditCard, LayoutDashboard, ListTodo, Palette, PictureInPicture2, Podcast, Settings, SquareUserRound, User, Users, Wrench } from 'lucide-vue-next'

import type { NavGroup } from '@/components/app-sidebar/types'

export function useSidebar() {
  const settingsNavItems = [
    { titleKey: 'nav.sidebar.settings.profile', url: '/settings/', icon: User },
    { titleKey: 'nav.sidebar.settings.account', url: '/settings/account', icon: Wrench },
    { titleKey: 'nav.sidebar.settings.appearance', url: '/settings/appearance', icon: Palette },
    { titleKey: 'nav.sidebar.settings.notifications', url: '/settings/notifications', icon: BellDot },
    { titleKey: 'nav.sidebar.settings.display', url: '/settings/display', icon: PictureInPicture2 },
  ]

  const navData = ref<NavGroup[]> ([
    {
      titleKey: 'nav.sidebar.groups.general',
      items: [
        { titleKey: 'nav.sidebar.items.dashboard', url: '/dashboard', icon: LayoutDashboard },
        { titleKey: 'nav.sidebar.items.tasks', url: '/tasks', icon: ListTodo },
        { titleKey: 'nav.sidebar.items.apps', url: '/apps', icon: Boxes },
        { titleKey: 'nav.sidebar.items.users', url: '/users', icon: Users },
        { titleKey: 'nav.sidebar.items.aiTalk', url: '/ai-talk', icon: Podcast },
        { titleKey: 'magic', url: '/magic', icon: Boxes },
        { titleKey: 'review', url: '/review', icon: Boxes },
      ],
    },
    {
      titleKey: 'nav.sidebar.groups.pages',
      items: [
        {
          titleKey: 'nav.sidebar.items.auth',
          icon: SquareUserRound,
          items: [
            { titleKey: 'nav.sidebar.auth.signIn', url: '/auth/sign-in' },
            { titleKey: 'nav.sidebar.auth.signInTwoCol', url: '/auth/sign-in-2' },
            { titleKey: 'nav.sidebar.auth.signUp', url: '/auth/sign-up' },
            { titleKey: 'nav.sidebar.auth.forgotPassword', url: '/auth/forgot-password' },
            { titleKey: 'nav.sidebar.auth.otp', url: '/auth/otp' },
          ],
        },
        {
          titleKey: 'nav.sidebar.items.errors',
          icon: Bug,
          items: [
            { titleKey: 'nav.sidebar.errors.unauthorized401', url: '/errors/401' },
            { titleKey: 'nav.sidebar.errors.forbidden403', url: '/errors/403' },
            { titleKey: 'nav.sidebar.errors.notFound404', url: '/errors/404' },
            { titleKey: 'nav.sidebar.errors.internal500', url: '/errors/500' },
            { titleKey: 'nav.sidebar.errors.maintenance503', url: '/errors/503' },
          ],
        },
      ],
    },
    {
      titleKey: 'nav.sidebar.groups.other',
      items: [
        { titleKey: 'nav.sidebar.items.settings', icon: Settings, items: settingsNavItems },
        { titleKey: 'nav.sidebar.items.svaComponents', url: '/sva-components', icon: Component },
        { titleKey: 'nav.sidebar.items.helpCenter', url: '/help-center', icon: BadgeHelp,
        },
      ],
    },
    {
      titleKey: 'debug',
      items: [
        {
          titleKey: 'mqtt',
          icon: Bug,
          url: '/mqtt',
        },
      ],
    },
  ])

  const otherPages = ref<NavGroup[]>([
    {
      titleKey: 'nav.sidebar.groups.other',
      items: [
        {
          titleKey: 'nav.sidebar.items.plansPricing',
          icon: CreditCard,
          url: '/billing',
        },
      ],
    },
  ])

  return {
    navData,
    otherPages,
    settingsNavItems,
  }
}
