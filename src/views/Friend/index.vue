<template>
  <div class="friend row pt100">
    <section class="friend-container" v-if="friendList.length">
      <ul class="friend-list">
        <li v-for="(friend, index) in friendList" :key="index">
          <div class="friend-content">
            <div class="friend-cover">
              <img v-lazy="friend.siteImage" :alt="friend.name" class="friend-cover">
            </div>
            <div class="friend-info">
              <img v-lazy="friend.avatar" :alt="friend.name" class="friend-avatar">
              <div class="friend-intro">
                <span class="friend-name">{{friend.name}}</span>
                <span class="friend-desc">{{friend.introduction}}</span>
              </div>
            </div>
            <div class="friend-link">
              <a :href="friend.link" target="_blank" rel="noopener noreferer">前去py</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="friend-apply">
        <h2>友链申请须知：</h2>
        <p>链接：https://www.luckydong.cn/</p>
        <p>昵称：旅途与画</p>
        <p>头像连接：https://www.luckydong.cn/img/avatar.802a5024.jpg</p>
        <p>介绍：人生短暂，及时行乐。</p>
      </div>
      <Comment v-if="$config.friend.openComment && initComment"/>
    </section>
    <Loading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
import Comment from "@/components/Comment"
export default {
  name: "Friend",
  data() {
    return {
      initComment: false,
      friendList: []
    }
  },
  components: {
    Loading,
    Comment
  },
  async created() {
    this.friendList = await store.dispatch("queryType", { type: "Friend" })
    this.initComment = true
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

