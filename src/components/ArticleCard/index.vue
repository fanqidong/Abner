<template>
  <div class="post-card">
    <div class="post-cover">
      <img v-lazy="post.cover.src" class="post-img"  alt="">
      <span class="post-title">{{post.title}}</span>
      <div class="post-hot">
        <i class="iconfont icon-hot"></i>
        <span class="post-num">{{post.times}}</span>
      </div>
    </div>
    <div class="post-meta">
      <div class="post-time">
        <i class="iconfont icon-guanyu"></i>
        <span>{{post.timeinfo.date}}丨{{post.timeinfo.time}}</span>
      </div>
      <span class="post-category" v-if="target=='category'">
        <i class="iconfont icon-guidangxiangmu"></i>
        {{post.milestone.title}}
      </span>
      <ul class="label-list hide" v-if="target=='label'">
        <li v-for="label in post.labels.slice(0,2)" :key="label.id">{{label.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props:{
     target:{
        type:String,
        default: ''
     },
     post:{
       type: Object,
       default: {}
     }
  },
  data(){
     return{

     }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

