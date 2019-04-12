<template>
  <figure class="page-bg flex-center flex-column"></figure>
</template>

<script>
export default {
  name: 'Background',
  methods: {},
  mounted() {
  }
}
</script>


<style lang="scss">
.page-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
//   background-image: url(../../assets/img/bg.jpg);
  // background-image:url(https://view.moezx.cc/images/2019/03/24/bg7.png);
  // background-image:url(https://zankyo.cc/wp-content/themes/Sakura/cover/gallery/66041517_p0.png);
  background:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553486196&di=fbc990c55d52659d59afacf9d15971bb&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe69f7c5067c0f222c6c1c38d6d45cb7dd8d53a27.png) center/cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -1;
  font-size: .4rem;
}

</style>

