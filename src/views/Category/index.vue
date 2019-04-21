<template>
  <div class="category">
    <Banner :background-image="$config.category.cover" :keyword="$config.category.keyword"/>
    <div class="category-container row" v-if="categoryList.length" data-aos="fade-up">
      <div class="v-charts">
        <div class="v-head c666 font22">年度成长图</div>
        <div class="v-body">
          <ve-pie :data="chartData" width="100%" height="320px"></ve-pie>
        </div>
      </div>
      <div class="category-wrapper">
        <ul class="category-list flex-between flex-wrap cfff">
          <li
            v-for="(category,index) in categoryList"
            :key="category.id"
            :class="[index==currenIndex ?'active': '','flex-center']"
            @click="handleFilter(index,category.number,$event)"
          >
            <img v-lazy="category.cover.trim()" class="category-cover absolute-full" alt>
            <div class="line top-line"></div>
            <div class="line bottom-line"></div>
            <div class="category-info flex-center flex-column">
              <p class="category-name font18">
                {{category.title}}
                <span
                  class="font14"
                >{{category.title =='旧人叙'? `(${category.closed_issues})` : `(${category.open_issues})`}}</span>
              </p>
              <span class="category-desc font12">{{category.subject}}</span>
            </div>
          </li>
        </ul>
      </div>
      <ArticleCard :target="'label'" :post-list="postList" :loading-status="loadingStatus"/>
    </div>
    <partLoading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Aos from "aos"
import ArticleCard from "@/components/ArticleCard"
import partLoading from "@/components/partLoading"
import Banner from "@/components/Banner"

export default {
  name: "Category",
  data() {
    return {
      categoryList: [],
      postList: [],
      loadingStatus: false,
      milestone: "",
      currenIndex: 0,
      postNum:0,
      chartData: {
        columns: ["分类名称", "文章数量"],
        rows: []
      }
    }
  },
  components: {
    partLoading,
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
      // 处理echart数据
      this.categoryList.map(item=>{
       this.postNum = item.number === 2 ? item.closed_issues: item.open_issues
          this.chartData.rows.push({
             分类名称:item.title,
             文章数量: this.postNum
          })
      })
    },
    // 筛选文章
    handleFilter(index, number) {
      this.currenIndex = index
      if (index == 0) {
        this.$router.push({ name: "Mood" })
        return
      }
      this.$Scroll(2 * window.innerHeight, 100)
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
@import "./index.scss";
</style>

