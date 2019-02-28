import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import { queryPosts } from './api/request'
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
        setPosts(state,{ posts , page }){
            state.page = page
            state.posts = state.posts.concat(posts)
            // state.hasMore = posts.length === state.pageSize
        }
    },
    actions: {
        async queryPosts({ commit , state }){
            const { page, pageSize, hasMore } = state
            if(!hasMore) return
            let data = await queryPosts({
                page: page + 1,
                pageSize
            })
            commit('setPosts', { posts: data, page: page + 1 }) 
        }
    }
})
