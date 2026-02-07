import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DHA/', // GitHub Pages 部署路径
  server: {
    host: 'localhost',
    port: 5173,
    open: false,
    strictPort: false, // 如果端口被占用，自动尝试下一个可用端口
  },
})
