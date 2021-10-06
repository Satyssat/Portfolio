const result = document.getElementById("result");
const button = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

button.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    // console.log(e.target.outerText);
    result.innerHTML += e.target.outerText;
  });
});

equal.addEventListener("click", (e) => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", (e) => {
  result.textContent = "";
});
