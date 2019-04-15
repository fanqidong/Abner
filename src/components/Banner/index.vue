<template>
  <div class="page-banner c666">
    <div class="page-arc">
      <h2 class="page-title">{{keyword}}</h2>
    </div>
    <div class="page-cover" :style="{backgroundImage:`url(${backgroundImage})`}"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    backgroundImage: {
        type: String,
        default: ''
    },
    keyword:{
        type: String,
        default: ''
    }
  }
}
</script>

<style lang="scss">
.page {
  &-banner {
    position: relative;
    height: 60vh;
    overflow: hidden;
  }
  &-arc {
    position: absolute;
    left: -40%;
    bottom: -85%;
    width: 180%;
    height: 100%;
    margin-top: 1px;
    padding-top: 2vh;
    border-radius: 100% 100% 0 0;
    z-index: 1;
    background: #f4f5f5;
  }
  &-title {
    text-shadow: 1px 1px 3px #0084ff;
  }
  &-cover {
    position: relative;
    height: 100%;
    background: no-repeat center/cover;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 992px) {
  .page-arc {
    bottom: -90%;
  }
}
</style>

