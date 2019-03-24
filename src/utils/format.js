import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
import toObject from 'dayjs/plugin/toObject'
dayjs.extend(toObject)

// 格式化文章
export const formatPost = post =>{
    let { body , created_at } = post
    // 格式化时间
    let time = dayjs(new Date(created_at)).format('MMMM,YYYY/MM/DD,A').split(',');
    let day = dayjs(new Date(created_at))
    console.log(day)
    // 截取文章内容
    let str = body.split('\r\n').filter(item=>item!="")
    // 截取封面图信息
    let reg = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/g
    let info = reg.exec(str[0])

    post.timeinfo = {
        month: time[0],
        date: time[1],
        time:time[2] == 'AM' ? '上午': '下午'
    }
    post.cover = {
        text: info[1],
        src: info[2]
    }
    
    post.desc = str[1]
    // console.log(post)
    return post
}
// 格式化分类
export const formatCategory = category =>{
    category.forEach(item=>{
        let desc = item.description.split('\r\n')
        item.subject = desc[0].split(',')[0]
        item.cover = desc[0].split(',')[1]
    })
    return category
}