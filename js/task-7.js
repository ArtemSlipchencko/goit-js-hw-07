const root = document.querySelector("#task-7");
const input = root.querySelector("#font-size-control");
const text = root.querySelector("#text");

input.addEventListener("click", ()=> {
    text.style.fontSize = `${input.value}px`;
});

