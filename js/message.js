import { isEscapeKey } from './util.js';

const overlay = document.querySelector('.img-upload__overlay');
const successMessage = document
  .querySelector ('#success')
  .content.querySelector('.success');

const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideMessage = () => {
  const existsMessage = document.querySelector('.success') || document.querySelector('.error');
  if (existsMessage) {
    existsMessage.remove();
  }
  document.removeEventListener('keydown',onDocumentKeydown);
  document.removeEventListener('click',onCloseButtonClick);
  document.body.removeEventListener('click', onBodyClick);
};

function onCloseButtonClick () {
  hideMessage();
}

function onBodyClick () {
  hideMessage();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

const showMessage = (element, buttonClass) => {

  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
  element
    .querySelector(buttonClass)
    .addEventListener('click', onCloseButtonClick);
};

const showSuccessMessage = () => showMessage(successMessage, '.success__button');

const showErrorMessage = () => {
  overlay.removeEventListener('keydown', onDocumentKeydown);
  showMessage(errorMessage, '.error__button');
};


export { showSuccessMessage, showErrorMessage};
