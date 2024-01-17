const miniatureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const box = document.querySelector('.pictures');
const createMiniature = ({url, likes, comments}) => {
  const miniature = miniatureTemplate.cloneNode(true);
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__likes').textContent = likes;
  miniature.querySelector('.picture__comments').texContent = comments;
  return miniature;
};
const getMiniatures = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const miniature = createMiniature(photo);
    fragment.append(miniature);
  });
  box.append(fragment);
};

export {getMiniatures};
