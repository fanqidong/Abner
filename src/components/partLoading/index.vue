<template>
    <div class="part-loading">
        <img src="../../assets/img/circle-loading.svg" alt="">
        <p>我拼命加载的样子像极了...</p>
    </div>
</template>

<script>
export default {
     name: 'partLoading'
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/animation.scss';
.part-loading{
    position: relative;
    color: #fff;
    z-index: 999;
    img{
        width: 1rem;
        margin: 20px auto 0;
        // animation: ld-bounce 1s infinite;
    }
}
</style>
