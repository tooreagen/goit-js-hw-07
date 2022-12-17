import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((itemImg) => {
    return `<a class="gallery__item" href="${itemImg.original}">
                <img class="gallery__image" src="${itemImg.preview}" alt="${itemImg.description}" />
            </a>`
}).join("");

gallery.innerHTML = markup;
const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });