<template>
  <div class="markdown-content" v-html="html">
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight'
const rendered = new marked.Renderer()

export default {
  name: "MarkDown",
  props:{
    content:{
        type: String,
        default: ''
    }
  },
  data(){
    return {
       html: ''
    }
  },
  created(){
    this.formatMarkdown()
  },
  mounted(){
      console.log(this.content)
  },
  watch:{
    content(){
      this.formatMarkdown()
    }
  },
  methods:{
     formatMarkdown(){
        this.html = marked(this.content)
        console.log(this.html)
     }
  }
}
</script>

<style lang="scss" scoped>
.markdown-content{
  color: #fff;
}
</style>

