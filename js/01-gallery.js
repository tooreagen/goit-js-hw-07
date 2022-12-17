import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((itemImg) => {
    return `<div class="gallery__item">
              <a class="gallery__link" href="${itemImg.original}">
                <img
                  class="gallery__image"
                  src="${itemImg.preview}"
                  data-source="${itemImg.original}"
                  alt="${itemImg.description}"
                />
              </a>
            </div>`
}).join("");

const showFullImage = (event) => {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const imgLink = event.target.dataset.source;
  const markupModal = basicLightbox.create(`<img src="${imgLink}">`);
  markupModal.show();
}

gallery.innerHTML = markup;
gallery.addEventListener("click", showFullImage);