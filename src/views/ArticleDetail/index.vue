<template>
  <div class="article-detail row" id="post">
    <div class="contanier" v-if="post.body">
      <MarkDown :content="post.body" target="#post"/>
      <div class="post-siblings">
        <div class="prev">
          <span>上一篇</span>
          <a
            href="javascript:;"
            class="post-title"
            :data-number="prevPost.number"
            @click="goDetail(prevPost.number)"
          >
            <span>#{{prevPost.title}}#</span>
          </a>
        </div>
        <div class="next">
          <span>下一篇</span>
          <a
            href="javascript:;"
            class="post-title"
            :data-number="nextPost.number"
            @click="goDetail(nextPost.number)"
          >
            <span>#{{nextPost.title}}#</span>
          </a>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading"/>
  </div>
</template>

<script>
import store from "@/store"
import MarkDown from "@/components/Markdown"
import Loading from "@/components/Loading"
import { mapState } from "vuex"
import { queryPosts } from "@/api/request"
export default {
  name: "ArticleDetail",
  data() {
    return {
      number: "",
      post: [],
      postAll: [],
      prevPost: {},
      nextPost: {},
      isLoading: false
    }
  },
  components: {
    MarkDown,
    Loading
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
  updated() {},
  methods: {
    async queryPost(number = this.number) {
      this.isLoading = true
      this.post = await store.dispatch("queryPost", { number })
      this.isLoading = false
    },
    async getPosts(number) {
        this.isLoading = true
      if (this.posts.length) {
        this.postAll = this.posts
        console.log("所有", ...this.postAll)
      } else {
        this.postAll = await queryPosts({
          page: 1,
          pageSize: ""
        })
        console.log("新增", ...this.postAll)
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
.article-detail {
  &.row {
    padding-top: initial;
  }
  .contanier {
    background: rgba(255, 255, 255, 0.7);
    margin-top: 1rem;
    padding: 0.2rem;
    border-radius: 10px;
  }
}
.post {
  &-siblings {
    display: flex;
    justify-content: space-around;
  }
  &-title {
    display: inline-block;
    margin-left: 0.1rem;
  }
}
</style>

