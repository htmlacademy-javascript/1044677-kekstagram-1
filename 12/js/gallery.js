import { renderMiniatures } from './miniature.js';
import { showBigPhoto } from './big_photo.js';

const box = document.querySelector('.pictures');

const renderGallery = (photos) => {
  box.addEventListener('click', (evt) => {
    const miniature = evt.target.closest('[data-miniature-id]');
    if (!miniature) {
      return;
    }
    const photo = photos.find(
      (item) => item.id === +miniature.dataset.miniatureId);
    showBigPhoto(photo);
  });

  renderMiniatures(photos, box);
};

export {renderGallery};
