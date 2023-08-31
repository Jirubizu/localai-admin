import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8089,
    watch: {
      usePolling: true,
    }
  },
  plugins: [vue(), VueDevTools()],
})
