import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageMarkup = createMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

function createMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class = "gallery"> <li> <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> </li> </ul>`;
    })
    .join("");
}

console.log(galleryItems);
