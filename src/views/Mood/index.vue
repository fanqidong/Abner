<template>
  <div class="mood row pt200">
    <transition name="fade" mode="out-in" v-if="moodList.length">
      <ul class="mood-list">
        <li class="mood-item" v-for="mood in moodList" :key="mood.id" data-aos="fade-up">
          <span class="title" :data-title="mood.title"></span>
          <Markdown :content="mood.body" :only-render="true"/>
          <span class="date">发表于{{mood.created_at.slice(0,10)}}</span>
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

