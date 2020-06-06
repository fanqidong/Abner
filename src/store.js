/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: Vue store
 * @Date: 2019-03-04 10:03:13
 * @LastEditTime: 2019-04-16 14:27:41
 */
// import Vue from "vue"
// import Vuex from "vuex"

// Vue.use(Vuex)
import { queryPosts, queryPost, queryHot, queryCategory, queryMood, queryLabel, queryType, queryLikeSite, queryPhoto } from '@/api/request'
import { formatPost, formatCategory, formatType } from '@/utils/format'
export default new Vuex.Store({
    state: {
        page: 0,
        pageSize: '',
        posts: [],
        hasMore: true,
        homeScrollTop: 0
    },
    mutations: {
        //  设置文章列表
        setPosts(state, { posts, page }) {
            state.page = page
            state.posts = state.posts.concat(posts)
            state.hasMore = posts.length === state.pageSize
        },
        // 记录滚动条高度
        recordScroll(state, { homeScrollTop }) {
            state.homeScrollTop = homeScrollTop
        }
    },
    actions: {
        // 获取文章列表
        async queryPosts({ commit, state }) {
            const { page, pageSize, hasMore } = state
            if (!hasMore) return
            let data = await queryPosts({
                page: page + 1,
                pageSize
            })
            data && data.forEach(formatPost)
            // data = await queryHot(data)
            commit('setPosts', {
                posts: data,
                page: page + 1
            })
        },
        // 获取文章归档
        async queryArchive(context, payLoad) {
            let data = await queryPosts(payLoad)
            data.forEach(formatPost)
            // data = await queryHot(data)
            return data
        },
        // 获取当前文章详情
        async queryPost({ state }, { number }) {
            let post = state.posts.find(item => item.number === number)
            // 如果存在文章数据则直接获取不发请求
            if (!post) {
                post = await queryPost(number)
                // let newPost = await queryHot([post], true)
                // post = formatPost(newPost[0])
            }
            return post
        },
        // 获取文章分类
        async queryCategory() {
            let data = await queryCategory()
            data = formatCategory(data)
            return data
        },
        // 获取每日一说
        async queryMood({ page, pageSize }) {
            const data = await queryMood({ page, pageSize })
            return data
        },
        // 获取文章标签
        async queryLabel() {
            let data = await queryLabel()
            data = data.filter(label => !['Mood', 'Friend', 'About'].includes(label.name))
            return data
        },
        // 获取友链 && 关于
        async queryType(context, { type }) {
            let data = await queryType(type)
            data = formatType(data, type)
            return data
        },
        // 获取网站点赞数
        async queryLikeSite(context, payLoad) {
            let data = await queryLikeSite(payLoad)
            return data
        },
        // 获取相册
        async queryPhoto() {
            let data = await queryPhoto()
            return data
        }
    }
})
