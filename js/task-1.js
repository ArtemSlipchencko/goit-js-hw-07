const list = document.querySelector("#categories");
const li = document.querySelectorAll(".item");

console.log(`В списке ${li.length} категории`);

[...li].map(el => {
    console.log(`Категория: ${el.children[0].textContent}`);
    console.log(`Количество элементов: ${el.children[1].children.length}`);
});