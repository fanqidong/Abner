<template>
  <div id="archive" class="archive">
    <section class="timeline-contanier" v-if="postList.length">
      <h2 class="text-center">文章归档</h2>
      <p class="archive-total">好! 目前共计{{postList.length}}篇日志。 继续努力。</p>
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
              <span class="tl-time">0{{item.time}}</span>
              <div class="tl-info" :class="`b-${colorArr[index1+2]}`">
                <span class="arrow"></span>
                <a
                  href="javascript:;"
                  class="tl-link"
                  :class="`bg-${colorArr[index1+2]}`"
                >{{item.post}}</a>
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
import isBetween from "dayjs/plugin/isBetween"
dayjs.extend(isBetween)
export default {
  name: "Archive",
  data() {
    return {
      currentIndex: "",
      colorArr: ["light", "dark", "black", "primary", "success", "info", "warning", "danger"],
      postList: [
        {
          time: "2019年01月",
          posts: [
            {
              post: "文章1",
              time: "1日"
            },
            {
              post: "文章2",
              time: "2日"
            },
            {
              post: "文章3",
              time: "3日"
            }
          ]
        },
        {
          time: "2019年04月",
          posts: [
            {
              post: "文章1",
              time: "11日"
            },
            {
              post: "文章22",
              time: "22日"
            }
          ]
        },
        {
          time: "2019年08月",
          posts: [
            {
              post: "文章1",
              time: "11日"
            }
          ]
        }
      ]
    }
  },
  components: {
    ArchiveCard,
    Loading
  },
  computed: {},
  created() {
    // if (!this.posts.length) {
    this.getPosts()
    // }
  },
  methods: {
    //  获取所有文章列表 && =>归档
    async getPosts() {
      let res = await store.dispatch("queryPosts", { type: "archive" })
      let arr = []
      let obj = {
        // post: []
      }
      let n = 0
      res.forEach((item, index, array) => {
        let { created_at } = item
        // 日期 "2019/3/22"
        let date = new Date(created_at)
        let times = date.toLocaleDateString()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let monthYear = `${year}/${month}`
        array[index][monthYear] = monthYear
        console.log(item[monthYear])
        // 判断当前日期是否在当前月份里
        const isBetweenMonth = dayjs(times).isBetween(`${year}/${month}`, `${year}/${month + 1}`)
        const isSameMonth = dayjs(date).isSame(`${year}-${month}`)
        console.log(array[0][monthYear]==array[1][monthYear])
        // if (array[index][monthYear] != array[index + 1][monthYear]) {
        //   arr.push(array.slice(n, index + 1))
        //   n = index + 1
        // }
      })
    },
    toggleTimeline(index, event) {
      this.currentIndex = index
      let parent = event.currentTarget.parentElement
      parent.classList.contains("tl-open")
        ? parent.classList.remove("tl-open")
        : parent.classList.add("tl-open")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>



