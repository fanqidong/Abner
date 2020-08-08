module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    externals: {
      "leancloud-storage": "AV",
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.baidu.com/json/tongji/v1/ReportService/getSiteList',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
    // publicPath: '/abner'
  }
}
