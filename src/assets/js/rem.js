 //Rem
 (function (win, doc) {
     if (!win.addEventListener) return;
     var html = document.documentElement;

     function setFont() {
         var html = document.documentElement;
         var k = 750;
         var base = html / k;
         html.style.fontSize = base + "px";
         //  html.style.fontSize = base <= 100 ? base + "px" : "100px";
     }
     setFont();
     setTimeout(function () {
         setFont();
     }, 300);
     doc.addEventListener('DOMContentLoaded', setFont, false);
     win.addEventListener('resize', setFont, false);
     win.addEventListener('load', setFont, false);
 })(window, document);