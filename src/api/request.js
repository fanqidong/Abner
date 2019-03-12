import axios from 'axios'
import gobalConfig from '../config/global.config'
import AV from 'leancloud-storage'

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
// 获取当前文章
export const queryPost = async number => {
    try {
        const url = `${blog}/issues/${number}?${open}`
        const res = await fetch(url)
        checkStatus(res)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
// 获取分类
export const queryCategory = async () => {
    try {
        const url = `${blog}/milestones?${access_token}`
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
//  获取文章热度
export const queryHot = async postList => {
    return new Promise(resolve => {
        const seq = postList.map(item =>{
            return new Promise( resolve =>{
                const query = new AV.Query('Counter')
                const Counter = AV.Object.extend('Counter')
                const { title, id } = item
                query.equalTo('id', id)
                query.find().then(res =>{
                    if (res.length > 0) {
                        //已存在数据直接返回
                        const counter = res[0]
                        item.times = counter.get('time')
                        resolve(item)
                    }else{
                        // 不存在则新建
                        const newCounter = new Counter()
                        newCounter.set('title', title)
                        newCounter.set('id', id)
                        newCounter.set('time', 1)
                        newCounter.set('sitelink', location.href)
                        newCounter.save().then(() =>
                            resolve(item)
                         ).catch(error=>{
                            console.log(error)
                        })
                    }
                }).catch(error=>{
                    console.log(error)
                })
            }).catch(error=>{
                console.log(error)
            })
        })
        Promise.all(seq).then( data => resolve(data)).catch(error=>{
            console.log(error)
        })
    }).catch(error=>{
        console.log(error)
    })
}