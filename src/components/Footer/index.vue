<template>
  <footer class="footer">
    <APlayer autoplay fixed :list="$config.musicList" :music="currentMusic" :showLrc="true"/>
    <div class="footer-container">
        <div class="copyright">
            <p>
                <span>Copyright © 2017-2019</span>
                <a href="https://github.com/fanqidong" target="_blank" class="author">旅途与画</a>
            </p>
            <p>All Rights Reserved.</p>
        </div>
    </div>
  </footer>
</template>

<script>
import APlayer from 'vue-aplayer'
APlayer.disableVersionBadge = true
export default {
  name: "Footer",
  data(){
    return {
      currentMusic:{
        title: '天亮以后说再见',
        artist: '曲肖冰',
        src: 'http://m801.music.126.net/20190331220430/9ea2072a92b86af9c04c4456c30b7869/jdyyaac/555c/0359/0753/b6994eea92432431accb0921a0ced83e.m4a'
      }
    }
  },
  mounted(){
    console.log(this.$config.musicList)
  },
  components:{
    APlayer
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: .5rem;
  padding: .1rem 0 .2rem 0;
  z-index: 100;
  color: #fff;
  &-container {
    max-width: 1200px;
    margin: auto;
  }
  a{
      color: #fff;
  }
  .author{
      margin: 0 .1rem;
  }
}
@media screen and (max-width:768px){
    .footer{
          background: #0c0e10;
    }
}
</style>

