<template>
  <div class="article-detail row" id="post">
    <div class="contanier" v-if="post.body">
        <MarkDown :content="post.body" target="#post"/>
        <div class="post-siblings">
            <div class="prev">
                <span>上一篇</span>
                <a href="javascript:;" :data-number="prevPost.number" @click="goDetail(prevPost.number)">
                <span>#{{prevPost.title}}#</span>
                </a>
            </div>
            <div class="next">
                <span>下一篇</span>
                <a href="javascript:;" :data-number="nextPost.number" @click="goDetail(nextPost.number)">
                <span>#{{nextPost.title}}#</span>
                </a>
            </div>
        </div>
    </div>
    <Loading v-else />
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
      nextPost: {}
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
    this.getPosts()
  },
  mounted() {
    //   console.log(this.number)
  },
  updated() {},
  methods: {
    async queryPost(number = this.number) {
      this.post = await store.dispatch("queryPost", { number })
    },
    async getPosts() {
        console.log(this.posts == false)
      if (this.posts) {
        this.postAll = this.posts
      } else {
        this.postAll = await queryPosts({
          page: 1,
          pageSize: ""
        })
        console.log("所有"+ this.postAll)
      }
      this.postAll.map((item, index, arr) => {
        if (this.number == item.number) {
          this.prevPost = arr[index - 1]
          this.nextPost = arr[index + 1]
          index == 0 && (this.prevPost = arr[arr.length - 1])
          index == arr.length - 1 && (this.nextPost = arr[0])
        }
      })
    },
    goDetail(number){
        console.log(number)
        this.queryPost(number)
    }
    // async getPosts() {
    //   this.postAll = await queryPosts({
    //     page: 1,
    //     pageSize: ""
    //   })

    //   this.postAll.map((item, index, arr) => {
    //     if (this.number == item.number) {
    //       this.prevPost = arr[index - 1]
    //       this.nextPost = arr[index + 1]
    //       index == 0 && (this.prevPost = arr[arr.length - 1])
    //       index == arr.length - 1 && (this.nextPost = arr[0])
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  background: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
}
.post-siblings {
  display: flex;
  justify-content: space-around;
}
</style>

