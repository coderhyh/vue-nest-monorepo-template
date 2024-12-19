import { defineConfig } from 'tsup'

export default defineConfig({
  // clean: true,
  dts: true,
  entry: [
    'types/index.ts',
    'utils/index.ts',
  ],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
})
