<template>
  <div id="abner" :class="{'mobile-menu-open':isMobileMenuOpen}" @scroll.native="checkGoTOP">
    <Bg/>
    <Header :is-menu-open="isMenuOpen" @toggle-menu="setMenu"/>
    <MobileMenu @handle-menu="closeMenu"/>
    <main ref="scrollingContainer">
      <div class="main-content">
        <transition name="fadeIn" mode="out-in">
                <router-view/>
        </transition>
      </div>
    </main>
    <Footer/>
    <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
    <MusicBox />
    <!-- <Loading/> -->
    <a href="javascript:;" :class="['go-top',isButtonShow?'show':'hide']" @click="goTop">
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
import _ from 'lodash'
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false,
      isButtonShow:false
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
    closeMenu(status) {
      this.isMobileMenuOpen = status
    },
    checkGoTOP(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      console.log(scrollTop)
     if (scrollTop>400) {
          this.isButtonShow = true
      }else{
         this.isButtonShow = false
      }
    },
    goTop(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
       if (scrollTop > 0) {
          window.requestAnimationFrame(this.goTop);
          window.scrollTo(0,scrollTop-(scrollTop/10))
       }
    }
  },
  created() {},
  mounted() {
    //   页面标题彩蛋
    setTitle()
    window.addEventListener("scroll",() => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTop >= 0 ? (this.isMenuOpen = true) : (this.isMenuOpen = false)
      },{ passive: true })
  },
  destroyed: function() {}
}
</script>

