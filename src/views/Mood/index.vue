<template>
  <div class="mood row">
    <transition name="fade" mode="out-in">
      <ul class="mood-list">
        <li class="mood-item" v-for="mood in moodList" :key="mood.id">
          <p class="desc">{{mood.body}}</p>
          <span>发表于{{mood.created_at.slice(0,10)}}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      page: 0,
      pageSize: 10,
      moodList: []
    }
  },
  computed: {},
  async created() {
    await this.queryMood()
  },
  methods: {
    //   获取心情
    async queryMood() {
      const mood = await store.dispatch('queryMood', {
        page: 1,
        pageSize: this.pageSize
      })
      this.moodList = mood
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

