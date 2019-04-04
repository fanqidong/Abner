<template>
  <div class="category pt200">
    <section class="category-wrapper row" v-if="categoryList.length" data-aos="fade-up">
      <h2 class="category-title">
        <ruby>
          文章分类
          <rt>Article category</rt>
        </ruby>
      </h2>
      <ul class="category-list">
        <li
          v-for="(category,index) in categoryList"
          :key="category.id"
          :class="[index==currenIndex ?'active': '']"
          @click="handleFilter(index,category.number)"
        >
          <img v-lazy="category.cover.trim()" class="category-cover" alt="" >
          <div class="category-info">
              <div class="category-avatar" :style="{backgroundImage: `url(${category.cover.trim()})`}"></div>
              <span class="category-name">{{category.title}}{{category.title =='每日一说'? `(${category.closed_issues})` : `(${category.open_issues})`}}</span>
          </div>
            <span class="category-desc">{{category.subject}}</span>
        </li>
      </ul>
      <div class="article-wrapper">
        <ul class="article-list" v-if="postList.length">
          <li
            v-for="post in postList"
            :key="post.id"
            class="article-item"
            @click="goDetail(post.number)"
          >
            <div class="article-mask"></div>
            <img class="article-cover" v-lazy="post.cover.src" :alt="post.cover.text">
            <div class="article-meta">
              <!-- 文章内容  Start -->
              <!-- 文章标题 -->
              <h2 class="article-title">{{post.title}}</h2>
              <!-- 简介 -->
              <div class="article-desc">{{post.desc}}</div>
              <div class="article-tags">
                <!-- 热度 -->
                <span>
                  <i class="iconfont icon-hot"></i>
                  <em>热度：{{post.times}}°C</em>
                </span>
                <!-- 归档 -->
                <span>
                  <i class="iconfont icon-guidangxiangmu"></i>
                  <em>{{post.milestone.title }}</em>
                </span>
                <!-- 标签 -->
                <span class="archive">
                  <i class="iconfont icon-biaoqian"></i>
                  <em v-for="label in post.labels.slice(0,2)" :key="label.id">{{label.name}}</em>
                </span>
              </div>
              <!-- 文章内容 End -->
            </div>
          </li>
        </ul>
        <partLoading v-if="partLoading"/>
      </div>
    </section>
    <Loading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
import Aos from "aos"
import partLoading from "@/components/partLoading"
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      postList: [],
      partLoading: false,
      milestone: "",
      currenIndex: 0
    }
  },
  components: {
    Loading,
    partLoading
  },
  created() {
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
      setTimeout(Aos.refresh, 600)
      this.queryCategory()
  },
  methods: {
    async queryCategory() {
      this.categoryList = await store.dispatch("queryCategory")
    },
    handleFilter(index, number) {
      this.currenIndex = index
      if (index == 0) {
        this.$router.push({ name: "Mood" })
        return
      }
      this.partLoading = true
      this.queryPost(number)
    },
    // 前往文章详情页
    goDetail(number) {
      this.$router.push({ name: "ArticleDetail", params: { number } })
    },
    // 根据分类查询文章
    async queryPost(number) {
      if (this.postList) {
        this.postList = ""
      }
      this.partLoading = true
      let posts = await store.dispatch("queryArchive", {
        page: 1,
        pageSize: "",
        filter: `&milestone=${number}`
      })
      this.partLoading = false
      this.postList = posts
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

