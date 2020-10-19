const root = document.querySelector("#task-6");
const input = root.querySelector("#validation-input");

input.addEventListener("input", ()=> {

    if (input.value.length === +input.getAttribute("data-length")) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    };

});

