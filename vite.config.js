import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob'

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}


export default defineConfig({
  base: '/glasses_store/', //設置Git Pages的根目錄
  //assetsDir: '/assets/images', //設置靜態資源目錄
  // resolve: {
  //   alias: {
  //         '/images': 'src/assets/images',
  //       },
  //   },
  plugins: [
    moveOutputPlugin(),
  ],

  // 設定伺服器選項
  server: {
    port: 3000, //設置服務器啟動端口號
    open: '/glasses_store/pages/index.html', //設置服務器啟動時是否自動打開瀏覽器
  },
  // 設定構建選項
  build: {
    outDir: 'dist', //設置輸出目錄
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('pages/**/*.html')
          .map((file) => [
            path.relative('pages', file.slice(0, -5)),
            path.resolve(__dirname, file),
          ])
      ),
    },
  }
})