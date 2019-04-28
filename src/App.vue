<template>
  <div id="abner" :class="{'mobile-menu-open':isMobileMenuOpen}">
    <div class="mobile-menu-wrapper">
      <MobileMenu @handle-menu="closeMenu"/>
      <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
    </div>
    <main class="page-container">
      <Header @toggle-menu="setMenu" :class="ishidden&&'ishidden'"/>
      <!-- 主题内容 S -->
      <div class="main-content">
        <transition name="fadeIn" mode="out-in">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
          </keep-alive>
        </transition>
        <transition name="fadeIn" mode="out-in">
          <router-view v-if="!$route.meta.keepAlive"/>
        </transition>
      </div>
      <!-- 回到顶部 S -->
      <a href="javascript:;" :class="['go-top',isButtonShow && 'show']" @click="$Scroll(0, 200)">
        <i class="iconfont icon-rocket"></i>
      </a>
      <!-- 回到顶部 E -->
    </main>
    <!-- 主题内容 E -->
    <Footer ref="footer"/>
    <MusicBox />
    <!-- 网站点赞 S -->
    <div class="sitelike-wrapper" :class="isButtonShow && 'show'" v-if="!$isMobile">
      <!-- 网站点赞 E -->
      <div class="heart-content" @click="likeSite">
        <i class="iconfont icon-heart"></i>
      </div>
      <div class="like-tips font14">
        <span v-if="haveLikeSite">你已经点过赞啦！</span>
        <span v-else>已经有{{likeTimes?likeTimes:0}}人点赞了哦！😘</span>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Bg from "@/components/Background"
import MobileMenu from "@/components/MobileMenu"
import MusicBox from "@/components/MusicBox"
import { getScrollTop, debounce } from "@/utils/dom"
import store from "@/store"

export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false,
      isButtonShow: false,
      ishidden: false,
      haveLikeSite: window.localStorage.getItem("haveLikeSite"),
      likeTimes: 0,
      scrollRate: ""
    }
  },
  components: {
    Header,
    Bg,
    MobileMenu,
    Footer,
    MusicBox
  },
  methods: {
    setMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 导航显示隐藏
    getTop() {
      let scrollTop = getScrollTop()
      window.addEventListener(
        "scroll",
        debounce(() => {
          let _scrollTop = getScrollTop()
          _scrollTop > window.innerHeight / 2 ? (this.isButtonShow = true) : (this.isButtonShow = false)
          this.scrollRate = 1 - _scrollTop / 400 < 0 ? 0 : 1 - _scrollTop / 400
          if (_scrollTop > scrollTop) {
            this.ishidden = true
          } else {
            this.ishidden = false
          }
          scrollTop = _scrollTop
        }, 200),
        false
      )
    },
    closeMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 获取点赞数
    async queryLikeSite() {
      this.likeTimes = await store.dispatch("queryLikeSite", "getTimes")
    },
    async likeSite() {
      if (this.haveLikeSite) return
      this.likeTimes = await store.dispatch("queryLikeSite")
      this.haveLikeSite = true
      window.localStorage.setItem("haveLikeSite", true)
    }
  },
  mounted() {
    this.getTop()
    this.queryLikeSite()
  },
  beforeDestroy() {
    // window.removeEventListener("scroll")
  }
}
</script>
<style lang="scss">

</style>


