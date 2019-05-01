<template>
  <div class="mood">
    <Banner :background-image="$config.mood.cover" :keyword="$config.mood.keyword"/>
    <transition name="fade" mode="out-in" v-if="moodList.length">
      <div class="mood-content">
        <ul class="mood-list row">
          <li class="mood-item flex" v-for="mood in moodList" :key="mood.id" data-aos="fade-up"  data-aos-once="true">
            <img src="https://fanqidong.github.io/images/avatar.jpg" alt="头像" class="mood-avatar">
            <div class="mood-body">
              <span class="mood-title font12" :data-title="mood.title">{{mood.title}}</span>
              <Markdown :content="mood.body" :only-render="true"/>
              <span class="date font12">
                <i class="iconfont icon-publish"></i>
                {{mood.created_at.slice(0,10)}}
              </span>
            </div>
          </li>
        </ul>
        <Comment v-if="$config.friend.openComment && initComment"/>
      </div>
    </transition>
    <partLoading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Aos from "aos"
import partLoading from "@/components/partLoading"
import Markdown from "@/components/Markdown"
import Banner from "@/components/Banner"
import Comment from "@/components/Comment"
export default {
  data() {
    return {
      page: 0,
      pageSize: '',
      moodList: [],
      initComment: false
    }
  },
  computed: {},
  components: {
    partLoading,
    Markdown,
    Comment,
    Banner
  },
  created() {
    this.queryMood()
    this.initComment = true
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
      setTimeout(Aos.refresh, 600)
  },
  methods: {
    //   获取心情
    async queryMood() {
      const mood = await store.dispatch("queryMood", {
        page: 1,
        pageSize: this.pageSize
      })
      this.moodList = mood
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>

