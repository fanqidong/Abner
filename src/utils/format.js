// 格式化文章
export const formatPost = post =>{
    let { body , created_at } = post
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
// 格式化心情
// export const formatPost = post =>{
//     let { body , created_at } = post
    
// }