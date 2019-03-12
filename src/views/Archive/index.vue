<template>
  <div id="archive" class="archive">
    <h2 class="text-center">文章归档</h2>
    <p class="archive-total">好! 目前共计 187 篇日志。 继续努力。</p>
    <section class="timeline-contanier">
      <div
        class="tl-wrapper"
        v-for="(item,index1) in 4"
        :key="index1"
        :class="{'tl-open': index1 == currentIndex}"
      >
        <div class="tl-header" @click="toggleTimeline(index1,$event)">
          <h2 :class="`bg-${colorArr[index1+2]}`">2019年0{{item}}月</h2>
        </div>
        <ul class="tl-body">
          <li class="tl-item clearfix" v-for="(item,index) in 6" :key="index">
            <div class="tl-content">
              <span class="tl-time">0{{item}}日</span>
              <div class="tl-info" :class="`b-${colorArr[index1+2]}`">
                <span class="arrow"></span>
                <a
                  href="javascript:;"
                  class="tl-link"
                  :class="`bg-${colorArr[index1+2]}`"
                >The Best Is Yet To Come.</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import ArchiveCard from "@/components/ArchiveCard"
import store from '@/store'
export default {
  data() {
    return {
      currentIndex: "",
      colorArr: ["light", "dark", "black", "primary", "success", "info", "warning", "danger"],
      posts:[]
    }
  },
  components: {
    ArchiveCard
  },
  computed: {},
  created() {
    if (!this.posts.length) {
       this.getPosts()
    }
  },
  methods: {
    //  获取所有文章列表 && =>归档
    async getPosts() {
     const res = await store.dispatch('queryPosts',{ type: 'archive'})
     console.log(res)
    },
    toggleTimeline(index, event) {
      this.currentIndex = index
     let parent = event.currentTarget.parentElement
     parent.classList.contains('tl-open') ? parent.classList.remove('tl-open') : parent.classList.add('tl-open')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
h2 {
  margin: 0;
}
.archive-total{
  margin: .1rem 0;
}
.tl-wrapper {
  margin: 0 0 0.2rem 0;
}
.tl-wrapper.tl-open {
  margin: 0;
}
.tl-wrapper.tl-open .tl-body {
  display: block;
}
.tl-header {
  max-width: 1.5rem;
  text-align: center;
  cursor: pointer;
  > h2 {
    padding: 0.1rem 0;
    border-radius: 0.5rem;
    font-size: 0.18rem;
  }
}
.tl-body {
  display: none;
  padding-left: 0.2rem;
}
.tl-content {
  position: relative;
  display: flex;
  align-items: center;
}
.tl-info {
  position: relative;
  margin-left: 0.55rem;
  padding: 0.2rem 0 0.25rem 0.2rem;
  border-left: 4px solid #23b7e5;
  &::before {
    content: "";
    position: relative;
    float: left;
    left:-27px;
    top: 10px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #edf1f2;
  }
}
.tl-time {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.tl-link {
  position: relative;
  background: #23b7e5;
  padding: 0.1rem;
  border-radius: 0.05rem;
  &::before {
    content: "";
    position: absolute;
    left: -0.16rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    border-width: 0.08rem;
    border-style: solid;
    border-color: transparent #23b7e5 transparent transparent;
  }
}
.b-light {
  border-color: #edf1f2;
}
.bg-light {
  color: #58666e;
  background-color: #edf1f2;
  &::before{
    border-right-color: #edf1f2;
  }
}
.b-dark {
  border-color: #3a3f51;
}
.bg-dark {
  color: #a6a8b1;
  background-color: #3a3f51;
  &::before{
    border-right-color: #3a3f51;
  }
}
.b-black {
  border-color: #3a3f51;
}
.bg-black {
  color: #7793a7;
  background-color: #1c2b36;
   &::before{
    border-right-color: #1c2b36;
  }
}
.b-primary {
  border-color: #7266ba;
}
.bg-primary {
  color: #f4f3f9;
  background-color: #7266ba;
  &::before{
    border-right-color: #7266ba;
  }
}
.b-success {
  border-color: #27c24c;
}
.bg-success {
  color: #c6efd0;
  background-color: #27c24c;
  &::before{
    border-right-color: #27c24c;
  }
}
.b-info {
  border-color: #23b7e5;
}
.bg-info {
  color: #dcf2f8;
  background-color: #23b7e5;
  &::before{
    border-right-color: #23b7e5;
  }
}
.b-warning {
  border-color: #fad733;
}
.bg-warning {
  color: #fffefa;
  background-color: #fad733;
  &::before{
    border-right-color: #fad733;
  }
}
.b-danger {
  border-color: #f05050;
}
.bg-danger {
  color: #fff;
  background-color: #f05050;
  &::before{
    border-right-color: #f05050;
  }
}
.b-white {
  border-color: #fff;
}
.bg-white {
  color: #58666e;
  background-color: #fff;
  &::before{
    border-right-color: #fff;
  }
}
</style>



