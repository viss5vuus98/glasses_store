
export default {
  base: '/glasses_store', //設置Git Pages的根目錄
  assetsDir: 'assets', //設置靜態資源目錄
  // resolve: {
  //   alias: {
  //         '/images': 'src/assets/images',
  //       },
  //   },
  // 設定伺服器選項
  server: {
    port: 3000, //設置服務器啟動端口號
    open: '@/pages/index.html', //設置服務器啟動時是否自動打開瀏覽器
  },
  // 設定構建選項
  build: {
    outDir: 'dist' //設置輸出目錄
  }
}