export const addEvent = (handle, fn, type) => {
  window.addEventListener(handle, fn, type || false)
}
export const removeEvent = (handle, fn, type) => {
  window.removeEventListener(handle, fn, type || false)
}

export const requestAni= (() => {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
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
    script.onload = script.onreadystatechange = function() {
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
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      document.title = "￣︶￣,你真的忍心离开吗~"
    } else {
      document.title = "啊哈♪(･ω･)ﾉ感谢你的陪伴"
      clearTimeout(timer)
      timer = setTimeout(function() {
        document.title = OriginTitile
      }, 3000)
    }
  })
}
