<template>
  <div id="archive" class="archive">
    <section class="timeline-contanier" v-if="postList.length">
      <h2 class="text-center">文章归档</h2>
      <p class="archive-total">好! 目前共计{{postAmount}}篇日志。 继续努力。</p>
      <div
        class="tl-wrapper"
        v-for="(item,index1) in postList"
        :key="index1"
        :class="{'tl-open': index1 == currentIndex}"
      >
        <div class="tl-header" @click="toggleTimeline(index1,$event)">
          <h2 :class="`bg-${colorArr[index1+2]}`">{{item.time}}</h2>
        </div>
        <ul class="tl-body">
          <li class="tl-item clearfix" v-for="(item,index) in item.posts" :key="index">
            <div class="tl-content">
              <span class="tl-time">{{item.day}}日</span>
              <div class="tl-info" :class="`b-${colorArr[index1+2]}`">
                <span class="arrow"></span>
                <a href="javascript:;" :class="['tl-link',`bg-${colorArr[index1+2]}`]" @click="goDetail(item.number)">
                    <span>{{item.title}}</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <Loading v-else/>
  </div>
</template>

<script>
import ArchiveCard from "@/components/ArchiveCard"
import Loading from "@/components/Loading"
import store from "@/store"
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
    ArchiveCard,
    Loading
  },
  computed: {},
  created() {
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
      data.forEach(function(el, index) {
        let { created_at } = el
        el.day = dayjs(created_at).date()
        el.time = dayjs(created_at).format('YYYY年MM月')
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



