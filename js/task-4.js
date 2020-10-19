const root = document.querySelector("#counter");
let counterValue = root.querySelector("#value");

const increment = function() {
    +counterValue.textContent++;
};

const decrement = function() {
    +counterValue.textContent--;
};

const minus = root.querySelector('[data-action="decrement"]');
const plus = root.querySelector('[data-action="increment"]');

plus.addEventListener("click", increment);

minus.addEventListener("click", decrement);