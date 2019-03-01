<template>
  <div class="page-home">
     <Article />
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { mapState } from 'vuex'
import Article from '@/components/Article'
export default {
  name: 'home',
  components: {
      Article
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
<style lang="scss" scoped>
.page{
    &-home{
        padding: 0 .15rem;
        // background: #fff;
    }
}
@media screen and (max-width: 780px) {
    .page{
        &-home{
            padding: 0 .3rem;
        }
    }
}
</style>


