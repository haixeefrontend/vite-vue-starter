import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import uno from 'unocss/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), uno(), ElementPlus({ defaultLocale: 'zh-cn', useSource: true })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        /**
         * For use `sass-embedded` instead of `sass`
         * `sass-embedded` is binary version of `sass` which is faster
         */
        api: 'modern-compiler',
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
