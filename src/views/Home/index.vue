<template>
    <div class="home">
        <Bg :opacity="scrollRate" :bg-url="bgUrl" />
        <section class="home-wrapper row">
            <div class="site-recommend bfff tl">
                <p><i class="iconfont icon-recommend"></i>你好啊，欢迎访问我的博客！😘</p>
                <p>今天是{{ today.time }}——{{ today.week }}</p>
                <p>元气满满的一天哦！</p>
            </div>
            <section class="article">
                <div class="article-list" v-if="posts.length > 0">
                    <article
                        data-aos="fade-up"
                        data-aos-once="true"
                        v-for="(post, index) in posts"
                        :key="post.id"
                        class="article-wrapper clearfix"
                        :class="{ 'article-float': index % 2 != 0 }"
                        @click="goDetail(post.number)"
                    >
                        <div class="article-cover">
                            <a href="javascript:;" class="article-link">
                                <img v-lazy="articleBg" :alt="post.cover.text" />
                            </a>
                            <!-- 发表时间 -->
                            <div class="article-date flex-center flex-column absolute-full">
                                <span class="month font18">{{ post.timeinfo.month }}</span>
                                <span class="time">
                                    <i class="iconfont icon-calendar"></i>
                                    {{ post.timeinfo.date }}
                                </span>
                            </div>
                        </div>
                        <!-- 文章内容  Start -->
                        <div class="article-content flex-around flex-column">
                            <!-- 文章标题 -->
                            <div class="article-title font20 c000">{{ post.title }}</div>
                            <!-- 简介 -->
                            <span class="article-desc overflow3 c8a8">{{ post.desc }}</span>
                            <div class="article-info flex-between c666">
                                <!-- 热度 -->
                                <span>
                                    <i class="iconfont icon-hot"></i>
                                    <em>{{ post.times ? post.times : 1 }}°C</em>
                                </span>
                                <!-- 归档 -->
                                <span>
                                    <i class="iconfont icon-guidangxiangmu"></i>
                                    <em>{{ post.milestone.title }}</em>
                                </span>
                                <!-- 标签 -->
                                <span class="archive">
                                    <i class="iconfont icon-biaoqian"></i>
                                    <em v-for="label in post.labels.slice(0, 2)" :key="label.id">{{ label.name }}</em>
                                </span>
                            </div>
                        </div>
                        <!-- 文章内容 End -->
                    </article>
                    <button v-if="hasMore"  class="btn btn-next" @click="handleNext">下一页</button>
                    <div v-else class="line">我是有底线的</div>
                </div>
                <partLoading v-else />
            </section>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import { mapState } from 'vuex'
import Aos from 'aos'
import { getScrollTop, addEvent } from '@/utils/dom'
import MarkDown from '@/components/Markdown'
import partLoading from '@/components/partLoading'
import Bg from '@/components/Background'
import dayjs from 'dayjs'
import articleBg from '../../assets/img/bg10.jpg'
export default {
    name: 'Home',
    components: {
        MarkDown,
        Bg,
        partLoading
    },
    data() {
        return {
            articleBg,
            scrollRate: '',
            bgUrl: 'https://s3-view.2heng.xin/aws_cached/2019/04/21/028c53459be4467ca73f10adce5c375f_th.jpg',
            toWeek: {
                Monday: '星期一',
                Tuesday: '星期二',
                Wednesday: '星期三',
                Thursday: '星期四',
                Friday: '星期五',
                Saturday: '星期六',
                Sunday: '星期日'
            }
        }
    },
    computed: {
        ...mapState(['posts', 'hasMore', 'homeScrollTop','page']),
        today() {
            let time = dayjs(new Date()).format('YYYY年MM月DD日')
            let week = this.toWeek[dayjs(new Date()).format('dddd')]
            return {
                time,
                week
            }
        }
    },
    methods: {
        async handleNext() {
            await store.dispatch('queryPosts', {
                page: this.page + 1,
                pageSize: '10',
                filter: ''
            })
        },
        //  获取文章列表
        async getPosts() {
            await store.dispatch('queryPosts', {
                page: 1,
                pageSize: 10,
                filter: ''
            })
        },
        // 前往文章详情页

        goDetail(number) {
            this.$router.push({ name: 'ArticleDetail', params: { number } })
        },
        // 滚动比率
        handleRate() {
            addEvent('scroll', () => {
                let rate = (getScrollTop() * 1.5) / window.innerHeight
                this.scrollRate = 1 - rate < 0 ? 0 : 1 - rate
            })
        }
    },
    // 路由进入判断是详情页返回首页还是直接返回首页
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (from.name == 'ArticleDetail' && vm.$route.params.type == 'ArticleDetail') {
                window.scrollTo(0, vm.homeScrollTop)
            } else {
                window.scrollTo(0, 0)
            }
        })
    },
    //在页面离开时记录滚动位置
    beforeRouteLeave(to, from, next) {
        this.scrollTop = getScrollTop()
        store.commit('recordScroll', { homeScrollTop: this.scrollTop })
        next()
    },
    created() {
        if (!this.posts.length) {
            this.getPosts()
        }
        Aos.init({
            duration: 1000,
            easing: 'ease-out',
            debounceDelay: 200,
            offset: 20
        }),
            setTimeout(Aos.refresh, 600)
    },
    mounted() {
        this.handleRate()
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
