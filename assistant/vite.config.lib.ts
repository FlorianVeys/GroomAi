// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'GroomAssistant',
      fileName: 'groom-assistant',
    },
    rollupOptions: {
        plugins: [
            // Preferably set as first plugin.
            peerDepsExternal(),
        ],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})