<template>
  <div class="article-detail row">
      <MarkDown :content="post.body" />
  </div>
</template>

<script>
import store from "@/store"
import MarkDown from '@/components/Markdown'
export default {
  name: "ArticleDetail",
  data() {
    return {
      number: "",
      post: []
    }
  },
  components:{
    MarkDown
  },
  async created() {
    this.number = this.$route.params.number
    console.log(this.number)
    await this.queryPost()
  },
  mounted() {
  },
  methods: {
    async queryPost() {
      this.post = await store.dispatch('queryPost', { number: this.number })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

