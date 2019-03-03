import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import { queryPosts } from './api/request'
import { postFormat }  from './utils/format'
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
        setPosts(state,{ posts , page }){
            state.page = page
            state.posts = state.posts.concat(posts)
            state.hasMore = posts.length === state.pageSize
        }
    },
    actions: {
        // 请求文章列表 && 文章归档
        async queryPosts({ commit , state }){
            const { page, pageSize, hasMore } = state
            if(!hasMore) return
            let data = await queryPosts({
                page: page + 1,
                pageSize
            })
            data.forEach(postFormat)
            commit('setPosts', { posts: data, page: page + 1 }) 
        }
    }
})
