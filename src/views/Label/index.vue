<template>
  <div class="label">
    <Banner :background-image="$config.label.cover" :keyword="$config.label.keyword"/>
    <div class="label-container row">
        <div class="label-content"  v-if="labelList.length" data-aos="fade-up">
          <ul class="label-wrapper flex-around flex-wrap">
            <li  v-for="label in labelList" :key="label.id" class="label-item " @click="handleFilter(label)">
              <span class="text">{{label.name}}</span>
            </li>
          </ul>
        </div>
        <Loading v-else />
    </div>
    <ArticleCard class="row"  :target="'category'" :post-list="postList" :loading-status="loadingStatus"/>
    <div class="no-data" v-show="noData">啊哦，暂时没有相关内容，去看看其他的吧~</div>
    </div>
</template>
<script>
import store from "@/store"
import Loading from '@/components/Loading'
import Aos from 'aos'
import ArticleCard from "@/components/ArticleCard"
import Banner from "@/components/Banner"
export default {
  name: "Label",
  data() {
    return {
      loadingStatus: false,
      lable: '',
      labelList: [],
      postList:[],
      noData: false
    }
  },
  components:{
      Loading,
      ArticleCard,
      Banner
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
        this.noData = false
      }
      this.loadingStatus = true
      const filter = `&labels=${this.label.name}`
      const posts = await store.dispatch('queryArchive', {
        page: 1,
        pageSize: '',
        filter
      })
      if(!posts.length) this.noData = true
      this.loadingStatus = false
      this.postList = posts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

