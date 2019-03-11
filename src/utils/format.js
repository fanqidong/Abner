// 格式化文章
export const formatPost = post =>{
    let { body , created_at } = post
    console.log(post)
    let str = body.split('\r\n').filter(item=>item!="")
    let reg = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/g
    let info = reg.exec(str[0])
    post.cover = {
        text: info[1],
        src: info[2]
    }
    post.desc = str[1]
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