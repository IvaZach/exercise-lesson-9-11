!function(){var o;function e(o){console.log("Картинка загрузилась"),o.target.classList.add("appear")}"loading"in HTMLImageElement.prototype?(console.log("Браузер поддерживает lazyload"),document.querySelectorAll('img[loading="lazy"]').forEach((function(o){o.src=o.dataset.src}))):(console.log("Браузер НЕ поддерживает lazyload"),(o=document.createElement("script")).src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",o.integrity="sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==",o.crossOrigin="anonymous",document.body.appendChild(o)),document.querySelectorAll("img[data-src]").forEach((function(o){o.addEventListener("load",e,{once:!0})}))}();
//# sourceMappingURL=task-05.4078f442.js.map
