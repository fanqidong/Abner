<template>
  <div id="abner" :class="{'mobile-menu-open':isMobileMenuOpen}">
    <Bg/>
    <Header :is-menu-open="isMenuOpen" @toggle-menu="setMenu"/>
    <MobileMenu @handle-menu="closeMenu" />
    <main ref="scrollingContainer">
      <div class="main-content">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </main>
    <div class="menu-mask" @click="isMobileMenuOpen=false"></div>
  </div>
</template>
<script>
import Header from '@/components/Header'
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
    MobileMenu
  },
  methods: {
    setMenu(status){
      this.isMobileMenuOpen = status
    },
    closeMenu(status){
      console.log(status)
      this.isMobileMenuOpen = status
    }
  },
  created(){
   
  },
  mounted() {
      window.addEventListener('scroll',()=>{
          document.documentElement.scrollTop >= 0? (this.isMenuOpen = true) : (this.isMenuOpen = false)
    })
  },
  destroyed: function() {
  }
}
</script>

<style lang="scss">
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
