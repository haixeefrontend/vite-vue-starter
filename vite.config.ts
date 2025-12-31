import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import uno from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    uno(),
    // https://unplugin.unjs.io/showcase/unplugin-auto-import.html#configuration
    AutoImport({
      imports: [
        'vue',

        // Auto-Import Custom Packages
        {
          // Project Custom APIs
          '@/api': [
            'useApi',
          ],
        },
      ],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      dts: true,
      resolvers: [
        ElementPlusResolver(),
      ],
    }),
    ElementPlus({ defaultLocale: 'zh-cn', useSource: true }),
  ],
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
        api: 'modern',
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
