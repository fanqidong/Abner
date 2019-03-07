<template>
  <header class="header">
    <nav class="menu-wrapper container clearfix">
      <div class="menu-pc">
        <a href="/"  class="logo">
            <img src="../../assets/img/logo.png" alt="" class="logo">
            <span>你的微笑</span>
        </a>
        <ul class="menu-list">
          <li v-for="item in menuList" :key="item.id">
            <i :class="['iconfont',`icon-${item.icon}`]"></i>
            <router-link :to="item.path" class="title">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <div class="menu-mobile"></div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 0,
          path: '/',
          icon: 'shouye',
          text: '首页'
        },
        {
          id: 1,
          path: '/archive',
          icon: 'guidangxiangmu',
          text: '归档'
        },
        {
          id: 2,
          path: '/label',
          icon: 'biaoqian',
          text: '标签'
        },
        {
          id: 3,
          path: '/category',
          icon: 'fenlei',
          text: '分类'
        },
        {
          id: 4,
          path: '/about',
          icon: 'guanyu',
          text: '关于'
        },
        {
          id: 5,
          path: '/friend',
          icon: 'pengyouquan',
          text: '知交'
        },
        {
          id: 6,
          path: '/mood',
          icon: 'pengyouquan',
          text: '每日一说'
        }
      ]
    }
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import url('../../assets/sass/iconfont.scss');
@import './index.scss';
</style>

