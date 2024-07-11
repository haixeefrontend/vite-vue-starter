import { useTitle } from '@vueuse/core'
import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    header?: {
      enabled: boolean
      order: number
    }
  }
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/home.vue'),
    meta: { title: '首页', header: { enabled: true, order: 0 } },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/about.vue'),
    meta: { title: '关于我们', header: { enabled: true, order: 1000 } },
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export const headers: RouteRecordRaw[] = routes
  .filter((route) => route.meta.header?.enabled)
  .sort((a, b) => a.meta.header!.order - b.meta.header!.order)

export const title = useTitle('首页', { titleTemplate: '%s' }) // TODO: Add a default title template
