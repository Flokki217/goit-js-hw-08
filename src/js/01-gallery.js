import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const imageList = galleryItems
  .map(image => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', imageList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
