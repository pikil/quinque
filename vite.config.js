import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
// import { https } from './dev_srv.json'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    proxy: {}
    // https // Use this for setting up ssl
  }
})
