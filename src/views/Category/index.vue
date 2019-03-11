<template>
  <div class="category row">
    <ul class="category-list">
      <li v-for="category in categoryList" :key="category.id">
             {{category.title}}
             {{category.subject}}
            <img :src="category.cover.trim()" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store"
export default {
  name: "Category",
  data() {
    return {
        categoryList: []
    }
  },
  async created() {
    await this.queryCategory()
  },
  methods: {
    async queryCategory() {
      this.categoryList = await store.dispatch("queryCategory")
    }
  }
}
</script>

<style>
</style>
