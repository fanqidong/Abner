<template>
  <div class="aplayer-wrapper hidden-xs">
     <APlayer :audio="$config.musicList"  />
  </div>
</template>

<script>

export default {
  name: "MusicBox",
  data() {
    return {}
  },
  computed: {
    
  },
  mounted() {
  },
  components: {
    // Aplayer
  }
}
</script>

<style lang="scss" scoped>
// .aplayer-wrapper{
//     width: 20%;
//     margin: auto;
//     position: fixed;
//     top: 50%;
//     transform: translateY(-50%);
// }
</style>

