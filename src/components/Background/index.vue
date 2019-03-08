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
  width: 100%;
  height: 100vh;
  text-align: center;
  background: #1f1f1f url(../../assets/img/bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  font-size: 0.4rem;
}

</style>

