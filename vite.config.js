import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@styles': resolve(__dirname, './src/styles/')
    }
  }
})
