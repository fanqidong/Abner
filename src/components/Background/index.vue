<template>
  <section class="site site-banner flex-center flex-column">
    <img class="site-lazy-container absolute-full" :src="lazyImage" ref="lazyBg">
    <div class="site-banner-bg absolute-full" ref="siteBg"></div>
    <div class="site-meta absolute-full flex-center flex-column cfff">
      <div class="site-info active" :style="transformStyle" ref="siteInfo">
        <h2 class="site-title">
          <ruby>
            2019
            <rt>Hi, Fan Qi Dong!</rt>
          </ruby>
        </h2>
        <p class="site-slogan">人生短暂，及时行乐。</p>
        <img src="../../assets/img/avatar.jpg" alt class="site-avatar">
        <div class="site-link flex-center flex-around">
          <a
            :href="item.link"
            v-for="item in $config.socailLink"
            :key="item.id"
            :title="item.name"
            target="_blank"
            rel="noopener noreferer"
          >
            <i class="iconfont" :class="`icon-${item.icon}`"></i>
          </a>
        </div>
      </div>
      <i class="arrow-down"></i>
    </div>
  </section>
</template>

<script>
import { imgLoaded } from "@/utils/dom"
import { clearTimeout } from "timers"
export default {
  name: "Background",
  props: ["opacity", "bgUrl"],
  data() {
    return {
      lazyImage: require("./bg-small.jpg"),
      bUrl: "https://view.moezx.cc/images/2019/04/17/bg.jpg",
      timer: null
    }
  },
  computed: {
    transformStyle() {
      return { transform: `scale(${this.opacity})`, opacity: `${this.opacity}` }
    }
  },
  methods: {},
  mounted() {
    this.timer = setTimeout(() => {
      this.$refs.siteInfo.classList.remove("active")
    }, 2500)

    imgLoaded(this.bgUrl, () => {
      this.$refs.lazyBg.style.cssText = `opacity:0; transition-delay:.5s;`
      this.$refs.siteBg.style.cssText = `background-image:url(${this.bUrl});opacity:1;`
    })
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="scss">
@import "./index.scss";
</style>

