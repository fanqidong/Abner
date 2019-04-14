<template>
  <div class="category">
    <Banner :background-image="$config.category.cover" :keyword="$config.category.keyword" />
    <div class="category-container row" v-if="categoryList.length" data-aos="fade-up">
        <div class="category-wrapper">
          <ul class="category-list flex-around flex-wrap">
            <li
              v-for="(category,index) in categoryList"
              :key="category.id"
              :class="[index==currenIndex ?'active': '','flex-center']"
              @click="handleFilter(index,category.number,$event)"
            >
              <img v-lazy="category.cover.trim()" class="category-cover absolute-full" alt="" >
              <div class="line top-line"></div>
              <div class="line bottom-line"></div>
              <div class="category-info flex-center flex-column">
                <p class="category-name font18">
                    {{category.title}}
                  <span class="font14">{{category.title =='旧人叙'? `(${category.closed_issues})` : `(${category.open_issues})`}}</span>
                </p>
                  <span class="category-desc font12">{{category.subject}}</span>
              </div>
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
import Aos from "aos"
import ArticleCard from "@/components/ArticleCard"
import Loading from "@/components/Loading"
import Banner from "@/components/Banner"

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
    ArticleCard,
    Banner
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
    handleFilter(index, number,event) {
      this.currenIndex = index
      if (index == 0) {
        this.$router.push({ name: "Mood" })
        return
      }
      window.scrollTo(0, 1.5*window.innerHeight)
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

