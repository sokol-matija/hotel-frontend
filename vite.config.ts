import path from 'node:path'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: {
    dedupe: ["react", "react-dom", "react-i18next", "i18next"],
  },
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    nitro({
      preset: "vercel",
      alias: {
        'react-i18next': path.resolve(__dirname, 'node_modules/react-i18next/dist/es/index.js'),
      },
    }),
    viteReact(),
  ],
})

export default config
