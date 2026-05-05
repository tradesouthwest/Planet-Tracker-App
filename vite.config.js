import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for static hosting
  build: {
    assetsInlineLimit: 0, // Keep SVGs as separate files for caching
    minify: 'terser',
  }
});
