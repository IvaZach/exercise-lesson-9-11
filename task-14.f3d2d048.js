const e=document.querySelector(".js-start"),t=document.querySelector(".js-container");e.addEventListener("click",(function(){let e=0;[...t.children].forEach((e=>e.textContent=""));const n=[...t.children].map(((e,t)=>new Promise(((e,t)=>{Math.random()>.5?e("🤑"):t("😈")}))));Promise.allSettled(n).then((n=>{console.log(n),n.forEach(((n,o)=>{setTimeout((()=>{"fulfilled"===n.status&&(e+=1),console.log(n),t.children[o].textContent=n.value||n.reason,t.children.length-1===o&&setTimeout((()=>{e!==t.children.length&&e?alert("Lost money"):alert("Winner")}),500)}),1e3*o)}))}))}));
//# sourceMappingURL=task-14.f3d2d048.js.map
