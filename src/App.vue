<template>
  <div id="abner" :class="{'mobile-menu-open':isMobileMenuOpen}">
    <Bg/>
    <Header :is-menu-open="isMenuOpen" @toggle-menu="setMenu"/>
    <MobileMenu @handle-menu="closeMenu" />
    <main ref="scrollingContainer">
      <div class="main-content">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
      </div>
    </main>
    <Footer />
    <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Bg from '@/components/Background'
import MobileMenu from '@/components/MobileMenu'
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      isMobileMenuOpen: false
    }
  },
  components: {
    Header,
    Bg,
    MobileMenu,
    Footer
  },
  methods: {
    setMenu(status){
      this.isMobileMenuOpen = status
    },
    closeMenu(status){
      this.isMobileMenuOpen = status
    }
  },
  created(){
   
  },
  mounted() {
      window.addEventListener('scroll',()=>{
          document.documentElement.scrollTop >= 0? (this.isMenuOpen = true) : (this.isMenuOpen = false)
    },{passive:true})
  },
  destroyed: function() {
  }
}
</script>

<style lang="scss">
#abner{
  // position: relative;
  min-height: 100vh;
  text-align: center;
}
.mobile-menu-open {
   .menu-mask{
      opacity: .7;
      transform: translateX(-100%);
      transition: opacity .5s;
   }
   .menu-mobile{
     transform: translateX(100%);
   }
}
.menu-mask{
    position: fixed;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 998;
    opacity: 0;
} 
</style>
