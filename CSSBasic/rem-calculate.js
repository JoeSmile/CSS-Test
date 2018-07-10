
//我们处理适配的方案就是通过写一个rem.js，原理很简单，就是根据网页尺寸计算html的font-size大小
;(function(c,d){
    var e=document.documentElement||document.body,
    a="orientationchange" in window ? "orientationchange":"resize",
    b=function(){
        var f=e.clientWidth;
        e.style.fontSize=(f>=750) ? "100px":100*(f/750)+"px"};
    b();
    c.addEventListener(a,b,false)})(window);
