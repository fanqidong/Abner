<template>
  <div class="page row pt100">
    <h1 class="tl">相册</h1>
    <ul class="photo-wrapper flex-wrap">
      <li v-for="photo in photoArr" :key="photo.size" class="photo-item">
        <img :src="photo.download_url" :alt="photo.name">
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store"
export default {
  name: "Photo",
  data() {
    return {
      photoArr: []
    }
  },
  async created() {
    this.photoArr = await store.dispatch("queryPhoto")
    console.log(this.photoArr)
  },
  mounted() {
    // console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
.page {
  p {
    font-size: 40px;
  }
  .index-link {
    display: block;
    margin-top: 1em;
    padding: 0.1rem 0.2rem;
    border-radius: 5px;
    background-color: #007fff;
  }
  .logo {
    animation: pulse 1.5s infinite;
  }
}
.photo{
  &-wrapper{
    margin-top: .3rem;
  }
   &-item{
     margin: 4px;
     flex-grow: 1;
     img{
       min-width: 100%;
       height: 4rem;
       object-fit: cover;
     }
   }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>

