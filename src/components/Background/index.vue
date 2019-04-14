<template>
  <div class="site site-banner flex-center flex-column">
    <section class="site-meta absolute-full flex-center flex-column  cfff">
      <div
        class="site-info"
        :style="{'transform':`scale3d(${opacity},${opacity},${opacity})`,'opacity':opacity}"
      >
        <h2 class="site-title">
          <ruby>
            2019
            <rt>Hi, Fan Qi Dong!</rt>
          </ruby>
        </h2>
        <p class="site-slogan">人生短暂，及时行乐。</p>
        <img src="../../assets/img/avatar.jpg" alt class="user-avatar">
        <div class="site-link flex-center flex-around">
            <a :href="item.link" v-for="item in $config.socailLink" :key="item.id" :title="item.name" target="_blank" rel="noopener noreferer">
                <i class="iconfont" :class="`icon-${item.icon}`"></i>
            </a>
        </div>
      </div>
      <i class="arrow-down"></i>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Background',
  props:['opacity'],
  methods: {},
  mounted() {
  }
}
</script>


<style lang="scss">
@import './index.scss'
</style>

