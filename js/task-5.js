const root = document.querySelector("#task-5");
const input = root.querySelector("#name-input");
const output = root.querySelector("#name-output");

input.addEventListener("input", ()=> {
    input.value === "" ? output.textContent = "незнакомец" : output.textContent = input.value;
});


