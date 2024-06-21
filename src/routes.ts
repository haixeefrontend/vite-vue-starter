import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: () => import('./pages/home.vue') },
  { path: '/about', name: 'about', component: () => import('./pages/about.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
