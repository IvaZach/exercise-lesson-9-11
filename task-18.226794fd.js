const t=document.querySelector(".js-search"),e=document.querySelector(".js-add"),n=document.querySelector(".js-list"),r=document.querySelector(".js-form-container");e.addEventListener("click",(function(){r.insertAdjacentHTML("beforeend",'<input type="text" name="country">')})),t.addEventListener("submit",(function(e){e.preventDefault();const a=new FormData(e.currentTarget);(async function(t){const e=t.map((async t=>{const e=await fetch(`https://restcountries.com/v3.1/name/${t}`);if(!e.ok)throw new Error;return e.json()})),n=await Promise.allSettled(e);return n.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t[0]))})(a.getAll("country").filter((t=>t)).map((t=>t.trim()))).then((async t=>{const e=t.map((({capital:t})=>t[0])),r=await async function(t){const e="http://api.weatherapi.com/v1",n="ce2cb9b2a3da414bb5b172546231704",r=t.map((async t=>{const r=new URLSearchParams({key:n,q:t,lang:"uk"}),a=await fetch(`${e}/current.json?${r}`);if(!a.ok)throw new Error(a.statusText);return a.json()})),a=await Promise.allSettled(r);return a.filter((({status:t})=>"fulfilled"===t)).map((({value:t})=>t))}(e);n.innerHTML=function(t){return t.map((({current:{temp_c:t,condition:{text:e,icon:n}},location:{country:r,name:a}})=>`<li>\n    <div>\n        <h2>${r}</h2>\n        <h3>${a}</h3>\n    </div>\n    <img src="${n}" alt="${e}">\n    <p>${e}</p>\n    <p>${t}</p>\n</li>`)).join("")}(r)})).catch((t=>console.log(t))).finally((()=>{r.innerHTML='<input type="text" name="country">',t.reset()}))}));
//# sourceMappingURL=task-18.226794fd.js.map
