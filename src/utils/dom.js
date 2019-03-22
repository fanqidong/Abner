export const on = (() => {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const scrollTop = (() => {
  return  on(window,'scroll',function(){
     return  console.log(1)
      // return 
    })
})()