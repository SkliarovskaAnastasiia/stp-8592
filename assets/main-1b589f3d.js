import{S as h,N as k,P as w}from"./vendor-0d4ab8a2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();const p=document.querySelector(".header__mobile-menu"),o=document.querySelector(".mobile-menu__backdrop"),L=o.querySelector(".mobile-menu__close"),g=o.querySelectorAll("li a"),E="mobile-menu__backdrop--open",m="mobile-menu--close";let l,c,a,d;function S(){document.body.classList.add("no-scroll"),o.classList.add(E),o.setAttribute("aria-hidden","false"),p.setAttribute("aria-expanded","true"),l=function(){setTimeout(()=>u(),50)},g.forEach(e=>e.addEventListener("click",l)),c=function(e){e.key==="Escape"&&u()},document.addEventListener("keydown",c),a=function(e){e.target===o&&u()},o.addEventListener("click",a),d=function(){u()},L.addEventListener("click",d)}function u(){o.classList.add(m),setTimeout(()=>{o.classList.remove(E),o.classList.remove(m)},600),document.body.classList.remove("no-scroll"),o.setAttribute("aria-hidden","true"),p.setAttribute("aria-expanded","false"),l&&(g.forEach(e=>e.removeEventListener("click",l)),l=null),c&&(document.removeEventListener("keydown",c),c=null),a&&(o.removeEventListener("click",a),a=null),d&&(L.removeEventListener("click",d),d=null)}p.addEventListener("click",e=>{e.preventDefault(),S()});new h(".gallery-swiper",{centeredSlides:!0,speed:600,breakpoints:{320:{spaceBetween:12,slidesPerView:"auto"},1200:{slidesPerView:3}},initialSlide:1,keyboard:{enabled:!1,onlyInViewport:!1},mousewheel:{invert:!1},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},on:{slideChange(){y(this),v(this,!1)},init(){y(this),v(this,!0)}}});function y(e){document.querySelectorAll(".gallery-swiper-slide").forEach((n,r)=>{n.classList.toggle("active",r===e.realIndex)})}function v(e,n){const r=document.querySelector(".swiper-btn-next"),s=document.querySelector(".swiper-btn-prev");n&&(r.addEventListener("click",()=>{e.slideNext()}),s.addEventListener("click",()=>{e.slidePrev()})),s.disabled=e.isBeginning,r.disabled=e.isEnd}document.querySelectorAll(".fashion-beauty__video-play").forEach(e=>{e.addEventListener("click",()=>{const n=e.closest(".fashion-beauty__video"),r=n.querySelector(".fashion-beauty__video-thumb"),s=n.querySelector(".fashion-beauty__video-iframe");let t=s.getAttribute("src");t.includes("autoplay=1")||(t+="&autoplay=1"),s.setAttribute("src",t),r.style.display="none",e.style.display="none",s.style.display="block"})});new h(".reviews__swiper",{modules:[k,w],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,n){return'<span class="'+n+'"></span>'}}});const b=document.querySelector(".overlay"),_=document.querySelectorAll(".js-cookies-btn"),q=()=>{localStorage.getItem("cookies")||(setTimeout(()=>{b.classList.add("shown")},500),_.forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("shown"),localStorage.setItem("cookies","closed")})}))};window.addEventListener("load",q);
//# sourceMappingURL=main-1b589f3d.js.map
