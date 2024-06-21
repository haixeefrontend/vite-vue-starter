import { createApp } from 'vue'

import { router } from './routes'
import { pinia } from './store'
import './style.scss'
import App from './App.vue'

createApp(App).use(router).use(pinia).mount('#app')
