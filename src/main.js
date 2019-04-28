// import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import config from "./config/global.config"
import AV from "leancloud-storage"
import APlayer from '@moefe/vue-aplayer'

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png', // set the default cover
  productionTip: false, // disable console output
});

//初始化leancloud
window.AV.init(config.leancloud)

import vePie from "v-charts/lib/pie.common"
import veHistogram from "v-charts/lib/histogram.common"
// 注册饼图 柱状图
Vue.component(vePie.name, vePie)
Vue.component(veHistogram.name, veHistogram)

// 全局样式引入
import "./assets/css/reset.css"
import "./assets/sass/init.scss"
import "./assets/sass/animation.scss"
import "aos/dist/aos.css"
import "./assets/js/evanyou"
import {
  Scroll
} from "./utils/dom"
// 检测是否是移动端
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)

// 配置全局变量
Vue.config.productionTip = false
Vue.prototype.$isMobile = isMobile
Vue.prototype.$config = config
Vue.prototype.$gallery = null
Vue.prototype.$Scroll = Scroll


// Vue图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 3,
  error: require("../src/assets/img/bg7.png"),
  loading: "https://view.moezx.cc/images/2019/04/17/loading.gif"
})

// 切换页面销毁所有灯箱
router.beforeEach((to, from, next) => {
  // console.log(from)
  // Object.keys(window.lgData).forEach(k => {
  //     window.lgData[k].destroy && window.lgData[k].destroy(true)
  // })
  // window.lgData = {}
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

// 生产环境才加入百度统计
if (location.hostname === "www.luckydong.cn") {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?6d015a128eb19f8bcca11aadbe7993ff"
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")