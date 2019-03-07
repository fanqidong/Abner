<template>
  <div id="app">
    <Bg :opacity="opacity" />
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
export default {
  name: 'App',
  data() {
    return {
      animationRate: 0.4,
      scrollTop: 0,
      opacity: 1
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
  mounted() {
    // window.addEventListener('scroll',()=>{
    //   this.opacity = ((1- document.documentElement.scrollTop / 400) < 0)? 0 : 1- document.documentElement.scrollTop / 400
    //   console.log(`透明度为${this.opacity}`)
    // },false)
  },
  destroyed: function() {
    this.$refs.scrollingContainer.removeEventListener('scroll', this.handleScroll, false)
  }
}
</script>

<style lang="scss">

.main-content {
  // max-width: 900px;
  // margin: auto;
}
</style>
