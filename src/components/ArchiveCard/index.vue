<template>
  <section class="archive-wrapper">
    <ul class="archive-card">
      <li v-for="(item,index) in 6" :key="index" class="card-item" :class="'random-bg'+`${item*2}`">
        <h2 class="title">你真的了解Vue中的Eventbus的用法吗？🐶</h2>
        <p class="desc">空巢青年：孤独得像条狗，和Siri做朋友</p>
        <a href="javascript:;" class="btn-more">新世界之门</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ArchiveCard'
}
</script>

<style lang="scss" scoped>
.archive-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #fff;
  text-align: justify;
  a {
    color: #fff;
  }
  li {
    width: 48%;
    padding: .4rem .2rem;
    margin-bottom: 4%;
    border-radius: 5px;
    &:nth-of-type(2n + 1) {
      margin: 0 0 4% 0;
    }
    >.desc{
        margin: .1rem 0;
    }
  }
}
@media screen and (max-width: 768px) {
    .archive-card {
        align-items: center;
        justify-content: space-around;
        li {
            width: 90%;
        }
    }
}
</style>

