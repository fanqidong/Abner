<template>
  <div id="app">
    <Bg/>
    <Header/>
    <main>
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
  components: {
    Header,
    Bg
  }
}
</script>

<style lang="scss">

.main-content{
    max-width: 900px;
    margin: auto;
}

</style>
