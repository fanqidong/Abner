/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: Vue store
 * @Date: 2019-03-04 10:03:13
 * @LastEditTime: 2019-03-12 13:54:06
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import {
    queryPosts,
    queryPost,
    queryHot,
    queryCategory,
    queryMood,
    queryLabel
} from './api/request'
import {
    formatPost,
    formatCategory
} from './utils/format'
export default new Vuex.Store({
    state: {
        tips: '',
        tipsUpdateAt: '',
        page: 0,
        pageSize: 10,
        posts: [],
        hasMore: true
    },
    mutations: {
        //  设置文章列表
        setPosts(state, {
            posts,
            page
        }) {
            state.page = page
            state.posts = state.posts.concat(posts)
            state.hasMore = posts.length === state.pageSize
        }
    },
    actions: {
        // 获取文章列表 && 文章归档
        async queryPosts({commit, state}, {type}) {
            const { page, pageSize, hasMore } = state
            if (type === 'archive') {
                let res =  await queryPosts({
                    page: 1,
                    pageSize: 1
                })
                return res
            }else{
                if (!hasMore) return
                let data = await queryPosts({
                    page: page + 1,
                    pageSize
                })
                data.forEach(formatPost)
                data = await queryHot(data)
                commit('setPosts', {
                    posts: data,
                    page: page + 1
                })
            }
        },
        // 获取当前文章详情
        async queryPost({ state },{ number }) {
            let post = state.posts.find(item=> item.number === number)
            if (!post) {
              post = await queryPost(number)
              console.log(post)
            }
            return post
        },
        // 获取文章分类
        async queryCategory(){
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
        }
    }
})