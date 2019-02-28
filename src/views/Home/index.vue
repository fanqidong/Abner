<template>
  <div class="home">
      12332312
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
  },
  computed: mapState({
    posts: state => state.posts,
    hasMore: state => state.hasMore
  }),
  async created() {
    if (!this.posts.length) {
      await this.queryPosts()
    }
  },
  methods: {
    //   获取文章列表
    async queryPosts() {
      await store.dispatch('queryPosts')
    }
  },
  mounted() {
    // console.log(store.state.posts)
  }
}
</script>

