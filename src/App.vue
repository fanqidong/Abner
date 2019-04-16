<template>
  <!-- <div id="abner" :style="{paddingBottom:`${footerHeight}px`}"> -->
  <div id="abner">
    <Header
      :is-menu-open="isMenuOpen"
      @toggle-menu="setMenu"
      :class="[{'isvisible': isvisible},{'ishidden':ishidden}]"
      ref="nav"
    />
    <div :class="['mobile-menu-wrapper',{'mobile-menu-open':isMobileMenuOpen}]">
      <MobileMenu @handle-menu="closeMenu"/>
      <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
    </div>
    <!-- 主题内容 S -->
    <main id="page">
      <div class="main-content">
        <transition name="fadeIn" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </main>
    <!-- 主题内容 E -->
    <Footer ref="footer"/>
    <!-- <MusicBox /> -->
    <!-- 回到顶部 S -->
    <a href="javascript:;" :class="['go-top',isButtonShow && 'show']" @click="goTop">
      <!-- 回到顶部 E -->
      <i class="iconfont icon-rocket"></i>
    </a>
    <!-- 网站点赞 S -->
    <div class="sitelike-wrapper" :class="isButtonShow && 'show'" v-if="!$isMobile">
      <!-- 网站点赞 E -->
      <div class="heart-content" @click="likeSite">
        <i class="iconfont icon-heart"></i>
      </div>
      <div class="like-tips font14">
        <span v-if="haveLikeSite"></span>
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
import { setTitle, getScrollTop, Scroll, debounce } from "@/utils/dom"
import store from "@/store"
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false,
      isButtonShow: false,
      isvisible: false,
      ishidden: false,
      haveLikeSite: window.localStorage.getItem("haveLikeSite"),
      likeTimes: 0,
      scrollRate: "",
      footerHeight: " "
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
    getFooterHeight() {
      this.footerHeight = document.querySelector(".footer").offsetHeight
    },
    setMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 导航显示隐藏
    getTop() {
      let scrollTop = getScrollTop()
      let navTop = this.$refs.nav.$el.offsetHeight
      window.addEventListener(
        "scroll",
        debounce(() => {
          let _scrollTop = getScrollTop()
          _scrollTop > window.innerHeight / 2 ? (this.isButtonShow = true) : (this.isButtonShow = false)
          this.scrollRate = 1 - _scrollTop / 400 < 0 ? 0 : 1 - _scrollTop / 400
          if (_scrollTop > navTop) {
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
      // let scrollTop = getScrollTop()
      // if (scrollTop > 0) {
      //   requestAni(this.goTop)
      //   window.scrollTo(0, scrollTop - Math.floor(scrollTop/6))
      // }
      // if (scrollTop <= 10) {
      //   cancelAnimationFrame(this.goTop)
      //   window.scrollTo(0, 0)
      // }
    // 回到顶部
      Scroll(0, 200)
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
    this.getFooterHeight()
    setTitle()
    this.getTop()
    this.queryLikeSite()
  }
}
</script>
<style lang="scss">
@import "./assets/sass/animation.scss";
.sitelike-wrapper {
  display: none;
  position: fixed;
  bottom: 40%;
  right: 1%;
  .like-tips {
    position: absolute;
    left: -140px;
    top: -40px;
    margin-top: -20px;
    padding: 0.1rem;
    min-width: 140px;
    text-align: center;
    background: #fff;
    border-radius: 20px;
    transform: scale(0);
    transform-origin: right bottom;
    transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .have-like {
    position: absolute;
    width: 140px;
    left: -150px;
    top: 5px;
    background: #fff;
    padding: 4px 8px;
    border-radius: 20px;
    animation: zoomIn 1s both;
  }
  &:hover {
    .like-tips {
      transform: scale(1);
    }
  }
}
.heart-content {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #fff;
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    i {
      animation: heartbeat 1s infinite;
    }
  }
  i {
    display: block;
    font-size: 0.22rem;
    margin-right: 0;
  }
}
body {
  display: flex;
  flex-direction: column;
}
#page {
  flex: 1;
  min-height: 100vh;
}
</style>


