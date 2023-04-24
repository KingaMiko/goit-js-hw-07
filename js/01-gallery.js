import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

//Method 1
const imageMarkup = createMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageMarkup);

function createMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`;
    })
    .join("");
}

//Method 2
// galleryItems.forEach((item) => {
//   const galleryContainer = document.createElement("li");
//   galleryContainer.classList.add("gallery__item");
//   gallery.append(galleryContainer);

//   const innerBox = document.createElement("a");
//   innerBox.classList.add("gallery__link");
//   innerBox.href = item.original;
//   galleryContainer.append(innerBox);
//   const imageBox = document.createElement("img");
//   imageBox.src = item.preview;
//   imageBox.alt = item.description;
//   imageBox.dataset.source = item.original;
//   imageBox.classList.add("gallery__image");
//   innerBox.append(imageBox);
// });

//Method 3
// function galleryCreate() {
//   let galleryArray = [];

//   galleryItems.forEach((el, index) => {
//     const { description, original, preview } = galleryItems[index];
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const img = document.createElement("img");

//     li.classList.add("gallery__item");
//     a.classList.add("gallery__link");
//     img.classList.add("gallery__image");

//     a.setAttribute("href", original);
//     img.setAttribute("src", preview);
//     img.setAttribute("data-source", original);
//     img.setAttribute("alt", description);

//     li.append(a);
//     a.append(img);

//     galleryArray.push(li);
//   });
//   gallery.append(...galleryArray);
// }
// galleryCreate();

// Method 1
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

//Method 2
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
