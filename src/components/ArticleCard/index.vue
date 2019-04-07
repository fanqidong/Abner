<template>
  <div class="post-container">
    <div class="post-content flex-between flex-wrap" v-if="postList.length">
      <div class="post-list" v-for="post in postList" :key="post.id">
        <div class="post-card" @click="goDetail(post.number)">
          <div class="post-cover">
            <img v-lazy="post.cover.src" class="post-img" alt>
            <span class="post-title font16">{{post.title}}</span>
            <div class="post-hot">
              <i class="iconfont icon-hot"></i>
              <span class="post-num">{{post.times}}</span>
            </div>
          </div>
          <div class="post-meta font14 flex-between align-center">
            <div class="post-time">
              <i class="iconfont icon-calendar"></i>
              <span>{{post.timeinfo.date.split('/').join('-')}}丨{{post.timeinfo.time}}</span>
            </div>
            <span class="post-category" v-if="target=='category'">
              <i class="iconfont icon-guidangxiangmu"></i>
              {{post.milestone.title}}
            </span>
            <ul class="label-list flex" v-if="target=='label'">
              <li  class="align-center" v-for="label in post.labels.slice(0,2)" :key="label.id">{{label.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <partLoading v-if="loadingStatus"/>
  </div>
</template>

<script>
import partLoading from "@/components/partLoading"
export default {
  name: "ArticleCard",
  props: {
    target: {
      type: String,
      default: ""
    },
    postList: {
      type: [Array,String],
      default: []
    },
    loadingStatus:{
      type: Boolean,
      default:false
    }
  },
  components: {
    partLoading
  },
  methods: {
    // 前往详情页
    goDetail(number) {
      this.$router.push({ name: "ArticleDetail", params: { number } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

