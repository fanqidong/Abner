export const addEvent = (handle, fn, type) => {
    window.addEventListener(handle, fn, type || false)
}
export const removeEvent = (handle, fn, type) => {
    window.removeEventListener(handle, fn, type || false)
}

export const getScrollTop = () => {
    return document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
}

export const $ = (ele) => {
    return document.querySelector(ele)
}
/**
 *
 *
 * @param {Function} fn 回调
 * @param {String} wait 时间
 * @param {Boolean} immediate 是否立即执行
 */
export const debounce = (fn, wait, immediate = false) => {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
        // 是否立即执行一次任务
        if (immediate) {
            immediate = false
            fn.apply(this, args)
        }
    }
}

/**
 *
 *
 * @param {String} url 图片url
 * @param {Function} callback
 */
export const imgLoaded = (url, callback) => {
    const img = new Image()
    img.onload = () => {
        // console.log("图片加载完成")
        callback && callback()
    }
    img.src = url
}

/**
 * @param {Number} [number=0] 滚动位置数值
 * @param {Number} time 滚动时间
 * @returns
 */
export const Scroll = (number = 0, time) => {
    if (!time) {
        document.body.scrollTop = document.documentElement.scrollTop = number
        return number
    }
    const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
    let spacingInex = time / spacingTime // 计算循环的次数
    let nowTop = document.body.scrollTop || document.documentElement.scrollTop // 获取当前滚动条位置
    let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
    let scrollTimer = setInterval(() => {
        if (spacingInex > 0) {
            spacingInex--
            Scroll((nowTop += everTop))
        } else {
            clearInterval(scrollTimer) // 清除计时器
        }
    }, spacingTime)
}

export const requestAni = (() => {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        }
    )
})()

/**
 *
 * 动态加载CSS
 * @param {String} url
 * @param {Function} callback
 */
export const loadCss = (url, callback) => {
    let head = document.querySelector("head")[0]
    let link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = url
}

/**
 *
 * 动态加载Script
 * @param {String} url
 * @param {Function} callback
 */
export const loadScript = (url, callback) => {
    let head = document.querySelector("head")[0]
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    if (typeof callback == "function") {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback()
                script.onload = script.onreadystatechange = null
            }
        }
    }
    head.appendChild(script)
}

// 页面标题
let timer = null
let OriginTitile = document.title
export const setTitle = () => {
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "￣︶￣,你真的忍心离开吗~"
        } else {
            document.title = "啊哈♪(･ω･)ﾉ感谢你的陪伴"
            clearTimeout(timer)
            timer = setTimeout(function () {
                document.title = OriginTitile
            }, 3000)
        }
    })
}