import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageMarkup = createMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

function createMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li> <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> </li> `;
    })
    .join("");
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionType: Text,
  scrollZoom: false,
});

const selectImage = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open(event.target);
};
gallery.addEventListener("click", selectImage);

console.log(galleryItems);

// "use strict";
// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const gallery = document.querySelector(".gallery");
// function createGalleryItem(item) {
//   const galleryItem = document.createElement("li");
//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__item");
//   const galleryImage = document.createElement("img");
//   galleryImage.classList.add("gallery__image");
//   galleryLink.href = item.original;
//   galleryImage.src = item.preview;
//   galleryImage.alt = item.description;
//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);
//   return galleryItem;
// }
// const galleryItemsElements = galleryItems.map((item) =>
//   createGalleryItem(item)
// );
// gallery.append(...galleryItemsElements);
// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: "250",
// });
// console.log(galleryItems);
