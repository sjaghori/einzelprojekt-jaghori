import { defineConfig } from 'vite'
import { resolve, join } from 'path'

export default defineConfig({
  root: join(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, './src/styles/')
    }
  }
})
