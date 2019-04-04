<template>
  <div id="archive" class="archive  row pt200">
    <section class="archive-contanier" v-if="postList.length" data-aos="fade-up">
      <div class="archive-header">
        <h2>
          <ruby>
            文章归档
            <rt>Article archive</rt>
          </ruby>
        </h2>
        <p class="archive-total">棒棒哒! 目前共计{{postAmount}}篇日志。 继续努力哦！</p>
      </div>
      <div class="timeline-contanier">
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
              <div class="tl-content">
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
    <Loading v-else/>
  </div>
</template>

<script>
import Loading from "@/components/Loading"
import store from "@/store"
import Aos from "aos"
import dayjs from "dayjs"
export default {
  name: "Archive",
  data() {
    return {
      currentIndex: "",
      colorArr: ["light", "dark", "black", "primary", "success", "info", "warning", "danger"],
      postList: [],
      postAmount: 0
    }
  },
  components: {
    Loading
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>



