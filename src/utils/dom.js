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
            document.title = "(￣︶￣),你真的忍心离开吗~"
        } else {
            document.title = "♪(･ω･)ﾉ感谢你的陪伴"
            clearTimeout(timer)
            timer = setTimeout(function () {
                document.title = OriginTitile
            }, 3000)
        }
    })
}

