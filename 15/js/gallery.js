import { renderMiniatures } from './miniature.js';
import { showBigPhoto } from './big_photo.js';

const box = document.querySelector('.pictures');

let photos = [];

const onBoxClick = (evt) => {
  const miniature = evt.target.closest('[data-miniature-id]');
  if (!miniature) {
    return;
  }

  evt.preventDefault();
  const photo = photos.find(
    (item) => item.id === +miniature.dataset.miniatureId
  );
  showBigPhoto(photo);
};

const renderGallery = (currentPhotos) => {
  photos = currentPhotos;
  renderMiniatures(photos, box);
  box.addEventListener('click', onBoxClick);
};

export {renderGallery};
