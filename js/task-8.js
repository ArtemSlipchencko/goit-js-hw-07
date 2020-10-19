const root = document.querySelector("#task-8");
const container = root.querySelector(".container");
const input = root.querySelector("#amount");
const create = root.querySelector("#create");
const remove = root.querySelector("#remove");

const createBoxes = function(amount) {
    let item;
    let width = 0;
    let height = 0;
    

    for (let i = 1; i <= amount; i++) {
        item = document.createElement("div");
        container.appendChild(item);
        const color1 = Math.floor(Math.random() * 255);
        const color2 = Math.floor(Math.random() * 255);
        const color3 = Math.floor(Math.random() * 255);
        item.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
        if (i === 1) {
            width = 30;
            height = 30;
            item.style.width = `${width}px`;
            item.style.height = `${height}px`;
        } else {
            width += 10;
            height += 10;
            item.style.width = `${width}px`;
            item.style.height = `${height}px`;
        };
        
    };
};

const destroyBoxes = function() {
    container.innerHTML = "";
};

create.addEventListener("click", ()=> {
    const amount = +input.value;
    createBoxes(amount);
});

remove.addEventListener("click", destroyBoxes);