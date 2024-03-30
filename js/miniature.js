const miniatureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const box = document.querySelector('.pictures');

const createMiniature = ({url, likes, comments, description, id}) => {
  const miniature = miniatureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.dataset.miniatureId = id;
  return miniature;
};

const renderMiniatures = (photos) => {
  box.querySelectorAll('.picture').forEach((element) => element.remove());
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const miniature = createMiniature(photo);
    fragment.append(miniature);
  });
  box.append(fragment);
};

export {renderMiniatures};
