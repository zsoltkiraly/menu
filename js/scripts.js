var menu=function(){function a(a){for(var b=0,c=a.length;c>b;b++){var d=a[b],e=d.parentElement,f=e.querySelector("span");f.innerHTML+='<i class="icon-arrow" aria-hidden="true"></i>'}}function b(a,b,c){for(var d=0,e=b.length;e>d;d++){var f=b[d];window.matchMedia("(max-width: 992px)").matches?(f.classList.add("hide"),f.classList.contains("hide")&&f.classList.contains("show")&&f.classList.remove("hide")):(c.setAttribute("class",""),f.setAttribute("class",""),a.classList.remove("active"),document.body.style.overflow="",document.documentElement.style.overflow="",f.parentElement.classList.contains("active")&&f.parentElement.classList.remove("active"))}}function c(a){for(var b=0,c=a.length,d=[];c>b;b++){var e=a[b],f=e.parentElement,g=f.querySelector("span"),h=g.querySelector("i");d.push(e),h.addEventListener("click",function(){for(var a=0,b=d.length;b>a;a++){var c=d[a],e=c.parentElement,f=e.querySelector("span"),g=e.querySelector("ul"),h=f.querySelector("i"),i=this,j=i.parentElement,k=j.parentElement;k.querySelector("ul");window.matchMedia("(max-width: 992px)").matches&&(i==h&&g.classList.contains("hide")?(g.classList.add("show"),g.classList.remove("hide"),h.parentElement.parentElement.classList.add("active")):(g.classList.add("hide"),g.classList.remove("show"),h.parentElement.parentElement.classList.remove("active")))}},!1)}}function d(a){for(var b=0,c=a.length;c>b;b++){var d=a[b],e=d.offsetHeight;window.matchMedia("(max-width: 992px)").matches?e>0&&d.setAttribute("style","margin-top:-"+e+"px"):d.removeAttribute("style")}}function e(a,b,c){a.addEventListener("click",function(){b.classList.contains("hide")?(b.classList.remove("hide"),b.classList.add("show"),c.classList.add("show"),a.classList.add("active"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(b.classList.remove("show"),b.classList.add("hide"),c.classList.remove("show"),a.classList.remove("active"),document.body.style.overflow="",document.documentElement.style.overflow="")},!1)}function f(){var a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return a}function g(a){var b=f()-a.offsetHeight;return b}function h(a,b){window.matchMedia("(max-width: 992px)").matches?(a.style.height=g(b)+"px",a.style.top=b.offsetHeight-1+"px",a.nextElementSibling.style.marginTop=b.offsetHeight+50+"px"):(a.nextElementSibling.style.marginTop="",a.removeAttribute("style"),a.classList.remove("show"),a.classList.add("hide"))}function i(a,b,c){function d(){b.classList.remove("show"),b.classList.add("hide"),c.classList.remove("show"),a.classList.remove("active"),document.body.style.overflow="",document.documentElement.style.overflow=""}window.addEventListener("click",function(a){a.target==c&&d()},!1),c.addEventListener("touchstart",function(a){d()},!1)}function j(a,b,c){startx=0,dist=0,gap=30,max=40,b&&(b.addEventListener("touchstart",function(a){var b=a.changedTouches[0];startx=parseInt(b.clientX)},!1),b.addEventListener("touchmove",function(a){var c=a.changedTouches[0],d=parseInt(c.clientX)-startx;b.classList.contains("show")&&d<-max&&(b.style.left=d+"px")},!1),b.addEventListener("touchend",function(d){var e=d.changedTouches[0],f=parseInt(e.clientX)-startx;b.classList.contains("show")&&-100>f?(b.style.left="-"+b.offsetWidth+"px",b.classList.remove("show"),b.classList.add("hide"),b.style.left="",c.classList.remove("show"),document.body.style.overflow="",document.documentElement.style.overflow="",a.classList.remove("active")):b.style.left=""},!1),window.addEventListener("touchstart",function(a){var b=a.changedTouches[0];startx=parseInt(b.clientX)},!1),window.addEventListener("touchmove",function(a){var c=a.changedTouches[0],d=parseInt(c.clientX)-startx;b.classList.contains("hide")&&d>20&&startx<gap&&d<=b.offsetWidth&&(b.style.left=-1*b.offsetWidth+d+"px",b.style.WebkitTransition="all 0s",b.style.transition="all 0s")},!1),window.addEventListener("touchend",function(d){var e=d.changedTouches[0],f=parseInt(e.clientX)-startx;b.classList.contains("hide")&&f>max&&startx<gap?(b.style.left="-"+b.offsetWidth+"px",b.style.WebkitTransition="",b.style.transition="",b.classList.add("show"),b.classList.remove("hide"),b.style.left="",c.classList.add("show"),a.classList.add("active"),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(b.style.left="",b.style.WebkitTransition="",b.style.transition="")},!1))}function k(){var a=document.createElement("div");a.setAttribute("id","overlay"),document.body.insertBefore(a,document.body.firstChild)}function l(){k();var f=document.querySelector("header i.bars"),g=(document.querySelector("#main"),document.querySelector("menu#menu")),l=document.querySelector("header"),m=document.querySelectorAll("menu nav.nav ul li ul"),n=document.querySelector("#overlay");i(f,g,n),e(f,g,n),a(m),c(m),h(g,l),b(f,m,n),d(m),j(f,g,n),window.addEventListener("resize",function(){h(g,l),b(f,m,n),d(m)})}return{app:l}}();window.addEventListener("load",function(){menu.app()},!1);