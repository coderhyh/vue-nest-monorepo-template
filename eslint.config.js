import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    ignores: ['**/node_modules/**', '**/dist/**'],
    typescript: true,
    unocss: true,
    vue: true,
    yaml: true,
  },
  {
    rules: {
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'no-sequences': 'off',
      'node/prefer-global/process': 'off',
      // 'perfectionist/sort-objects': 'warn',
      'unused-imports/no-unused-vars': 'off',
      'vue/attributes-order': 'error',
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
    },
  },
)
