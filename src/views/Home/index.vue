<template>
  <div class="page-home">
    <div class="article-list acticle" v-if="posts.length">
      <article
        v-for="(item,index) in posts"
        :key="item.id"
        class="article-wrapper clearfix"
        :class="{'article-float':index%2!=0}"
      >
        <div class="article-cover">
          <a href="javascript:;" class="article-link">
            <img src="../../assets/img/bg.jpg" alt>
          </a>
        </div>
        <div class="article-content">
          <div class="article-date">{{item.created_at}}</div>
          <h2 class="article-title">{{item.title}}</h2>
          <div class="article-desc">
            {{item.desc}}
          </div>
          <div class="article-info">
            <span>
              <i class="iconfont icon-shouye"></i>
              <em>{{item.created_at}}</em>
            </span>
            <span>
              <i class="iconfont icon-shouye"></i>
              <em>热度：1°C</em>
            </span>
            <span>
              <i class="iconfont icon-shouye"></i>
              <em>{{item.milestone.title}}</em>
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {},
  computed: mapState({
    posts: state => state.posts,
    hasMore: state => state.hasMore
  }),
  async created() {
    if (!this.posts.length) {
      await this.getPosts()
    }
  },
  methods: {
    //   获取文章列表
    async getPosts() {
      await store.dispatch('queryPosts')
    }
  },
  mounted() {
    console.log(store.state.posts)
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>


