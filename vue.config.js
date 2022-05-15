// module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//                 // 此处的写法，目的是为了 将 /api 替换成 https://v.api.aa1.cn/api/yiyan 剩下+this.$axios.get('/index.php')
//                 // target: 'http://t.weather.sojson.com/api/weather/city/',//w--->t
//                 target: 'http://localhost:8080',//本地链接
//                 // 允许跨域
//                 changeOrigin: true,
//                 ws: true,
//                 pathRewrite: {
//                     '^/api': ''
//                 }
//             }
//         },
//         port: 8080, // 端口号
//         open: true
//     },
//     lintOnSave: false,// eslint-loader 是否在保存的时候检查
//   publicPath: "./",// 基本路径
//   outputDir: "dist",// 输出文件目录
//   assetsDir: "static",//设置放置打包生成的静态资源 (js、css、img、fonts) 的目录。
//   indexPath: 'index.html'
// }

module.exports = {
    //assetsDir: 'public', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    //publicPath: '/', //部署应用包时的基本 URL。  
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/api': ''
          }
        }
      },
      host: 'localhost', //
      port: 8080, //
    },
  }