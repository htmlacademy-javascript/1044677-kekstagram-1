import { isEscapeKey } from './util.js';

const COMMENTS_PER_PORTION = 5;
const bigPhoto = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');
const body = document.querySelector('body');
const commentList = document.querySelector('.social__comments');
let comments = [];
let commentsShown = 5;

const commentTemplate = document.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentTemplate.cloneNode(true);
  comment.classList.add('social-comment');
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;


  return comment;
};

const renderComments = () => {
  if(commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentsShown} из <span class='comments-count'>${comments.length}</span> комментариев`;
};

const hideBigPhoto = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click',onLoaderButtonClick);
  commentsShown = 5;
};

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPhoto();
  }
}

const onCancelButtonClick = () => {
  hideBigPhoto();
};

const renderPhotoDetails = ({ url, likes, description }) => {
  bigPhoto.querySelector('.big-picture__img img').src = url;
  bigPhoto.querySelector('.big-picture__img img').alt = description;
  bigPhoto.querySelector('.likes-count'). textContent = likes;
  bigPhoto.querySelector('.social__caption').textContent = description;
};

function onLoaderButtonClick () {
  commentsShown += COMMENTS_PER_PORTION;
  renderComments(comments);
}
const showMoreComments = () => {
  commentsLoader.addEventListener('click', onLoaderButtonClick);
};

const showBigPhoto = (data) => {
  for (let i = 0; i <= commentsShown; i++) {
    comments.push(data.comments[i]);
  }
  bigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPhotoDetails(data);
  renderComments(comments);
  showMoreComments(data.comments);
};


cancelButton.addEventListener('click', onCancelButtonClick);

export {showBigPhoto};
