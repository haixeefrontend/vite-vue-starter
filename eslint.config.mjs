import haixee from '@haixee/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...haixee.configs.typescript,
  ...haixee.configs.vue,
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.mjs'],
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
