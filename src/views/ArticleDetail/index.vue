<template>
  <div class="article-detail row" id="post">
      <div class="contanier" v-if="post.body">
        <MarkDown :content="post.body" target="#post" />
      </div>
      <Loading v-else />
  </div>
</template>

<script>
import store from "@/store"
import MarkDown from "@/components/Markdown"
import Loading from "@/components/Loading"
export default {
  name: "ArticleDetail",
  data() {
    return {
      number: "",
      post: []
    }
  },
  components: {
    MarkDown,
    Loading
  },
   created() {
    this.number = this.$route.params.number
    this.queryPost()
  },
  mounted() {},
  methods: {
    async queryPost() {
      this.post = await store.dispatch("queryPost", { number: this.number })
    }
  }
}
</script>

<style lang="scss" scoped>
.article-detail {
  background:rgba(255, 255, 255, .7);
  margin-top: 1rem;
  padding: 0.2rem;
}
</style>

