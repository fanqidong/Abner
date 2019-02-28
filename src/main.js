import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import config from "./config/global.config"
Vue.config.productionTip = false

// 全局样式引入
import './assets/css/reset.css'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");