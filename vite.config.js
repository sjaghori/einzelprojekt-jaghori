import { defineConfig } from 'vite'
import { resolve, join } from 'path'

export default defineConfig({
  root: join(__dirname, 'src'),
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/routes/about.html'),
        contents: resolve(__dirname, 'src/routes/contents.html'),
        home: resolve(__dirname, 'src/routes/home.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, './src/styles/')
    }
  }
})
