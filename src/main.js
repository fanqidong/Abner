import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import config from "./config/global.config"
Vue.config.productionTip = false

// 全局样式引入
import './assets/css/reset.css'
import './assets/sass/init.scss'
import './assets/sass/animation.scss'

// Vue图片懒加载
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
    preLoad: 1.3,
    error:'',
    loading:'http://img.zcool.cn/community/01f02059151e27b5b3086ed481bc0e.gif'
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')