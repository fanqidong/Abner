<template>
  <div>3213</div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      pageSize: 10,
      moodList: []
    }
  },
  computed: {},
  async created() {
    await this.queryMood()
  },
  methods: {
    async queryMood() {
      const mood = this.$store.dispatch('queryMood', {
        page: 1,
        pageSize: this.pageSize
      })
      console.log(mood)
    }
  }
}
</script>

<style>
</style>
