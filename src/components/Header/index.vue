<template>
  <header class="header">
    <nav class="menu-wrapper container clearfix">
      <div class="menu-pc">
        <div class="nav-logo">
          <router-link :to="{'path':'/'}" class="brand align-center">
            <img src="../../assets/img/logo.png" alt="logo">
          </router-link>
        </div>
        <ul class="menu-list flex">
          <li v-for="item in $config.menuList" :key="item.id" class="align-center">
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
  name: "Header",
  props: {
    "is-menu-open": {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  methods: {
    openMenu() {
      this.$emit("toggle-menu", true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

