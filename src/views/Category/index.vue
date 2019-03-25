<template>
  <div class="category row">
    <section class="category-wrapper" v-if="categoryList.length">
      <h2 class="category-title">
        <ruby>
          文章分类
          <rt>Article category</rt>
        </ruby>
      </h2>
      <ul class="category-list">
        <li
          v-for="(category,index) in categoryList"
          :key="category.id"
          @click="handleFilter(index,category.number)"
        >
          <div class="category-cover" :style="{backgroundImage: `url(${category.cover.trim()})`}"></div>
          <div class="category-info">
            <span class="category-name">{{category.title}}{{category.title =='每日一说'? `(${category.closed_issues})` : `(${category.open_issues})`}}</span>
            <span class="category-desc">{{category.subject}}</span>
          </div>
        </li>
      </ul>
    </section>
    <Loading v-else/>
  </div>
</template>

<script>
import store from "@/store"
import Loading from "@/components/Loading"
import Aos from "aos"
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
    },
    handleFilter(index,number) {
      if (index == 0) {
         this.$router.push({name: "Mood"})
         return
      }
      console.log(number)
      this.queryPost(number)
    },
   async queryPost(number){
       let posts = await store.dispatch("queryArchive",{
          page: 1,
          pageSize: '',
          filter: `&milestone=${number}`
       })
       console.log(posts)
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  &-wrapper{
    max-width: 900px;
    min-height: 6rem;
    padding: 0.15rem;
    background: rgba(255, 255, 255, 0.5);
  }
  &-title {
    margin: 0 0 1em 0;
  }
}
.category-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: #fff;
  li {
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    span{
        // display: none;
        font-size: 22px;
    }
    .category-desc{
        // display: none;
        font-size: 16px;
    }
    &:hover{
        .category-desc{
            display: block;
        }
    }
    .category-cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 50%;
      background: no-repeat center/cover;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: rgba($color: #000, $alpha: 0.5);
      }
    }
    .category-info {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 30% 0;
      z-index: 5;
    }
  }
}
@media screen and (max-width: 768px) {
    .category-list{
        li{
            span{
                font-size: 12px !important;
            }
        }
    }
}
</style>

