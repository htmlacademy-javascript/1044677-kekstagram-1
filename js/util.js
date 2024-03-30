const ERROR_SHOW_TIME = 3000;

const showError = (message) => {
  const error = document.createElement('div');
  error.style.position = 'absolute';
  error.style.zIndex = '100';
  error.style.left = '0';
  error.style.top = '0';
  error.style.right = '0';
  error.style.padding = '10px 3px' ;
  error.style.fontSize = '30px';
  error.style.textAlign = 'center';
  error.style.backgroundColor = 'red';
  error.textContent = message;
  document.body.append(error);

  setTimeout(() => {
    error.remove();
  }, ERROR_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {isEscapeKey, isEnterKey, showError, debounce};
