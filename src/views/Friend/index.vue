<template>
  <div class="friend">
    <Banner :background-image="$config.friend.cover" :keyword="$config.friend.keyword"/>
    <div class="site-recommend bfff flex row">
      <i class="iconfont icon-recommend"></i>
      <p>四海八方，皆是道友。</p>
    </div>
    <section class="friend-container row" v-if="friendList.length">
      <ul class="friend-list flex-between flex-wrap">
        <li v-for="(friend, index) in friendList" :key="index" data-aos="fade-up"  data-aos-once="true">
          <div class="friend-content flex-around flex-column">
            <div class="friend-cover">
              <img v-lazy="friend.siteImage" :alt="friend.name" class="friend-cover">
            </div>
            <div class="friend-info bfff flex-around">
              <img v-lazy="friend.avatar" :alt="friend.name" class="friend-avatar">
              <div class="friend-intro">
                <span class="friend-name font18 fw600">{{friend.name}}</span>
                <span class="friend-desc c666">{{friend.introduction}}</span>
              </div>
            </div>
            <div class="friend-link">
              <a
                :href="friend.link"
                class="friend-link-btn"
                target="_blank"
                rel="noopener noreferer"
              >前去py</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="friend-apply bfff tl c666">
        <h2 class="fw600">友链申请格式如下：</h2>
        <p>
          <span>链接：</span> https://www.luckydong.cn/
        </p>
        <p>
          <span>昵称：</span> 旅途与画
        </p>
        <p>
          <span>头像链接：</span> https://www.luckydong.cn/img/avatar.802a5024.jpg
        </p>
        <p>
          <span>网站(个人)介绍：</span> 人生短暂，及时行乐。
        </p>
        <p>请在下方留言区填写以上信息。</p>
        <p>收到邮件后我会第一时间为你加上友链。😘😘😘</p>
      </div>
    </section>
    <Comment v-if="$config.friend.openComment && initComment"/>
    <partLoading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Aos from "aos"
import partLoading from "@/components/partLoading"
import Banner from "@/components/Banner"
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
    partLoading,
    Comment,
    Banner
  },
  async created() {
    this.friendList = await store.dispatch("queryType", { type: "Friend" })
    this.initComment = true
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
      setTimeout(Aos.refresh, 600)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

