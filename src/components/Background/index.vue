<template>
  <!-- <figure class="page-bg" :style="{'opacity':opacity}"> -->
  <figure class="page-bg">
    <!-- <div class="person-info" :style="{'transform':'scale3d('+`${opacity},${opacity},${opacity}`+')'}">
      <h2 class="time">2019</h2>
      <p class="slogan">浩瀚星辰，志在何方</p>
    </div> -->
  </figure>
</template>

<script>
export default {
  name: 'Background',
  props: ['opacity'],
  methods: {},
  mounted() {
    //   console.log(`透明度为${this.opacity}`)
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
  height: 100%;
  text-align: center;
  background: #1f1f1f url(../../assets/img/bg4.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  font-size: 0.8rem;
  transform: scale3d()
}
</style>

