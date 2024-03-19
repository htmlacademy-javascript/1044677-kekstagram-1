// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// const createIdGenerator = () => {
//   let lastGeneratedId = 0;

//   return () => {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// };
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

export {isEscapeKey, isEnterKey, showError};

//getRandomArrayElement, getRandomInteger, createIdGenerator
