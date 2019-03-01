<template>
    <div class="article-list" >
        <article  v-for="(item,index) in 6" :key="index"  class="article-wrapper acticle clearfix" :class="{'article-float':index%2!=0}">
            <div class="article-cover">
                <a href="javascript:;" class="article-link">
                    <img src="../../assets/img/bg.jpg" alt="">
                </a>
            </div>
            <div class="article-content">
                <div class="article-date">
                    发布于5天前
                </div>
                <h2 class="article-title">修复 WordPress 5.1 评论回复按键失效问题</h2>
                <div class="article-desc">
                    今天早上闲着无聊点了一下今天早上闲着无聊点了一下今天早上闲着无聊点了一下 WordPress 更新按键，从 5.0.3 更新到了 5.1，没想到出现了评论回复按键失效的问题，瞬间懵逼，因为电脑不方便联网
                </div>
                <div class="article-info">
                    <span>
                        <i class="iconfont icon-shouye"></i>
                        <em>1天前</em>
                    </span>
                    <span>
                        <i class="iconfont icon-shouye"></i>
                        <em>热度：1°C</em>
                    </span>
                    <span>
                        <i class="iconfont icon-shouye"></i>
                        <em>前端圈</em>
                    </span>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name:'Article'
}
</script>

<style lang="scss" scoped>
.article{
    &:hover{
        top: .05rem;
    }
    &-wrapper{
        position: relative;
        width: 100%;
        height: 3rem;
        margin: .2rem 0;
        border-radius: 5px;
    }
    &-link{
        position: relative;
        display: block;
        height: 100%;
        overflow: hidden;
        border-radius: 5px 0  0  5px;
        &:hover img{
            transform: scale(1.1) rotate(-3deg);
        }
        img{
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.5s cubic-bezier(0.6, 0.4, 0.7, 1) ;
        }
    }
    &-cover{
       float: left;
       width: 50%;
       height: 100%;
    }
    &-content{  
       float: right;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
       width: 50%;
       height: 100%;
       padding: .15rem;
       background: rgba($color: #fff, $alpha: .6);
       border-radius: 0 5px 5px 0;
    }
    &-desc{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-height: 1.5;
        text-align: justify;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    &-date{
        text-align: center;
    }
    &-info{
        display: flex;
        justify-content: space-around;
        span{
            display: flex;
            align-items: center;
        }
        i{
            display: inline-block;
            margin-right: .04rem;
        }
    }
}
.article-float .article-content{
    float: left;
}
.article-float .article-cover{
    float: right;
}
@media screen and (max-width: 750px){
    .article-wrapper .article-content,
    .article-wrapper .article-cover
    {
       width: 100%;
    }
}
</style>

