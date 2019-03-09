<template>
  <div class="home">
    <section class="site-meta text-center">
      <div class="person-info"
        :style="{'transform':`scale3d(${opacity},${opacity},${opacity})`,'opacity':opacity}">
        <h2 class="title">
          <ruby>2019
            <rt>Hi, Fan Qi Dong!</rt>
          </ruby>
        </h2>
        <p class="slogan">代码不规范，重构两行泪</p>
        <img src="../../assets/img/avatar.jpg" alt class="user-avatar">
      </div>
    </section>
     <button class="arrow-down">
      </button>
    <section class="article row">
      <div class="article-list" v-if="posts.length">
        <article
          v-for="(post,index) in posts"
          :key="post.id"
          class="article-wrapper clearfix"
          :class="{'article-float':index%2!=0}"
        >
          <div class="article-cover">
            <a href="javascript:;" class="article-link">
              <img v-lazy="post.cover.src" :alt="post.cover.text">
            </a>
          </div>
          <!-- 文章内容  Start -->
          <div class="article-content">
            <!-- 发表时间 -->
            <div class="article-date">发表于{{post.created_at.slice(0,10)}}</div>
            <!-- 文章标题 -->
            <h2 class="article-title">{{post.title}}</h2>
            <!-- 简介 -->
            <div class="article-desc">{{post.desc}}</div>
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
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {},
  data() {
    return {
      opacity:''
    }
  },
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
      window.addEventListener('scroll',()=>{
      this.opacity = ((1- document.documentElement.scrollTop / 400) < 0)? 0 : 1- document.documentElement.scrollTop / 400
    },false)
  },
  destroyed: function() {}
}
</script>
<style lang="scss" scoped>
@import './index.scss';

.arrow-down{
  position: absolute;
  bottom:5%;
  left: 50%;
  width: .32rem;
  height: .32rem;
  transform: translateX(-50%);
  border: none;
  background: url('../../assets/img/arrow-down.svg') no-repeat;
  background-size:100%;
  // z-index: 3;
  animation: floatY 2s infinite;

}
</style>


