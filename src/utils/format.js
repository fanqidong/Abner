export const postFormat = post =>{
    let { body , created_at } = post
    let str = body.split('\r\n')
    let reg = /^\[(.+)\].*(http.*(?:jpg|jpeg|png|gif))/g
    let info = reg.exec(str[0])
    post.cover = {
        img: info[1],
        text: info[2]
    }
    post.desc = str[4]
    return post
}