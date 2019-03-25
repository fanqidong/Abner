import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import config from "./config/global.config"
import AV from 'leancloud-storage';
//初始化leancloud
AV.init(config.leancloud)
// 全局样式引入
import './assets/css/reset.css'
import './assets/sass/init.scss'
import './assets/sass/animation.scss'
import 'aos/dist/aos.css'
// 检测是否是移动端
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)

// 配置全局变量
Vue.config.productionTip = false
Vue.prototype.$isMobile = isMobile
Vue.prototype.$config = config
Vue.prototype.$gallery = null
// Vue图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: require('../src/assets/img/bg7.png'),
    loading: 'http://img.zcool.cn/community/01f02059151e27b5b3086ed481bc0e.gif'
})

// 切换页面销毁所有灯箱
router.beforeEach((to, from, next) => {
    Object.keys(window.lgData).forEach(k => {
        window.lgData[k].destroy && window.lgData[k].destroy(true)
    })
    window.lgData = {}
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')