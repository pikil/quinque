import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    appDir: 'app',
    paths: {
      base: '/quinque'
    },
    adapter: adapter({
      fallback: 'index.html'
    }),
    alias: {
      $components: 'src/components',
      $data: 'src/data',
      $stores: 'src/stores',
      $layouts: 'src/layouts',
      $ui: 'src/components/ui',
      $blocks: 'src/components/blocks',
      $utils: 'src/utils',
      $vendor: 'src/vendor'
    }
  },
  preprocess: vitePreprocess()
}

export default config
