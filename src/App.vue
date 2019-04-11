<template>
  <div id="abner">
    <Bg/>
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
    <main>
      <div class="main-content">
        <transition name="fadeIn" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </main>
    <Footer/>
    <!-- <MusicBox /> -->
    <a href="javascript:;" :class="['go-top',isButtonShow && 'show']" @click="goTop">
      <i class="iconfont icon-rocket"></i>
    </a>
    <div class="sitelike-wrapper">
      <div class="heart-content" @click="likeSite">
        <i class="iconfont icon-heart"></i>
      </div>
      <div class="like-tips font14">
         已经有{{likeTimes}}人点赞了哦
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Bg from "@/components/Background"
import MobileMenu from "@/components/MobileMenu"
import Loading from "@/components/Loading"
import MusicBox from "@/components/MusicBox"
import { setTitle, requestAni } from "@/utils/dom"
import _ from "lodash"
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
      likeTimes: 0
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
    // 设置菜单状态
    setMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 获取滚动条高度
    getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    },
    // 设置导航显示隐藏
    getTop() {
      let scrollTop = this.getScrollTop()
      let navTop = this.$refs.nav.$el.offsetHeight
      window.addEventListener(
        "scroll",
        _.debounce(() => {
          let _scrollTop = this.getScrollTop()
          _scrollTop > window.innerHeight ? (this.isButtonShow = true) : (this.isButtonShow = false)
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
    // 控制菜单显示
    closeMenu(status) {
      this.isMobileMenuOpen = status
    },
    // 回到顶部
    goTop() {
      let scrollTop = this.getScrollTop()
      if (scrollTop > 0) {
        requestAni(this.goTop)
        window.scrollTo(0, scrollTop - scrollTop / 10)
      }
      if (scrollTop <= 10) {
        cancelAnimationFrame(this.goTop)
        window.scrollTo(0, 0)
      }
    },
    // 获取点赞数
    async queryLikeSite() {
      this.likeTimes= await store.dispatch("queryLikeSite",  "getTimes")
    },
    // 点赞存储
    async likeSite() {
      if (this.haveLikeSite) return
      this.likeTimes = await store.dispatch("queryLikeSite")
      this.haveLikeSite = true
      window.localStorage.setItem("haveLikeSite", true)
    }
  },
  created() {},
  mounted() {
    //   页面标题彩蛋
    setTitle()
    this.getTop()
    this.queryLikeSite()
  }
}
</script>
<style lang="scss">
@import './assets/sass/animation.scss';
.sitelike-wrapper {
  bottom: 5%;
  position: fixed;
  left: 1%;
  .like-tips{
    position: absolute;
    left: .2rem;
    top: -70%;
    margin-top: -20px;
    padding: .1rem;
    min-width: 140px;
    text-align: center;
    background: #fff;
    border-radius: 20px;
    transform: scale(0);
    transform-origin: left bottom;
    transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover{
    .like-tips{
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
  &:hover{
     i{
        animation: heartbeat 1s infinite;
     }
  }
  i{
    display: block;
    font-size: .22rem;
    margin-right: 0;
  }
}

</style>


