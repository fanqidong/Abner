<template>
  <div class="home">
    <Bg :opacity="scrollRate" :bg-url="bgUrl"/>
    <section class="home-wrapper row">
      <div class="site-recommend bfff flex">
        <i class="iconfont icon-recommend"></i>
        <p>你好啊，今天又是元气满满的一天哦！</p>
      </div>
      <div class="article">
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
              <div class="article-title font20 c000">{{post.title}}</div>
              <!-- 简介 -->
              <span class="article-desc overflow2 c8a8">{{post.desc}}</span>
              <div class="article-info flex-between c666">
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
          <div class="line">我是有底线的</div>
        </div>
        <partLoading v-else/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store"
import { mapState } from "vuex"
import Aos from "aos"
import _ from "lodash"
import { getScrollTop } from "@/utils/dom"
import MarkDown from "@/components/Markdown"
import partLoading from "@/components/partLoading"
import Bg from "@/components/Background"

export default {
  name: "Home",
  components: {
    MarkDown,
    Bg,
    partLoading
  },
  data() {
    return {
      scrollRate: "",
      bgUrl:'https://zankyo.cc/wp-content/themes/Sakura/cover/gallery/66041517_p0.png'
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
        let rate = (getScrollTop * 1.5) / window.innerHeight
        this.scrollRate = 1 - rate < 0 ? 0 : 1 - rate
      },false)
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>


