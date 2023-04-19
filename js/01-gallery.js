import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageMarkup = createMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

function createMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// const selectImage = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const source = event.target.dataset.source;
//   const instance = basicLightbox.create(`
//   <img src="${source}" width="800" height="600">
// `);
//   instance.show();

//   const keyClose = (event) => {
//     if (event.key === "Escape" && instance.visible) {
//       instance.close();
//     }
//   };
//   document.addEventListener("keydown", keyClose);
// };

const selectImage = (event) => {
  event.preventDefault();
  const source =
    event.target.nodeName === "IMG" ? event.target.dataset.source : null;
  if (source) {
    const instance = basicLightbox.create(`
  <img src="${source}" width="800" height="600">
`);
    instance.show();
    const keyClose = (event) => {
      if (event.key === "Escape" && instance.visible()) {
        instance.close();
      }
    };
    document.addEventListener("keydown", keyClose);
  }
};

gallery.addEventListener("click", selectImage);

console.log(galleryItems);
