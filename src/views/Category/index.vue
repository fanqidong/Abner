<template>
  <div class="category row">
    <ul class="category-list"  v-if="categoryList.length">
      <li v-for="category in categoryList" :key="category.id">
        <div>
            <span>{{category.title}}</span>
            <span>{{category.open_issues}}</span>
        </div>
        <img :src="category.cover.trim()" alt class="cover">
      </li>
    </ul>
  <Loading v-else />
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
export default {
  name: "Category",
  data() {
    return {
      categoryList: []
    }
  },
  components: {
      Loading
  },
  created() {
    this.queryCategory()
  },
  methods: {
    async queryCategory() {
      this.categoryList = await store.dispatch("queryCategory")
      console.info(this.categoryList)
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    flex: 0.3;
    .cover {
      display: block;
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>

