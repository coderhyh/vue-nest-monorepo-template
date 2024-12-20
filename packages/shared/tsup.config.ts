import { defineConfig } from 'tsup'

export default defineConfig({
  // clean: true,
  dts: true,
  entry: [
    'types/**/*.ts',
    'utils/**/*.ts',
  ],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
})
