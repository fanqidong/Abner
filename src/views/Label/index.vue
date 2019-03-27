<template>
  <div class="label row">
    <div class="label-content"  v-if="labelList.length" data-aos="fade-up">
      <h2 class="title">
        <ruby>文章标签
          <rt>Article label</rt>
        </ruby>
      </h2>
      <ul class="label-wrapper">
        <li  v-for="label in labelList" :key="label.id" class="label-item">
          <span class="text">{{label.name}}</span>
        </li>
      </ul>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import store from "@/store"
import Loading from '@/components/Loading'
import Aos from 'aos'
export default {
  name: "Label",
  data() {
    return {
      labelList: []
    }
  },
  components:{
      Loading
  },
  async created() {
    await this.queryLabel()
    Aos.init({
      duration: 1000,
      easing: "ease-out",
      debounceDelay: 200,
      offset: 20
    }),
    setTimeout(Aos.refresh, 600)
  },
  mounted() {},
  methods: {
    //   获取标签
    async queryLabel() {
      this.labelList = await store.dispatch("queryLabel")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

