<template>
  <div class="category pt200 row">
    <div class="category-container" v-if="categoryList.length" data-aos="fade-up">
        <div class="category-wrapper">
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
                  <span class="category-name">{{category.title}}{{category.title =='旧人叙'? `(${category.closed_issues})` : `(${category.open_issues})`}}</span>
              </div>
                <span class="category-desc">{{category.subject}}</span>
            </li>
          </ul>
      </div>
      <ArticleCard  :target="'label'" :post-list="postList" :loading-status="loadingStatus"/>
    </div>
    <Loading v-else/>
  </div>
</template>

<script> 
import store from "@/store"
import Loading from "@/components/Loading"
import Aos from "aos"
import ArticleCard from "@/components/ArticleCard"
export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      postList: [],
      loadingStatus: false,
      milestone: "",
      currenIndex: 0
    }
  },
  components: {
    Loading,
    ArticleCard
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
      this.loadingStatus = true
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
      this.loadingStatus = true
      let posts = await store.dispatch("queryArchive", {
        page: 1,
        pageSize: "",
        filter: `&milestone=${number}`
      })
      this.loadingStatus = false
      this.postList = posts
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

