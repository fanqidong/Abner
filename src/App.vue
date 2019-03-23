<template>
  <div id="abner" :class="{'mobile-menu-open':isMobileMenuOpen}">
    <!-- <Bg/> -->
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
    <!-- <Loading/> -->
    <a href="javascript:;" class="go-top" @click="goTop">
      <i class="fa fa-github"></i>
    </a>
  </div>
</template>
<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
// import Bg from "@/components/Background"
import MobileMenu from "@/components/MobileMenu"
import Loading from "@/components/Loading"
export default {
  name: "App",
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false
    }
  },
  components: {
    Header,
    // Bg,
    MobileMenu,
    Footer,
    Loading
  },
  methods: {
    setMenu(status) {
      this.isMobileMenuOpen = status
    },
    closeMenu(status) {
      this.isMobileMenuOpen = status
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
    window.addEventListener("scroll",() => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        scrollTop >= 0 ? (this.isMenuOpen = true) : (this.isMenuOpen = false)
      },{ passive: true })
  },
  destroyed: function() {}
}
</script>

<style lang="scss">
#abner {
  position: relative;
  min-height: 100vh;
  padding-bottom: 1.4rem;
  text-align: center;
}
.main-content {
  overflow: hidden;
}
.mobile-menu-open {
  .menu-mask {
    opacity: 0.7;
    transform: translateX(-100%);
    transition: opacity .3s;
  }
  .menu-mobile {
    transform: translateX(100%);
  }
}
.menu-mask {
  position: fixed;
  left: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 998;
  opacity: 0;
}
.go-top {
  position: fixed;
  right: 2%;
  bottom: 8%;
  z-index: 100;
  font-size: .4rem;
}
</style>
