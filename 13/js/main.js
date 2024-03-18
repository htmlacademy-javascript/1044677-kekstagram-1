// import { getPhotos } from './data.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { loadPhotos } from './network.js';
import { showError } from './util.js';

const bootstrap = async () => {
  try {
    const photos = await loadPhotos();
    renderGallery(photos);
  } catch (error) {
    showError(error.message);
  }
};

bootstrap();
