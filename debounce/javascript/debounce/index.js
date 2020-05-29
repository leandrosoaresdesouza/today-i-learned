// simple example
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

// creating a debounce function

// function debounce(func, wait) {
//   let timer = null;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(func, wait);
//   };
// }

// myInput.addEventListener(
//   "input",
//   debounce(function () {
//     mySpan.innerText = ++counter;
//   }, 500)
// );

// where i learned:
// https://www.treinaweb.com.br/blog/o-que-e-debounce-e-qual-sua-importancia-para-a-performance/
