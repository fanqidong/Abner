<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<script>
import marked from "marked"
import hljs from "@/assets/js/highlight"
const renderer = new marked.Renderer()
// console.log(rendered)
// rendered.image = function(href, title, text) {
//   return `<span class="img-box" data-src="${href}" data-sub-html="
//           <h4>${text}</h4>">
//           <img src="${href}" alt="${text}" />
//           ${text ? `<span>◭ ${text}</span>` : ''}</span>`
// }
renderer.image = function(href, title, text) {
  return `<span class="show-img" data-src="${href}" data-sub-html="
          <h4>${text}</h4>">
          <img src="${href}" alt="${text}" />
          ${text ? `<span>◭ ${text}</span>` : ''}</span>`
}
marked.setOptions({
  renderer,
  highlight: code => hljs.highlightAuto(code).value
})
export default {
  name: "MarkDown",
  props: {
    target: {
      type: String,
      default: ""
    },
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
    // console.log(this.content)
  },
  watch: {
    content() {
      this.formatMarkdown()
    }
  },
  methods: {
    formatMarkdown() {
      this.html = marked(this.content)
      this.$nextTick(() => {
        if (this.target) {
          // hljs.initLineNumbersOnload({
          //   target: this.target
          // })
          window.lightGallery(document.getElementById("post"), {
            selector: ".show-img",
            thumbMargin: 5,
            download: false,
            subHtmlSelectorRelative: true
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.markdown-content {
  text-align: left;
  h1,
  h2,
  h3 {
    margin: 0.1rem 0;
  }
  p {
    text-indent: 2em;
  }
  img{
    cursor: pointer;
  }
}
</style>

