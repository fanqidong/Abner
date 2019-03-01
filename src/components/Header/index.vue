<template>
  <header class="header">
    <nav class="menu-wrapper">
      <ul class="menu-list">
        <li v-for="item in menuList" :key="item.id">
          <i :class="['iconfont',`icon-${item.icon}`]"></i>
          <router-link :to="item.path" class="title">{{item.text}}</router-link>
        </li>
      </ul>
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
        }
      ]
    }
  },
  computed: {
    
  },
  methods: {},
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import url('../../assets/sass/iconfont.scss');
.menu-wrapper {
  width: 5rem;
  margin: .5rem auto;
  font-size: .16rem;
  animation: fadeInDown 1s;
}
.menu-list {
  display: flex;
  justify-content: space-between;
  padding: .15rem .2rem; 
  background-color: rgba(255, 255, 255, .6);
//   background-color: rgba(0, 0, 0, .3);
  border-radius: 4px;
  li {
    position: relative;
    display: flex;
    align-items: center;
  }
  .title {
    margin-left: .03rem;
    color: #000;
  }
}
.iconfont {
  font-size: 20px;
}
@media screen and (max-width: 750px){
    .menu-wrapper{
        width: 90%;
        font-size: 14px;
    }
}
</style>

