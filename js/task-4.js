const root = document.querySelector("#counter");
let counterValue = root.querySelector("#value");

const increment = function() {
    +counterValue.textContent++;
};

const decrement = function() {
    +counterValue.textContent--;
};

const minus = root.querySelector(".pls");
const plus = root.querySelector(".mns");

plus.addEventListener("click", increment);

minus.addEventListener("click", decrement);