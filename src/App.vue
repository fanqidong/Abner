<template>
  <div id="app">
    <Bg/>
    <Header/>
    <main>
      <div class="main-content">
        <transition name="fade" mode="out-in">
          <router-view/>
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
  components: {
    Header,
    Bg
  }
}
</script>

<style lang="scss">
@import url('../src/assets/sass/init.scss');
@import url('../src/assets/sass/animation.scss');

.fade-enter-active {
  animation: zoomIn 0.4s;
}
.fade-leave-active {
  animation: zoomOut 0.4s;
}
.main-content{
    max-width: 900px;
    margin: auto;
}

</style>
