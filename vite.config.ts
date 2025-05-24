import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    vueDevTools(),
  ],
  build: {
		sourcemap: true,
		chunkSizeWarningLimit: 1500,
		minify: 'terser',
		terserOptions: {
			compress: { drop_console: true, drop_debugger: true, passes: 2 },
			output: { comments: false },
		},
		rollupOptions: {
			treeshake: true,
		},
	},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url))
    },
  },
})
