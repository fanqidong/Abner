<template>
  <header class="header">
    <nav class="menu-wrapper container clearfix">
      <div class="menu-pc">
          <div class="nav-logo">
            <a href="/" class="brand">
                <img src="../../assets/img/logo.png" alt="logo"  @click="isMenuOpen=!isMenuOpen">
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
        <i class="iconfont icon-kuaijiedaohang"></i>
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
@import "./index.scss";
</style>

