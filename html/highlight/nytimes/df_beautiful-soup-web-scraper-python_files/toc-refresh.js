(()=>{"use strict";var e;e=()=>{const e=new Map,t=[];for(let e=0;e<=100;e++)t.push(e/100);const o=new IntersectionObserver((t=>{for(const o of t){const t=o.boundingClientRect;if(t.bottom>=0&&t.top<=window.innerHeight){const n=t.top>0?window.innerHeight-t.top:t.bottom;e.set(o.target,n)}else e.set(o.target,0)}(()=>{let t=0,o=null;if(e.forEach(((e,n)=>{e>t&&(t=e,o=n)})),document.querySelectorAll("#sidebar-toc li").forEach((e=>e.classList.remove("active"))),o){const e=o.getAttribute("id");document.querySelector(`#sidebar-toc li a[href="#${e}"]`).parentElement.classList.add("active"),((e,t)=>{const o=e.getBoundingClientRect(),n=t.getBoundingClientRect();n.top>=o.top&&n.top<=o.top+e.clientHeight||(e.scrollTop=n.top+e.scrollTop-o.top-4)})(document.querySelector("#sidebar-toc"),document.querySelector(`#sidebar-toc li a[href="#${e}"]`))}})()}),{threshold:t});document.querySelectorAll(".article-body section.section2").forEach((e=>{o.observe(e)}))},"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e)})();