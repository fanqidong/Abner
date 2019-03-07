<template>
  <div class="label row">
    <div class="label-content">
      <h2 class="title">
        <ruby>文章标签
          <rt>Article label</rt>
        </ruby>
      </h2>
      <ul class="label-wrapper" v-if="labelList.length">
        <li
          v-for="label in labelList"
          :key="label.id"
          class="label-item"
          :style="{backgroundColor:`#${label.color}`}"
        >
          <span class="text">{{label.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Label',
  data() {
    return {
      labelList: []
    }
  },
  async created() {
    await this.queryLabel()
  },
  mounted() {},
  methods: {
    //   获取标签
    async queryLabel() {
      this.labelList = await store.dispatch('queryLabel')
      console.log(this.labelList)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

