<template>
  <div class="about row pt200">
    <p class="font22 cfff">开发中...</p>
    <div class="botui-app-container" id="my-botui-app">
       <bot-ui></bot-ui>
    </div>
  </div>
</template>

<script>
import initBotApp from "./my-botui-app"
export default {
  name: "About",
  mounted() {
    console.clear()
    initBotApp()
  }
}
</script>

<style lang="scss" scoped>
</style>

