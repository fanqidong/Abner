<template>
  <div class="friend row">
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
              <a :href="friend.link" target="_blank" rel="noopener noreferer">
                  一探究竟
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <Loading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
export default {
  name: "Friend",
  data() {
    return {
      friendList: []
    }
  },
  components: {
    Loading
  },
  async created() {
    this.friendList = await store.dispatch("queryType", { type: "Friend" })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

