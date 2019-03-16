<template>
  <div class="category row">
    <ul class="category-list">
      <li v-for="category in categoryList" :key="category.id">
             <p>{{category.title}}</p>
            <img :src="category.cover.trim()" alt="" class="cover">
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
 created() {
     this.queryCategory()
  },
  methods: {
    async queryCategory() {
      this.categoryList = await store.dispatch("queryCategory")
    }
  }
}
</script>

<style lang="scss" scoped>
.category-list{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #fff;
  li{
   flex:.3;
    .cover{
      display: block;
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>

