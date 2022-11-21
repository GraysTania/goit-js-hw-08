// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const refs = {
  gallery: document.querySelector('.gallery'),
};

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ''
);

refs.gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
