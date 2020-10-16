const list = document.querySelector("#categories");
const li = document.querySelectorAll(".item");
const h2 = document.querySelectorAll(".item h2");

[...li].map((el,) => {
    console.log(`В списке ${li.length} категории`);
    console.log(`Категория: ${el.children[0].textContent}`);
    console.log(`Количество элементов: ${el.children[1].children.length}`);
});