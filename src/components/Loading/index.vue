<template>
  <transition name="fadeIn">
    <div class="loading">
      <img src="../../assets/img/loading.svg" alt>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Laoding"
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/mixin.scss";

.loading {
  @include flex-center();
  @include full-screen();
  background: rgba($color: #000, $alpha: 0.5);
  z-index: 9999;
}
</style>

