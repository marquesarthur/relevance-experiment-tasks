!function n(o,i,u){function c(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return c(o[t][1][e]||e)},r,r.exports,n,o,i,u)}return i[t].exports}for(var d="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,r){const n=document.querySelector(".social-share-buttons");n.addEventListener("click",e=>{let t=e.target||e.srcElement;"a"!==t.tagName&&(t=t.parentNode),767<(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)&&e.preventDefault(),window.open(t.getAttribute("href"),"t","toolbar=0, resizeable=1, status=0, width=640, height=528")})},{}]},{},[1]);