<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<script>
import marked from "marked"
import hljs from "@/assets/js/highlight"
const rendered = new marked.Renderer()
marked.setOptions({
  highlight: code => hljs.highlightAuto(code).value
})
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
  margin: 0.1rem 0;
}
p {
  text-indent: 2em;
}
pre {
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 1em;
  padding-left: 2.5em;
  background-color: rgba(0, 0, 0, 0.8);
  > code {
    margin: 0;
    padding: 1em;
    float: left;
    width: 100%;
    height: 100%;
    display: block;
    line-height: 1.6em;
    color: hsla(0, 0%, 100%, 0.87);
    background-color: transparent;
    overflow: auto;
  }
}
</style>

