<template>
  <div id="abner">
    <Bg/>
    <Header
      :is-menu-open="isMenuOpen"
      @toggle-menu="setMenu"
      :class="[{'isvisible': isvisible},{'ishidden':ishidden}]"
      ref="nav" />
    <div :class="['mobile-menu-wrapper',{'mobile-menu-open':isMobileMenuOpen}]">
      <MobileMenu @handle-menu="closeMenu"/>
      <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
    </div>
    <main>
      <div class="main-content" >
        <transition name="fadeIn" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </main>
    <Footer/>
    <!-- <MusicBox /> -->
    <a href="javascript:;" :class="['go-top',isButtonShow?'show':'']" @click="goTop">
      <i class="iconfont icon-rocket"></i>
    </a>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Bg from "@/components/Background"
import MobileMenu from "@/components/MobileMenu"
import Loading from "@/components/Loading"
import MusicBox from "@/components/MusicBox"
import { setTitle } from "@/utils/dom"
import _ from "lodash"

export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false,
      isButtonShow: false,
      isvisible: false,
      ishidden: false
    }
  },
  components: {
    Header,
    Bg,
    MobileMenu,
    Footer,
    Loading,
    MusicBox
  },
  methods: {
    setMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 设置导航显示隐藏
    getTop() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      let initTop = this.$refs.nav.$el.offsetHeight
      window.addEventListener(
        "scroll",
        _.debounce(() => {
          let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
          _scrollTop > window.innerHeight ? (this.isButtonShow = true) : (this.isButtonShow = false)
          if (_scrollTop > initTop) {
            this.ishidden = true
            this.isvisible = false
            if (_scrollTop > scrollTop) {
              this.ishidden = true
              this.isvisible = false
            } else {
              this.ishidden = false
              this.isvisible = true
            }
          } else {
            this.ishidden = false
            this.isvisible = false
          }
          scrollTop = _scrollTop
        }, 200),
        { passive: true }
      )
    },
    closeMenu(status) {
      this.isMobileMenuOpen = status
    },
    goTop() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (scrollTop > 0) {
        window.requestAnimationFrame(this.goTop)
        window.scrollTo(0, scrollTop - scrollTop / 10)
      }
    }
  },
  created() {},
  mounted() {
    //   页面标题彩蛋
    setTitle()
    this.getTop()
  }
}
</script>

