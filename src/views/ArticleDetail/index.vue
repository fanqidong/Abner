<template>
  <div class="article-detail row">
    <MarkDown :content="post.body"/>
  </div>
</template>

<script>
import store from "@/store"
import MarkDown from "@/components/Markdown"
export default {
  name: "ArticleDetail",
  data() {
    return {
      number: "",
      post: []
    }
  },
  components: {
    MarkDown
  },
  async created() {
    this.number = this.$route.params.number
    console.log(`文章id${this.number}`)
    await this.queryPost()
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
  background: rgba(0, 0, 0, 0.5);
  margin-top: 2rem;
  padding: 0.2rem;
}
</style>

