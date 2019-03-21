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
                    <i class="fa fa-link"></i>
                    ${text}
            </a>`
}

// 渲染代码块
var language = [];
renderer.code = (code, language) =>{
    console.log(code)
    language.push(code)
    // console.log(language)
    // return `<pre class='pre-wrap'>
    //     <code class='language-${language}'>${code}</code>
    // </pre>`
} 
console.log(language)
renderer.pre = (pre, language) =>{
    console.log(pre)
    // console.log(language)
    // return `<pre class='pre-wrap'>
    //     <code class='language-${language}'>${code}</code>
    // </pre>`
} 

/**
 * @description: 配置代码高亮
 * @param {code: String} //代码内容——是一个字符串。
 * @return:
 */
marked.setOptions({
  renderer,
  highlight: code => hljs.highlightAuto(code).value,
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
    //   this.formatCode()
    // console.log(this.content)
  },
  destroyed() {},
  methods: {
    // 格式化markdown文本内容
    formatMarkdown() {
      this.html = marked(this.content)
      this.$nextTick(() => {
        if (this.target) {
          //显示代码行数
          hljs.initLineNumbersOnLoad({
            target: this.target
          })
          //   实例化图片画廊
          window.lightGallery(document.getElementById("post"), {
            selector: ".show-img",
            thumbMargin: 5,
            download: false,
            subHtmlSelectorRelative: true
          })
        }
      })
    },
    // 格式化pre code代码块
    formatCode(){
        let codes = document.querySelectorAll('pre')
        let arr = [];
        for (let index = 0; index < codes.length; index++) {
            if (!codes[index].children[0].className) {
                codes[index].children[0].className = 'text'
            }
             codes[index].children[0].setAttribute('data-language',codes[index].children[0].className.toLowerCase().replace('language-',''))
            // arr.push(codes[index].children[0].className)
        }
    }
  },
  watch: {
    content() {
      this.formatMarkdown()
    //   this.formatCode()
    }
  }
}
</script>
<style lang="scss" scoped>
.post-siblings {
  display: flex;
  justify-content: space-around;
}
</style>


