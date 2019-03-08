/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: Vue store
 * @Date: 2019-03-04 10:03:13
 * @LastEditTime: 2019-03-08 11:36:10
 */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import {
    queryPosts,
    queryMood,
    queryLabel
} from './api/request'
import {
    formatPost
} from './utils/format'
export default new Vuex.Store({
    state: {
        tips: '',
        tipsUpdateAt: '',
        page: 0,
        pageSize: 5,
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
        async queryPosts({
            commit,
            state
        }) {
            const {
                page,
                pageSize,
                hasMore
            } = state
            if (!hasMore) return
            let data = await queryPosts({
                page: page + 1,
                pageSize
            })
            data.forEach(formatPost)
            commit('setPosts', {
                posts: data,
                page: page + 1
            })
        },
        // 获取每日一说
        async queryMood({
            page,
            pageSize
        }) {
            const data = await queryMood({
                page,
                pageSize
            })
            console.log(data)
            return data
        },
        // 获取文章标签
        async queryLabel(){
            let data = await queryLabel()
            data = data.filter(label =>  !['Mood','Friend','About'].includes(label.name))
              return data
        }
    }
})