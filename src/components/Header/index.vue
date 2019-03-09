<template>
  <header class="header" :class="{active:isMenuOpen}">
    <nav class="menu-wrapper container clearfix" :class="{'menu-open':isMenuOpen}">
      <div class="menu-pc">
          <div class="nav-logo">
            <a href="javascript:;" class="brand">
                <img src="../../assets/img/logo.png" alt="网站logo"  @click="isMenuOpen=!isMenuOpen">
                <span>你的微笑</span>
            </a>
          </div>
        <ul class="menu-list">
          <li v-for="item in $config.menuList" :key="item.id" >
            <i :class="['iconfont',`icon-${item.icon}`]"></i>
            <router-link :to="item.path" class="title">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
      <button class="nav-collapse" @click="openMenu">
        <i class="fa fa-navicon fa-lg"></i>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    "is-menu-open": {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  computed: {},
  methods: {
     openMenu(){
       this.$emit('toggle-menu', true)
     }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/iconfont.scss";
@import "./index.scss";
</style>

