<template>
  <div class="page row flex-center pt150 flex-column">
    <p>404</p>
    <img src="./404.png" alt="logo" class="logo">
    <router-link  :to="{'path':'/'}" class="index-link cfff font20 is-href">返回首页</router-link>
  </div>
</template>

<script>
export default {
  name: "404",
  mounted() {
    // console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
.page{
    p{
        font-size: 40px;
    }
    .index-link{
        display: block;
        margin-top: 1em;
        padding: .1rem .2rem;
        border-radius: 5px;
        background-color: #007fff;
    }
    .logo{
        animation: pulse 1.5s infinite;
    }
}
@keyframes pulse {
    from {
        transform: scale3d(1, 1, 1);
    }

    50% {
        transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
}
</style>

