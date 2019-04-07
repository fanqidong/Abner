<template>
  <div class="home container">
    <section class="site-meta flex-center flex-column">
      <div
        class="person-info"
        :style="{'transform':`scale3d(${opacity},${opacity},${opacity})`,'opacity':opacity}"
      >
        <h2 class="title">
          <ruby>
            2019
            <rt>Hi, Fan Qi Dong!</rt>
          </ruby>
        </h2>
        <p class="slogan">人生短暂，及时行乐。</p>
        <img src="../../assets/img/avatar.jpg" alt class="user-avatar">
        <div class="socail-link flex-center flex-around">
            <a :href="item.link" v-for="item in $config.socailLink" :key="item.id" :title="item.name" target="_blank" rel="noopener noreferer">
                <i class="iconfont" :class="`icon-${item.icon}`"></i>
            </a>
        </div>
      </div>
      <i class="arrow-down"></i>
    </section>
    <section class="article row">
      <div class="article-list" v-if="posts.length">
        <article
          data-aos="fade-up"
          v-for="(post,index) in posts"
          :key="post.id"
          class="article-wrapper clearfix"
          :class="{'article-float':index%2!=0}"
          @click="goDetail(post.number)"
        >
          <div class="article-cover">
            <a href="javascript:;" class="article-link">
              <img v-lazy="post.cover.src" :alt="post.cover.text">
            </a>
            <!-- 发表时间 -->
            <div class="article-date flex-center flex-column">
              <span class="month font18">{{post.timeinfo.month}}</span>
              <span class="time">
                <i class="iconfont icon-calendar"></i>
                {{post.timeinfo.date}}
              </span>
            </div>
          </div>
          <!-- 文章内容  Start -->
          <div class="article-content flex-around flex-column">
            <!-- 文章标题 -->
            <h2 class="article-title font20 c000">{{post.title}}</h2>
            <!-- 简介 -->
            <span class="article-desc">{{post.desc}}</span>
            <div class="article-info flex-between">
              <!-- 热度 -->
              <span>
                <i class="iconfont icon-hot"></i>
                <em>热度：{{post.times}}°C</em>
              </span>
              <!-- 归档 -->
              <span>
                <i class="iconfont icon-guidangxiangmu"></i>
                <em>{{post.milestone.title }}</em>
              </span>
              <!-- 标签 -->
              <span class="archive">
                <i class="iconfont icon-biaoqian"></i>
                <em v-for="label in post.labels.slice(0,2)" :key="label.id">{{label.name}}</em>
              </span>
            </div>
          </div>
          <!-- 文章内容 End -->
        </article>
      </div>
      <Loading v-else/>
    </section>
    <Bg/>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store"
import { mapState } from "vuex"
import MarkDown from "@/components/Markdown"
import Loading from "@/components/Loading"
import Bg from "@/components/Background"
import Aos from "aos"
export default {
  name: "home",
  components: {
    MarkDown,
    Loading,
    Bg
  },
  data() {
    return {
      opacity: ""
    }
  },
  computed: mapState({
    posts: state => state.posts,
    hasMore: state => state.hasMore
  }),
  created() {
    if (!this.posts.length) {
      this.getPosts()
    }
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
    setTimeout(Aos.refresh, 600)
  },
  methods: {
    //  获取文章列表
    async getPosts() {
      await store.dispatch("queryPosts", { type: "article" })
    },
    // 前往文章详情页
    goDetail(number) {
      this.$router.push({ name: "ArticleDetail", params: { number } })
    }
  },
  mounted() {
    window.addEventListener("scroll",() => {
        let scrollTop = document.documentElement.scrollTop || document.documentElement.scrollTop || window.pageYOffset
        this.opacity = 1 - scrollTop / 400 < 0 ? 0 : 1 - scrollTop / 400
      },false)
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


