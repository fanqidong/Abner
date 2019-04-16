<template>
  <div class="article-detail row pt100" id="post">
    <div v-if="post.body">
      <section class="article-header">
        <div class="article-cover" :style="{backgroundImage:`url(${post.cover.src})`}"></div>
        <div class="title-wrapper">
          <span class="article-title font20">{{post.title}}</span>
          <div class="article-meta">
            <div class="article-archive">
              <i class="iconfont icon-guidangxiangmu"></i>
              <router-link
                tag="span"
                :to="{name:'Category'}"
                class="article-category-link"
              >{{post.milestone.title}}</router-link>
            </div>
            <ul class="arcitle-label align-center">
              <i class="iconfont icon-biaoqian"></i>
              <li v-for="label in post.labels" :key="label.id">{{label.name}}</li>
            </ul>
            <div class="article-date">
              <i class="iconfont icon-calendar"></i>
              <time
                :datetime="post.created_at"
              >{{post.timeinfo.date}}丨{{post.timeinfo.time.toLowerCase()}}</time>
            </div>
            <div class="article-hot">
              <i class="iconfont icon-eye"></i>
              <span>{{post.times}}</span>
            </div>
          </div>
          <h2 class="article-month">{{post.timeinfo.month}}</h2>
        </div>
      </section>
      <section class="article-main bfff">
        <MarkDown :content="post.body" target="#post"/>
        <div class="article-reward" :class="qrShow && 'active'">
          <div
            class="article-reward-button font16 is-href"
            @click="qrShow = !qrShow"
          >赏</div>
          <ul class="article-reward-qr flex flex-around">
            <li>
              <img src="https://fanqidong.github.io/images/zfb.jpg" alt>
            </li>
            <li>
              <img src="https://fanqidong.github.io/images/wx.png" alt>
            </li>
          </ul>
        </div>
      </section>
      <div class="post-siblings clearfix">
        <div class="prev post-button">
          <a
            href="javascript:;"
            class="post-title"
            :data-number="prevPost.number"
            @click="goDetail(prevPost.number)"
          >
            <span>上一篇丨</span>
            <span>{{prevPost.title}}</span>
          </a>
        </div>
        <div class="next post-button">
          <a
            href="javascript:;"
            class="post-title"
            :data-number="nextPost.number"
            @click="goDetail(nextPost.number)"
          >
            <span>下一篇丨</span>
            <span>{{nextPost.title}}</span>
          </a>
        </div>
      </div>
      <Comment v-if="$config.articleDetail.openComment && initComment"/>
    </div>
    <partLoading v-if="isLoading"/>
  </div>
</template>

<script>
import store from "@/store"
import MarkDown from "@/components/Markdown"
import partLoading from "@/components/partLoading"
import Comment from "@/components/Comment"
import { mapState } from "vuex"
import { queryPosts } from "@/api/request"
import { formatPost } from "@/utils/format"
export default {
  name: "ArticleDetail",
  data() {
    return {
      number: "",
      post: [],
      postAll: [],
      prevPost: {},
      nextPost: {},
      isLoading: false,
      initComment: false,
      qrShow: false
    }
  },
  components: {
    MarkDown,
    partLoading,
    Comment
  },
  computed: mapState({
    posts: state => state.posts,
    hasMore: state => state.hasMore
  }),
  created() {
    this.number = this.$route.params.number
    this.queryPost()
    this.getPosts(this.number)
  },
  mounted() {
    //   console.log(this.number)
  },
  methods: {
    async queryPost(number = this.number) {
      this.isLoading = true
      this.post = await store.dispatch("queryPost", { number })
      this.isLoading = false
      this.initComment = true
    },
    async getPosts(number) {
      this.isLoading = true
      if (this.posts.length) {
        this.postAll = this.posts
        // console.log("所有", ...this.postAll)
      } else {
        this.postAll = await queryPosts({
          page: 1,
          pageSize: ""
        })
        this.postAll.forEach(formatPost)
        // console.log("新增", ...this.postAll)
      }
      this.postAll.map((item, index, arr) => {
        if (number == item.number) {
          this.prevPost = arr[index - 1]
          this.nextPost = arr[index + 1]
          index == 0 && (this.prevPost = arr[arr.length - 1])
          index == arr.length - 1 && (this.nextPost = arr[0])
        }
      })
      this.isLoading = false
    },
    goDetail(number) {
      window.scrollTo(0, 0)
      this.$router.push({ name: "ArticleDetail", params: { number } })
      this.queryPost(number)
      this.getPosts(number)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

