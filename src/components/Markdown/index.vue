<template>
  <div id="markdown">
    <div class="markdown-content" v-html="html"></div>
  </div>
</template>

<script>
import marked from "marked"
import hljs from "@/assets/js/highlight"
const renderer = new marked.Renderer()

// 渲染图片
renderer.image = (href, title, text) => {
  return `<span class="show-img" data-src="${href}" data-sub-html="<h4>${text}</h4>">
              <img src="${href}" alt="${text}" title="点击图片查看大图" />
              ${text ? `<em>${text}</em>` : ""}
          </span>`
}

// 渲染a链接
renderer.link = (href, title, text) => {
  // 只显示一个图标
  return `<a href="${href}" target="_blank">
              ${text}
              <i class="iconfont icon-link"></i>
          </a>`
}

/**
 * @description: 配置代码高亮
 * @param {code: String} //代码内容——是一个字符串。
 * @return:
 */
marked.setOptions({
  renderer,
  highlight: code => hljs.highlightAuto(code).value
})

export default {
  name: "Markdown",
  props: {
    target: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    onlyRender: {
      type: Boolean,
      default: false
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
  beforeDestroy() {
    this.gallery && this.gallery.destroy()
  },
  methods: {
    // 格式化markdown文本内容
    formatMarkdown() {
      this.html = marked(this.content)
      if (this.onlyRender) return
      this.$nextTick(() => {
        if (this.target) {
          this.formatCode()
          //显示代码行数
          hljs.initLineNumbersOnLoad({
            target: this.target
          })
          //   实例化图片画廊
        //   window.lightGallery(document.getElementById("post"), {
        //     selector: ".show-img",
        //     thumbMargin: 5,
        //     download: false,
        //     subHtmlSelectorRelative: true
        //   })
        }
      })
    },
    // 格式化pre code代码块
    formatCode() {
      let codes = document.querySelectorAll("pre")
      for (let index = 0, len = codes.length; index < len; index++) {
        let className = codes[index].children[0].className
        if (!className) {
          className = "text"
        }
        codes[index].children[0].setAttribute("data-language",className.replace("language-", "")
        )
      }
    }
  },
  watch: {
    content() {
      this.formatMarkdown()
    }
  }
}
</script>
<style lang="scss">
</style>


