!function(){"use strict";var e=function(){const e=document.querySelector(".header .btn--nav"),t=document.querySelector(".menu .btn--nav"),n=document.querySelector("body"),o=document.querySelector(".menu"),l=document.querySelector(".menu .overlay"),s=document.querySelectorAll(".menu .menu--link"),c=getComputedStyle(n);function i(t){t.addEventListener("click",(()=>{(function(){const t=function(){const e=document.createElement("p");e.style.width="100%",e.style.height="200px";const t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var o=e.offsetWidth;return n==o&&(o=t.clientWidth),document.body.removeChild(t),n-o}();c.paddingRight===`${t}px`?(n.style.paddingRight="0px",n.style.overflow="auto",e.style.right="30px"):(n.style.paddingRight=`${t}px`,n.style.overflow="hidden",e.style.right=`${30+t}px`)})(),n.classList.toggle("no-scroll"),o.classList.toggle("menu-active")}))}i(e),i(t),i(l),s.forEach(((e,t)=>{i(e)}))};document.addEventListener("DOMContentLoaded",(function(){e(),function(){const e=document.querySelector("form"),t=document.querySelector(".form--info");e.addEventListener("submit",(e=>{e.preventDefault();const n=new FormData(this);fetch("https://webdev-konstantin.ru/",{method:"post",headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},body:n}).then((e=>e.json())).then((e=>{101===e.id&&(t.innerHTML='<span class="green">Ваше сообщение отправлено, свяжусь с вами в ближайшее время!</span>',t.style.opacity="1",setTimeout((()=>{t.style.opacity="0"}),5e3)),console.log(e)})).catch((e=>{console.log(e),t.innerHTML='<span class="red">Ваше сообщение не доставлено, заполните обязательные поля формы!</span>',t.style.opacity="1",setTimeout((()=>{t.style.opacity="0"}),5e3)}))}))}(),document.querySelector("form .btn-main").submit(),console.log("Привет, если ты разработчик и тебе бы хотелось со мной поработать, на сайте есть ссылочки на контакты со мной. Пиши не стесняйся.")}))}();