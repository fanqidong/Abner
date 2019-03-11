<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<script>
import marked from "marked"
import hljs from "@/assets/js/highlight"
const rendered = new marked.Renderer()

export default {
  name: "MarkDown",
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      html: ""
    }
  },
  created() {
    this.formatMarkdown()
  },
  mounted() {
    console.log(this.content)
  },
  watch: {
    content() {
      this.formatMarkdown()
    }
  },
  methods: {
    formatMarkdown() {
      this.html = marked(this.content)
    }
  }
}
</script>

<style lang="scss">
.markdown-content {
  color: #fff;
  text-align: left;
}
h1,
h2,
h3 {
  margin: 0.1rem 0 !important;
}
p {
    text-indent: 2em;
}
</style>

