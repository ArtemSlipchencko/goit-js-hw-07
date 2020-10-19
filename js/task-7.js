const root = document.querySelector("#task-7");
const input = root.querySelector("#font-size-control");
const text = root.querySelector("#text");
text.style.fontSize = "50px";

input.addEventListener("input", ()=> {
    text.style.fontSize = `${input.value}px`;
});

console.dir(input);

