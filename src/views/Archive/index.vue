<template>
  <div id="archive" class="archive">
    <h2 class="text-center">文章归档</h2>
    <p class="archive-total">好! 目前共计 187 篇日志。 继续努力。</p>
    <section class="timeline-contanier">
      <div class="tl-wrapper" v-for="(item,index) in 4" :key="index"  :class="{'tl-open': index == currentIndex}">
        <div class="tl-header" @click="toggleTimeline(index)">
          <h2>2019年0{{item}}月</h2>
        </div>
        <ul class="tl-body">
          <li class="tl-item clearfix" v-for="(item,index) in 6" :key="index">
            <div class="tl-content">
              <span class="tl-time">0{{item}}日</span>
              <div class="tl-info">
                <span class="arrow"></span>
                <a href="javascript:;" class="tl-link">The Best Is Yet To Come.</a>
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

export default {
  data() {
    return {
        isOpen: false,
        currentIndex:''
    }
  },
  components: {
    ArchiveCard
  },
  computed: {},
  created() {},
  methods: {
      toggleTimeline(index){
          console.log(index)
          this.currentIndex = index
          this.isOpen = !this.isOpen
      }
  }
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
.archive-total{
    margin: .1rem 0;
}
.tl-wrapper{
    margin: 0 0 .1rem 0;
}
.tl-open +div{

}
.tl-wrapper.tl-open{
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
    background-color: #23b7e5;
    border-radius: 0.5rem;
    font-size: .18rem;
  }
}
.tl-body {
  display: none;
  padding-left: .1rem;
}
.tl-content {
  display: flex;
  align-items: center;
}
.tl-info{
    margin-left: .3rem;
    padding: .2rem 0 .15rem .2rem;
    border-left: 2px solid #23b7e5;
}
.tl-link{
    position: relative;
    background: #23b7e5;
    padding: .1rem;
    border-radius: .05rem;
    &::after{
        content: '';
        position: absolute;
        left: -.15rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        border-width: .08rem;
        border-style: solid;
        border-color: transparent #23b7e5  transparent transparent;
    }
}
</style>



