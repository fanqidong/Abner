<template>
  <div id="app">
    <Bg :opacity="opacity" :height="height"/>
    <Header/>
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
import { getWindowHeight } from '@/utils/dom'
export default {
  name: 'App',
  data() {
    return {
      animationRate: 0.4,
      scrollTop: 0,
      opacity: 1,
      height: ''
    }
  },
  components: {
    Header,
    Bg
  },
  methods: {
    handleScroll: function() {
      this.scrollTop = document.documentElement.scrollTop
      console.log(this.scrollTop)
      this.opacity = this.scrollTop / 100
    }
  },
  created(){
    this.height=getWindowHeight
  },
  mounted() {
    console.log(this.height)
    window.addEventListener('scroll',()=>{
      this.opacity = ((1- document.documentElement.scrollTop / 400) < 0)? 0 : 1- document.documentElement.scrollTop / 400
      console.log(`透明度为${this.opacity}`)
    },false)
  },
  destroyed: function() {
  }
}
</script>

<style lang="scss">
</style>
