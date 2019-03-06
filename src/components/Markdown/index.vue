<template>
  <div class="markdown-content" v-html="html"></div>
</template>

<script>
import marked from 'marked'
import hljs from '@/assets/lib/highlight'
const rendered = new marked.Renderer()
rendered.heading = (text, level, raw, slugger)=>{
    // const 
}
export default {}
</script>

<style lang="scss" scoped>
</style>

