import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    outDir: 'dist', // Adjust the output directory as needed
    assetsDir: 'assets', // Adjust the assets directory as needed
    sourcemap: true, // Enable sourcemaps for debugging in production
    rollupOptions: {
      // Ensure proper handling of dynamic imports in production
      output: {
        manualChunks: undefined,
      },
    },
  },
})
