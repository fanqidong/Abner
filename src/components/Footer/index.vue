<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="copyright">
        <p>
          <span>Copyright © 2017-2019</span>
          <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
        </p>
        <p>All Rights Reserved.</p>
        <p class="my-birthday">
            <span>小小东存活了</span>
            <i class="iconfont icon-heart"></i>
            {{birthday}}
            </p>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from "dayjs"
import { setTimeout } from "timers"

export default {
  name: "Footer",
  data() {
    return {
      birthday: ""
    }
  },
  computed: {},
  mounted() {
      this.setBirthDay()
  },
  methods: {
    setBirthDay() {
      let day = dayjs(new Date()).diff("2018-07-20", "day")
      let hour = dayjs(new Date()).diff("2018-07-20", "hour") % 24
      let minute = dayjs(new Date()).diff("2018-07-20", "minute") % 60
      let second = dayjs(new Date()).diff("2018-07-20", "second") % 60
      this.birthday = `${day}天${hour}小时${minute}分钟${second}秒`
      setTimeout(() => {
        this.setBirthDay()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/animation.scss';
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 0.5rem;
  padding: 0.1rem 0 0.2rem 0;
  z-index: 100;
  color: #fff;
  &-container {
    max-width: 1200px;
    margin: auto;
  }
  a {
    color: #fff;
  }
  .author {
    margin: 0 .1rem;
  }
  .icon-heart{
      display: inline-block;
      margin-left: 4px;
      color: #f00;
      animation: ld-bounce 1.2s infinite;
  }
}
</style>

