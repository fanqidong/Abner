<template>
  <div class="label row pt200">
    <div class="label-container">
        <div class="label-content"  v-if="labelList.length" data-aos="fade-up">
          <h2 class="title">
            <ruby>文章标签
              <rt>Article label</rt>
            </ruby>
          </h2>
          <ul class="label-wrapper">
            <li  v-for="label in labelList" :key="label.id" class="label-item" @click="handleFilter(label)">
              <span class="text">{{label.name}}</span>
            </li>
          </ul>
        </div>
        <Loading v-else />
    </div>
    <ArticleCard  :target="'category'" :post-list="postList" :loading-status="loadingStatus"/>
    </div>
</template>
<script>
import store from "@/store"
import Loading from '@/components/Loading'
import Aos from 'aos'
import ArticleCard from "@/components/ArticleCard"
export default {
  name: "Label",
  data() {
    return {
      loadingStatus: false,
      lable: '',
      labelList: [],
      postList:[]
    }
  },
  components:{
      Loading,
      ArticleCard
  },
  async created() {
    await this.queryLabel()
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
    setTimeout(Aos.refresh, 600)
  },
  mounted() {},
  methods: {
    //   获取标签
    async queryLabel() {
      this.labelList = await store.dispatch("queryLabel")
    },
    // 根据标签筛选
    handleFilter(label){
       this.label = label
       this.filterPosts()
    },
    // 过滤文章
    async filterPosts(){
      if(this.loadingStatus) return 
     if (this.postList) {
        this.postList = ""
      }
      this.loadingStatus = true
      const filter = `&labels=${this.label.name}`
      const posts = await store.dispatch('queryArchive', {
        page: 1,
        pageSize: '',
        filter
      })
      this.loadingStatus = false
      this.postList = posts
      console.log(this.postList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

