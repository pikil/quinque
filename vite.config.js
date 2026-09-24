import { existsSync, readFileSync } from 'node:fs'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Local-only SSL settings; absent on CI, where only `vite build` runs.
const devServerFile = new URL('./dev_srv.json', import.meta.url)
const { https } = existsSync(devServerFile) ? JSON.parse(readFileSync(devServerFile, 'utf8')) : {}

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
