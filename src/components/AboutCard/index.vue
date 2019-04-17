<template>
  <div class="about-card tl">
      <div class="about-label fw600 font18">
          {{label}}
      </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: ["color","label"]
}
</script>

<style lang="scss" scoped>

</style>

