<template>
  <div class="menu-mobile flex-column">
    <div class="menu-header">
      <div class="site-bg"></div>
      <div class="site-info flex-center flex-around flex-column">
        <img src="../../assets/img/avatar.jpg" alt="头像" class="avatar">
        <p class="intro">启明星辰，东方明珠</p>
      </div>
    </div>
    <div class="menu-body justify-center font18">
      <ul class="menu-list">
        <li v-for="item in $config.menuList" :key="item.id" @click="closeMenu" class="menu-link flex">
          <i :class="['iconfont',`icon-${item.icon}`]"></i>
          <router-link :to="item.path" class="title">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMenu",
  props: {},
  methods: {
      closeMenu(){
          this.$emit('handle-menu',false)
      }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

