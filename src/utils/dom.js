export const addEvent = (handle, fn, type) => {
    window.addEventListener(handle, fn, type || false)
}
export const removeEvent = (handle, fn, type) => {
    window.removeEventListener(handle, fn, type || false)
}

// 页面标题
let timer = null
let OriginTitile =  document.title
export const setTitle = () => {
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "(￣︶￣),我藏好了哦~"
        } else {
            document.title = "(*´∇｀*) 被你发现啦~ "
            clearTimeout(timer)
            timer = setTimeout(function () {
                document.title = OriginTitile
            }, 3000)
        }
    })
}

