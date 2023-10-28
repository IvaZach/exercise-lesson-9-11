const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);

function onStart() {
    let counter = 0;
  
    [...container.children].forEach((box) => (box.textContent = ""));
  
    const promises = [...container.children].map(( _, i) => createPromise(i));
  
    Promise.allSettled(promises).then((items) => {
      console.log(items);
      items.forEach((item, i) => {
        setTimeout(() => {
          if (item.status === "fulfilled") {
            counter += 1;
          }
          console.log(item);
          container.children[i].textContent = item.value || item.reason;
  
          if (container.children.length - 1 === i) {
            setTimeout(() => {
              if (counter === container.children.length || !counter) {
                alert("Winner");
              } else {
                alert("Lost money");
              }
            }, 500);
          }
        }, i * 1000);
      });
    });
  }
  
  function createPromise() {
    return new Promise((res, rej) => {
      const random = Math.random();
      if (random > 0.5) {
        res("🤑");
      } else {
        rej("😈");
      }
    });
  }