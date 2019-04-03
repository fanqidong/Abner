import dayjs from 'dayjs'

// 格式化文章
export const formatPost = post => {
    let {
        body,
        created_at
    } = post
    // 格式化时间
    let time = dayjs(new Date(created_at)).format('MMMM,YYYY/MM/DD,A').split(',');
    let year = dayjs(created_at).year()
    let month = dayjs(created_at).month()
    // 截取文章内容
    let str = body.split('\r\n').filter(item => item)
    // 截取封面图信息
    let reg = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/g
    let info = reg.exec(str[0])

    post.timeinfo = {
        month: time[0],
        date: time[1],
        time: time[2] == 'AM' ? '上午' : '下午'
    }
    post.cover = {
        text: info[1],
        src: info[2]
    }

    post.desc = str[1]
    return post
}
// 格式化分类
export const formatCategory = category => {
    category.forEach(item => {
        let desc = item.description.split('\r\n')
        item.subject = desc[0].split(',')[0]
        item.cover = desc[0].split(',')[1]
    })
    return category
}                    
//  格式化友链 && 关于
export const formatType = (data, type)=> {
    if(!data.body) return
    let res = data.body.split('##').filter(item => item)
    switch (type) {
        case 'Friend':
            res = res.map(item => {
                const content = item.split('\r\n').filter(item => item)
                    return {
                        name: content[0],
                        link: content[1].split('link:')[1],
                        avatar: content[2].split('avatar:')[1],
                        siteImage: content[3].split('siteImage:')[1],
                        introduction: content[4].split('introduction:')[1],
                    }
                })
            break;
                
        default:
            break;
    }
    return res
}