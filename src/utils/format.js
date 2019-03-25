import dayjs from 'dayjs'
import toObject from 'dayjs/plugin/toObject'
dayjs.extend(toObject)
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)

// 格式化文章
export const formatPost = post => {
    let {
        body,
        created_at
    } = post
    // 格式化时间
    let time = dayjs(new Date(created_at)).format('MMMM,YYYY/MM/DD,A').split(',');
    let year = new Date(created_at).getFullYear()
    let month = new Date(created_at).getMonth() + 1
    // console.log("条件"+dayjs(time[1]).isBetween(`${year}/${month}`, `${year}/${month+1}`))
    // console.log('是否相等'+dayjs('2019-3').isSame('2019-3'))
    // 截取文章内容
    let str = body.split('\r\n').filter(item => item != "")
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
// var arr = ['11', '1', '1', '2', , '3', '4', '5', '5', '6', '6', '7', '8', '9', '9', '10'],
//     newArr = [],
//     n = 0;
// for (var i = 0; i < arr.length; i++) {
//     // debugger
//     if (arr[i] != arr[i + 1]) {
//         newArr.push(arr.slice(n, i + 1))
//         n = i + 1;
//     }
// }
// console.log(newArr)