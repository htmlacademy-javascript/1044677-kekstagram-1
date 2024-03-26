import { isEscapeKey } from './util.js';

const successMessageElement = document
  .querySelector ('#success')
  .content.querySelector('.success');

const errorMessageElement = document
  .querySelector('#error')
  .content.querySelector('.error');

const hideMessage = () => {
  const existsElement = document.querySelector('.success') || document.querySelector('.error');
  if (existsElement) {
    existsElement.remove();
  }
  document.removeEventListener('keydown',onDocumentKeydown);
};

const onCloseButtonClick = () => hideMessage();

const onBodyClick = () => hideMessage();

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

const showSuccessMessage = () => showMessage(successMessageElement, '.success__button');

const showErrorMessage = () => showMessage(errorMessageElement, '.error__button');


export { showSuccessMessage, showErrorMessage};
