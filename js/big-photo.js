import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5;
const bigPhoto = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = bigPhoto.querySelector('.big-picture__cancel');
const commentsLoader = bigPhoto.querySelector('.comments-loader');
const commentsCount = bigPhoto.querySelector('.social__comment-count');
const commentList = bigPhoto.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
let comments = [];
let commentsShown = 0;


const createComment = ({avatar, name, message}) => {
  const newComment = commentTemplate.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PER_PORTION;

  if(commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentsCount.innerHTML = `${commentsShown} из ${comments.length} комментариев`;
};

const hideBigPhoto = () => {
  commentsShown = 0;
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onCancelButtonClick () {
  hideBigPhoto();
}

function onLoaderButtonClick () {
  renderComments();
}

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPhoto();
  }
}

const renderPhotoDetails = ({ url, likes, description }) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.big-picture__img img').alt = description;
  bigPhoto.querySelector('.likes-count'). textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;
};

const showBigPhoto = (data) => {
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }

  renderPhotoDetails(data);
};

commentsLoader.addEventListener('click', onLoaderButtonClick);
cancelButton.addEventListener('click', onCancelButtonClick);

export {showBigPhoto};
