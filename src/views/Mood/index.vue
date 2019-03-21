<template>
  <div class="mood row">
    <transition name="fade" mode="out-in" v-if="moodList.length">
      <ul class="mood-list">
        <li class="mood-item" v-for="mood in moodList" :key="mood.id">
          <span class="title" :data-title="mood.title"></span>
          <p class="desc">{{mood.body}}</p>
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
    Loading
  },
  async created() {
    await this.queryMood()
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

