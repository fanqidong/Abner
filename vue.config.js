module.exports = {
    productionSourceMap: false,
    runtimeCompiler: true,
    configureWebpack: {
        externals: {
          "leancloud-storage": "AV",
          // 'vue':'Vue',
          // 'vue-router': 'VueRouter',
          // 'vuex':'Vuex'
        }
      }
    // publicPath: '/abner'
}