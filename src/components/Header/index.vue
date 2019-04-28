<template>
  <header class="header">
    <nav class="menu-wrapper container clearfix">
      <div class="menu-pc font16">
        <router-link :to="{'path':'/'}" class="nav-logo align-center">
          <svg class="svg-text">
            <text
              stroke-dasharray="90 310"
              stroke-width="1px"
              text-shadow="0 0 1px #3498db"
              stroke="#3498db"
              fill="none"
              text-transform="uppercase"
              y="100%"
              x="50%"
              text-anchor="middle"
              font-size="50"
            >
              旅途与画
              <animate
                attributeName="stroke-dashoffset"
                begin="-2s"
                dur="8s"
                from="0"
                to="-400"
                repeatCount="indefinite"
              ></animate>
            </text>
            <text
              stroke-dasharray="90 310"
              stroke-width="1px"
              text-shadow="0 0 1px #f39c12"
              stroke="#f39c12"
              fill="none"
              text-transform="uppercase"
              y="100%"
              x="50%"
              text-anchor="middle"
              font-size="50"
            >
              旅途与画
              <animate
                attributeName="stroke-dashoffset"
                begin="-4s"
                dur="8s"
                from="0"
                to="-400"
                repeatCount="indefinite"
              ></animate>
            </text>
            <text
              stroke-dasharray="90 310"
              stroke-width="1px"
              text-shadow="0 0 1px #e74c3c"
              stroke="#e74c3c"
              fill="none"
              text-transform="uppercase"
              y="100%"
              x="50%"
              text-anchor="middle"
              font-size="50"
            >
              旅途与画
              <animate
                attributeName="stroke-dashoffset"
                begin="-6s"
                dur="8s"
                from="0"
                to="-400"
                repeatCount="indefinite"
              ></animate>
            </text>
            <text
              stroke-dasharray="90 310"
              stroke-width="1px"
              text-shadow="0 0 1px #9b59b6"
              stroke="#9b59b6"
              fill="none"
              text-transform="uppercase"
              y="100%"
              x="50%"
              text-anchor="middle"
              font-size="50"
            >
              旅途与画
              <animate
                attributeName="stroke-dashoffset"
                begin="-8s"
                dur="8s"
                from="0"
                to="-400"
                repeatCount="indefinite"
              ></animate>
            </text>
          </svg>
        </router-link>
        <ul class="menu-list flex fr">
          <router-link
            tag="li"
            v-for="item in $config.menuList"
            :key="item.id"
            class="flex-center menu-item cfff"
            :to="item.path"
          >
            <i :class="['iconfont cfff',`icon-${item.icon}`]"></i>
            <a href="javascript:;" class="cfff">{{item.text}}</a>
          </router-link>
        </ul>
      </div>
      <button class="nav-collapse is-href cfff" @click="openMenu">
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

