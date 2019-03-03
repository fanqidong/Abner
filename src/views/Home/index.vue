<template>
  <div class="page-home">
    <div class="article-list acticle" v-if="posts.length">
      <article
        v-for="(post,index) in posts"
        :key="post.id"
        class="article-wrapper clearfix"
        :class="{'article-float':index%2!=0}"
      >
        <div class="article-cover">
          <a href="javascript:;" class="article-link">
            <img :src="post.cover.src" :alt="post.cover.text">
          </a>
        </div>
        <!-- 文章内容  Start -->
        <div class="article-content">
          <!-- 发表时间 -->
          <div class="article-date">发表于{{post.created_at.slice(0,10)}}</div>
          <!-- 文章标题 -->
          <h2 class="article-title">{{post.title}}</h2>
          <!-- 简介 -->
          <div class="article-desc">
            {{post.desc}}
          </div>
          <div class="article-info">
            <!-- 热度 -->
            <span>
              <i class="iconfont icon-shouye"></i>
              <em>热度：1°C</em>
            </span>
            <!-- 归档 -->
             <span>
              <i class="iconfont icon-shouye"></i>
              <em>{{post.milestone.title }}</em>
            </span>
            <!-- 标签 -->
            <span class="archive">
              <i class="iconfont icon-shouye"></i>
              <em v-for="label in post.labels" :key="label.id">{{label.name}}</em>
            </span>
          </div>
        </div>
        <!-- 文章内容 End -->
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


