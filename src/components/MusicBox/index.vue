<template>
  <div class="aplayer-wrapper tl">
    <APlayer :audio="$config.musicList" mini fixed @onListShow="handleShow"/>
  </div>
</template>

<script>
export default {
  name: "MusicBox",
  data() {
    return {}
  },
  methods: {
    handleShow() {
      let btnDom = document.querySelector(".aplayer-miniswitcher")
      let musicBody = document.querySelector(".aplayer-body")
      btnDom.onclick = () => {
        if (!musicBody.classList.contains("active")) {
          musicBody.classList.add("active")
        } else {
          musicBody.classList.remove("active")
        }
      }
    }
  },
  mounted() {
    this.handleShow()
  }
}
</script>
<style lang="scss">
.aplayer {
  .aplayer-miniswitcher {
    .aplayer-icon {
      background: #07d3f0;
      path {
        fill: #fff !important;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .aplayer-wrapper {
    position: fixed;
    bottom: 30%;
    width: 100%;
    z-index: 998;
    transform: translateY(-85px);
  }
  .aplayer-body {
    transform: translateX(-66px);
    &.active {
      transform: translateX(0);
    }
  }
}
</style>


