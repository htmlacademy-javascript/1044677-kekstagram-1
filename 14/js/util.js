const ERROR_SHOW_TIME = 3000;

const showError = (message) => {
  const error = document.createElement('div');
  error.style.position = 'absolute';
  error.style.zIndex = '100';
  error.style.left = '0';
  error.style.top = '0';
  error.style.right = '0';
  error.style.padding = '10px 5px' ;
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
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

export {isEscapeKey, isEnterKey, showError, debounce};

