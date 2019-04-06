<template>
  <div class="mood row pt100">
    <transition name="fade" mode="out-in" v-if="moodList.length">
      <ul class="mood-list">
        <li class="mood-item" v-for="mood in moodList" :key="mood.id" data-aos="fade-up">
          <!-- <span class="title" :data-title="mood.title"></span> -->
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
    </transition>
    <Loading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
import Markdown from "@/components/Markdown"
import Aos from "aos"
export default {
  data() {
    return {
      page: 0,
      pageSize: 10,
      moodList: []
    }
  },
  computed: {},
  components: {
    Loading,
    Markdown
  },
  async created() {
    await this.queryMood()
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

