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
                <a href="javascript:;" class="tl-link" :class="`bg-${colorArr[index1+2]}`">
                  {{item.post}}
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
export default {
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
      console.log(res)
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



