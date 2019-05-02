<template>
  <footer class="footer flex-center c999" ref="footer">
    <div class="container">
      <div class="copyright">
        <p>
          <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
          <span>All Rights Reserved.</span>
        </p>
        <p class="my-birthday">
          <span>小小东存活了</span>
          <i class="iconfont icon-heart"></i>
          <span>{{birthday}}</span>
        </p>
        <p>
          <span>Copyright © 2018-2019</span>
          <a href="http://www.miitbeian.gov.cn" target="_blank">鄂ICP备19004957号-1</a>
        </p>
      </div>
    </div>
    <div class="side-img">
      <img src="https://catbox.moe/pictures/qts/1457227943457.png" alt>
    </div>
  </footer>
</template>

<script>
import dayjs from "dayjs"
import { $ } from "@/utils/dom"
export default {
  name: "Footer",
  data() {
    return {
      birthday: ""
    }
  },
  computed: {
    footerHeight() {
      return this.$refs.footer.offsetHeight
    }
  },
  mounted() {
    this.setBirthDay()
    this.fixFooter()
  },
  methods: {
    // 博客生日
    setBirthDay() {
      let day = dayjs(new Date()).diff("2018-07-20", "day")
      let hour = dayjs(new Date()).diff("2018-07-20", "hour") % 24
      let minute = dayjs(new Date()).diff("2018-07-20", "minute") % 60
      let second = dayjs(new Date()).diff("2018-07-20", "second") % 60
      this.birthday = `${day}天${hour}小时${minute}分钟${second}秒`
      setTimeout(() => {
        this.setBirthDay()
      }, 1000)
    },
    // 固定footer
    fixFooter() {
      document.body.style.paddingBottom = `${this.footerHeight}px`
      $(".go-top").style.bottom = `${this.footerHeight + 20}px`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/animation.scss";
.footer {
  position: absolute;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  background: #140d19;
  a {
    position: relative;
    color: #88baea;
  }
  .author {
    margin: 0 1em;
  }
  .icon-heart {
    display: inline-block;
    margin-left: 4px;
    color: #f15;
    animation: heartbeat 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
.side-img{
  position: fixed;
  right: -30px;
  bottom: 0;
  z-index: 997;
}
@media screen and (max-width: 768px) {
  .side-img{
    img{
      height: 94px;
    }
  }
}
</style>

