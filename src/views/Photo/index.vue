<template>
  <div class="page row pt100">
    <h1 class="tl">相册</h1>
    <section class="photo-container">
      <ul class="photo-wrapper flex-wrap" v-if="photoArr.length">
        <li v-for="photo in photoArr" :key="photo.size" class="photo-item">
          <img v-lazy="photo.download_url" :alt="photo.name">
        </li>
      </ul>
      <partLoading v-else/>
    </section>
  </div>
</template>

<script>
import store from "@/store"
import partLoading from "@/components/partLoading"

export default {
  name: "Photo",
  data() {
    return {
      photoArr: []
    }
  },
  components: {
    partLoading
  },
  async created() {
    this.photoArr = await store.dispatch("queryPhoto")
  },
  mounted() {
    // console.log(this.$router)
  }
}
</script>

<style lang="scss" scoped>
.photo {
  &-wrapper {
    margin-top: 0.3rem;
  }
  &-item {
    margin: 4px;
    flex-grow: 1;
    img {
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

