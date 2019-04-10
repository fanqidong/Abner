<template>
  <div class="about row pt200">
    <div class="botui-app-container" id="my-botui-app">
      <p class="chat-title">与<span class="font18 chat-name">luckydong</span>对话中。。。</p>
      <bot-ui></bot-ui>
    </div>
    <button class="btn-refresh" @click="refreshApp">姿势不对，再来一次</button>
  </div>
</template>

<script>
import initBotApp from "./my-botui-app"
import store from "@/store"
export default {
  name: "About",
  data() {
    return {
      aboutList: []
    }
  },
  created() {
      this.queryAbout()
  },
  mounted() {
    console.clear()
    initBotApp()
  },
  methods: {
    // 获取关于详情
    async queryAbout() {
      this.aboutList = await store.dispatch("queryType", { type: "About" })
      // console.log(this.aboutList)
    },
    refreshApp() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
.about {
  max-width: 800px;
}
@media screen and (max-width: 993px) {
  .row {
    padding-top: 100px;
  }
}
.chat-name{
    display: inline-block;
    margin: 0 6px;
}
.chat-title {
  background: #fff;
  border-radius: 20px;
  margin: 10px 0;
  padding: 10px 0;
}
.botui-app-container {
  position: relative;
  width: 100%;
  height: auto;
}

.botui-container {
  text-align: left;
  border-radius: 20px;
  background: url(../../assets/img/chatbg2.png) no-repeat center/cover;
}
.botui-actions-container {
  float: right;
}
.botui-message-content {
  max-width: 100%;
  color: #12796b;
  border-radius: 30px;
  background-color: #b6fff5;
}

.botui-message-content.human {
  background-color: #28635a;
  cursor: pointer;
}
.botui-actions-buttons-button {
  text-align: right;
  border-radius: 15px;
}
.botui-actions-text-input {
  color: #36887d;
  border-bottom: 1px solid #b6fff5;
}

.botui-actions-buttons-button {
  line-height: 1 !important;
  background-color: #28635a;
}

.botui-message-content-link {
  color: #12796b;
}
.btn-refresh {
  position: relative;
  margin: 20px auto;
  padding: 8px 24px;
  text-align: center;
  background: #28635a;
  color: #f7f8f8;
  border-radius: 20px;
  z-index: 100;
}
</style>

