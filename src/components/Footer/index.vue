<template>
  <footer class="footer flex-center c999">
    <div class="container">
      <div class="copyright">
        <p>
          <span>Copyright © 2017-2019</span>
          <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
        </p>
        <p>All Rights Reserved.</p>
        <p class="my-birthday">
            <span>小小东存活了</span>
            <i class="iconfont icon-heart"></i>{{birthday}}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from "dayjs"
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
  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 100;
  background:#140D19;
  // border-top: 1px solid #140D19;
  a {
    color: #88baea;
  }
  .author {
    margin: 0 1em;
  }
  .icon-heart{
      display: inline-block;
      margin-left: 4px;
      color: #f15;
      animation: heartbeat 1s infinite cubic-bezier(.215,.61,.355,1);
  }
}
</style>

