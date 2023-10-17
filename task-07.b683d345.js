!function(){var t=document.querySelector(".js-tags"),e=new Set;t.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;var a=t.target,n=a.dataset.value;a.classList.contains("tags__btn--active")?e.delete(n):e.add(n);a.classList.toggle("tags__btn--active"),console.log(e)}))}();
//# sourceMappingURL=task-07.b683d345.js.map
