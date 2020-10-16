const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const root = document.querySelector("#task-2");

const list = document.createElement("ul");

root.append(list);

let item;

ingredients.map(itemText => {
    item = document.createElement("li");
    item.textContent = itemText;
    list.append(item);
});