<template>
  <figure class="page-bg"></figure>
</template>

<script>
export default {
  name: 'Background',
//   props: ['opacity'],
  methods: {},
  mounted() {
    // console.log(`透明度为${this.opacity}`)
  }
  //   mounted() {
  //     this.$refs.scrollingContainer.addEventListener('scroll', this.handleScroll, false)
  //     window.addEventListener('scroll', function() {
  //       this.scrollTop = document.documentElement.clientHeight
  //       console.log(this.scrollTop)
  //     })
  //   },
  //   destroyed: function() {
  //     this.$refs.scrollingContainer.removeEventListener('scroll', this.handleScroll, false)
  //   }
}
</script>


<style lang="scss">
.page-bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
//   background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553486196&di=fbc990c55d52659d59afacf9d15971bb&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe69f7c5067c0f222c6c1c38d6d45cb7dd8d53a27.png) center/cover;
  background-image:url(../../assets/img/bg7.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  font-size: .4rem;
}

</style>

