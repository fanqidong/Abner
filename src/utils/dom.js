
export const on = (() =>{
    if (document.addEventListener) {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.addEventListener(event, handler, false)
        }
      }
    } else {
      return function(element, event, handler) {
        if (element && event && handler) {
          element.attachEvent('on' + event, handler)
        }
      }
    }
  })()
  
export const getWindowHeight = (()=> {
    window.addEventListener('scroll',function(){
        console.log(window.innerHeight)
    },false)
})()
