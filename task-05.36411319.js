"loading"in HTMLImageElement.prototype?(console.log("Браузер поддерживает lazyload"),document.querySelectorAll('img[loading="lazy"]').forEach((o=>{o.src=o.dataset.src}))):(console.log("Браузер НЕ поддерживает lazyload"),function(){const o=document.createElement("script");o.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",o.integrity="sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==",o.crossOrigin="anonymous",document.body.appendChild(o)}());function o(o){console.log("Картинка загрузилась"),o.target.classList.add("appear")}document.querySelectorAll("img[data-src]").forEach((e=>{e.addEventListener("load",o,{once:!0})}));
//# sourceMappingURL=task-05.36411319.js.map
