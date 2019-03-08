<template>
  <div id="app">
    <Bg/>
    <Header :is-menu-open="isMenuOpen" />
    <main ref="scrollingContainer">
      <div class="main-content">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </div>
    </main>
  </div>
</template>
<script>
// import Header from './componets/Header'
import Header from '@/components/Header'
import Bg from '@/components/Background'
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  components: {
    Header,
    Bg
  },
  methods: {
   
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
</style>
