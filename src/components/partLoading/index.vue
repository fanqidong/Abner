<template>
    <div class="loading c666">
        <img src="../../assets/img/circle-loading.svg" alt="">
        <p>玩命加载中...</p>
    </div>
</template>

<script>
export default {
     name: 'partLoading'
}
</script>

<style lang="scss" scoped>
.loading{
    position: relative;
    z-index: 999;
    img{
        width: 1rem;
        margin: 50px auto 0;
    }
}
</style>
