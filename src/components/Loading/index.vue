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

<style lang="scss">
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000, $alpha: .5);
  z-index: 9999;
}

</style>

