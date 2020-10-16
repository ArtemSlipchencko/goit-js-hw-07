const root = document.querySelector("#task-3");

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
];

root.insertAdjacentHTML("beforeend", "<ul class='list'></ul>");
const list = document.querySelector(".list");

let item;
let img;

images.map(el => {
    item = document.createElement("li");
    list.append(item);
    img = document.createElement("img");
    item.append(img);
    img.setAttribute("src", `${el.url}`);
    img.setAttribute("alt", `${el.alt}`);
});

const items = document.querySelectorAll(".list li");
 for (let li of items) {
   li.classList.add("item");
 }
