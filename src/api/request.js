import axios from 'axios'
import gobalConfig from '../config/global.config'

const {
    blog,
    token,
    creator
} = gobalConfig
const access_token = `access_token=${token.join('')}`
const open = `creator=${creator}&state=open&${access_token}`
const closed = `creator=${creator}&state=closed&${access_token}`

// 状态码检测
const checkStatus = res => {
    if (res.status >= 200 && res.status < 300) return res
    const error = new Error(res.statusText)
    error.res = res
    throw error
}
// 获取文章列表
export const queryPosts = async ({
    page = 1,
    pageSize = 5,
    filter = ''
}) => {
    try {
        const url = `${blog}/issues?${open}&page=${page}&per_page=${pageSize}${filter}`
        const res = await fetch(url)
        checkStatus(res)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
// 获取标签
export const queryLabel = async () => {
    try {
        const url = `${blog}/labels?${access_token}`
        const response = await fetch(url)
        checkStatus(response)
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }
}
// 获取心情
export const queryMood = async ({
    page = 1,
    pageSize = 10
}) => {
    try {
        const url = `${blog}/issues?${closed}&labels=mood&&page=${page}&per_page=${pageSize}`
        const res = await fetch(url);
        checkStatus(res)
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}