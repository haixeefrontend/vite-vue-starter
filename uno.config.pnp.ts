import { presetHaixee } from '@haixee/unocss-preset'
import { defineConfig, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetHaixee()],
  transformers: [transformerVariantGroup()],
  shortcuts: {
    responsive: 'w-full h-full px-4 lg:(mx-auto max-w-1200px)'
  }
})
