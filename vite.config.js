import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { https } from './dev_srv.json' with { type: 'json' }

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit()
  ],
  server: {
    https, // Use this for using SSL (essential for online mode)
    proxy: {}
  }
})
