import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  // { path: '/', component: () => import('./pages/Home.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
