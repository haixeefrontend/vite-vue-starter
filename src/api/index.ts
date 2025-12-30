/* eslint-disable @typescript-eslint/no-explicit-any */
import { Internal } from './utils'

import type { Internal as LienInternal } from 'lien'
import type { App } from 'vue'

const api = new Internal()

declare module 'vue' {
  interface GlobalProperties {
    $api: LienInternal<any>
  }
}

export const useApi = () => {
  return api
}

export default {
  install(app: App) {
    app.config.globalProperties.$api = api
  },
}
