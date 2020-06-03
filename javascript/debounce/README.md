# Debounce

Debouncing in javascript is used to improve the browser performance. There might be some functionality in web page that requires time-consuming computations, an example is a search engine that sends request on every keydown. Deboucing is a programming practice used to ensure that time-consuming tasks do not fire so often, that is stalls the perfoemance of the web page. In other words, it limits the rate at which a function gets invoked
Simple example:

```javascript
const myInput = document.querySelector("input");
const mySpan = document.querySelector("span");

let counter = 0;
let timer = null;

myInput.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    mySpan.innerText = `Number of events ${counter++}`;
  }, 500);
});
```

Creating a debounce function:

```javascript
function debounce(func, wait) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
}

myInput.addEventListener(
  "input",
  debounce(function () {
    mySpan.innerText = ++counter;
  }, 500)
);
```

[Where I Learned](https://www.treinaweb.com.br/blog/o-que-e-debounce-e-qual-sua-importancia-para-a-performance/)
