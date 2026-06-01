import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/reddit': {
        target: "https://api.reddit.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/reddit/, ''),
        headers: {
            "User-Agent": "web:myredditapp:v1.0 (by /u/yourusername)"
        }
      }
    },
  }
})
