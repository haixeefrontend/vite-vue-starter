import haixee from '@haixee/eslint-config'

import autoImportIgnores from './.eslintrc-auto-import.json' with { type: 'json' }

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...haixee.configs.typescript,
  ...haixee.configs.vue,
  {
    languageOptions: {
      ...autoImportIgnores,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.mjs'],
        },
      },
    },
  },
  {
    ignores: [
      '**/node_modules/**',
      '**/yarn.lock',
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/.vitepress/**',
      '**/dist/**',
      '**/coverage/**',
    ],
  },
]
