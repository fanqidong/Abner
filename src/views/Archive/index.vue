<template>
  <div id="archive" class="archive">
    <Banner :background-image="$config.archive.cover" :keyword="$config.archive.keyword"/>
    <section class="archive-contanier row pt50" v-if="postList.length" data-aos="fade-up">
      <div class="site-recommend bfff flex">
        <i class="iconfont icon-recommend"></i>
        <p>棒棒哒! 目前共计{{postAmount}}篇日志。 继续努力哦！</p>
      </div>
      <div class="github-chart">
        <p>GitHub年度提交记录</p>
        <img src="http://ghchart.rshah.org/409ba5/fanqidong" alt="2016rshah's Blue Github Chart">
      </div>
      <div class="v-charts">
        <div class="v-head c666 font22">年度文章归档</div>
        <div class="v-body">
          <ve-histogram :data="chartData" width="100%" height="300px"></ve-histogram>
        </div>
      </div>
      <div class="tl-container">
        <div
          class="tl-wrapper"
          v-for="(item,index1) in postList"
          :key="index1"
          :class="{'tl-open': index1 == currentIndex}"
        >
          <div class="tl-header" @click="toggleTimeline(index1,$event)">
            <div class="tl-year">{{item.time}}</div>
          </div>
          <ul class="tl-body">
            <li class="tl-item" v-for="(item,index) in item.posts" :key="index">
              <span class="tl-time">{{item.day}}日</span>
              <div class="tl-content align-center">
                <div class="tl-info">
                  <a
                    href="javascript:;"
                    class="tl-link"
                    @click="goDetail(item.number)"
                  >{{item.title}}</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <partLoading v-else/>
  </div>
</template>

<script>
import partLoading from "@/components/partLoading"
import Banner from "@/components/Banner"
import Aos from "aos"
import dayjs from "dayjs"
import store from "@/store"

export default {
  name: "Archive",
  data() {
    return {
      currentIndex: "",
      colorArr: ["light", "dark", "black", "primary", "success", "info", "warning", "danger"],
      postList: [],
      postAmount: 0,
      chartData: {
        columns: ["日期", "文章数量"],
        rows: []
      }
    }
  },
  components: {
    partLoading,
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
    if (!this.postList.length) {
      this.getPosts()
    }
  },
  mounted() {},
  methods: {
    //  获取所有文章列表 && =>归档
    async getPosts() {
      let data = await store.dispatch("queryArchive", {
        page: 1,
        pageSize: ""
      })
      this.postAmount = data.length
      this.formatPost(data)
    },
    // 前往文章详情页
    goDetail(number) {
      this.$router.push({ name: "ArticleDetail", params: { number } })
    },
    toggleTimeline(index, event) {
      this.currentIndex = index
      let parent = event.currentTarget.parentElement
      parent.classList.contains("tl-open")
        ? parent.classList.remove("tl-open")
        : parent.classList.add("tl-open")
    },
    // 格式化文章 按月份分组
    formatPost(data) {
      let listArr = []
      data.forEach((el, index) => {
        let { created_at } = el
        el.day = dayjs(created_at).date()
        el.time = dayjs(created_at).format("YYYY年MM月")
        for (let i = 0, length = listArr.length; i < length; i++) {
          // 对比相同的字段key，相同放入对应的数组
          if (listArr[i].time == el.time) {
            listArr[i].posts.push(el)
            return
          }
        }
        // 第一次对比没有参照，放入参照
        listArr.push({
          time: el.time,
          day: el.day,
          posts: [el]
        })
      })
      this.postList = listArr
      this.postList.map(item => {
        this.chartData.rows.push({ 日期: item.time, 文章数量: item.posts.length })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>



