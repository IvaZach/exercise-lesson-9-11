const t=document.querySelector(".js-container");t.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;console.log(t.target.textContent)}));const e=document.querySelector(".js-add-btn");let n=6;e.addEventListener("click",(function(){const e=document.createElement("button");e.textContent=`Кнопка ${n}`,e.type="button",t.appendChild(e),n+=1}));
//# sourceMappingURL=task-06.b5b319c3.js.map