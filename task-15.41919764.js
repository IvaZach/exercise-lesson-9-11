const e=document.querySelector(".js-search"),t=document.querySelector(".js-list");e.addEventListener("submit",(function(e){e.preventDefault();const{query:n,days:a}=e.currentTarget.elements;(function(e,t){const n="http://api.weatherapi.com/v1",a=new URLSearchParams({key:"4db023447be443a5a4d80417232710",q:e,days:t,lang:"en"});return fetch(`${n}/forecast.json?${a}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))})(n.value,a.value).then((e=>t.innerHTML=e.forecast.forecastday.map((({date:e,day:{avgtemp_c:t,condition:{text:n,icon:a}}})=>`<li>\n    <img src="${a}" alt="${n}">\n    <p>${n}</p>\n    <h2>${e}</h2>\n    <h3>${t}</h3>\n</li>`)).join(""))).catch((e=>console.log(e)))}));
//# sourceMappingURL=task-15.41919764.js.map