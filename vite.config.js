import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { https } from './dev_srv.json'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    https, // Use this for using SSL (essential for online mode)
    proxy: {}
  }
})
