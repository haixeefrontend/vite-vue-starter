import { createApp } from 'vue'

import App from './App.vue'
import api from './api'
import { router } from './routes'
import { pinia } from './store'

import './style.scss'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

createApp(App).use(router).use(pinia).use(api).mount('#app')
