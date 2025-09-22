import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' 
    ? '/pinkqqx-prog.github.io/' 
    : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
