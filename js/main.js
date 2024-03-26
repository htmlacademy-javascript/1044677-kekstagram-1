import './form.js';
import './upload.js';
import { loadPhotos } from './network.js';
import { renderGallery } from './gallery.js';
import { showError, debounce } from './util.js';
import { init, getFilteredPhotos } from './sort.js';

const bootstrap = async () => {
  try {
    const photos = await loadPhotos();
    renderGallery(photos);
  } catch (error) {
    showError(error.message);
  }
};

bootstrap();

try {
  const photos = await loadPhotos();
  const debouncedRenderGallery = debounce(renderGallery);
  init(photos, debouncedRenderGallery);
  renderGallery(getFilteredPhotos());
} catch (err) {
  showError(err.message);
}
