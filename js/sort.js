const PHOTOS_COUNT = 10;

const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const filterElement = document.querySelector('.img-filters');
let currentFilter = Filter.DEFAULT;
let photos = [];

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (photoA, photoB) =>
  photoB.comments.length - photoA.comments.length;

const getFilteredPhotos = () => {
  switch (currentFilter) {
    case Filter.RANDOM:
      return [...photos].sort(sortRandomly).slice(0, PHOTOS_COUNT);
    case Filter.DISCUSSED:
      return [...photos].sort(sortByComments);
    default:
      return [...photos];
  }
};

const setOnFilterClick = (callback) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;
    if (clickedButton.id === currentFilter) {
      return;
    }

    filterElement
      .querySelector('.img-filters__button--active')
      .classList.remove('img-filters__button--active');
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;
    callback(getFilteredPhotos());
  });
};

const init = (loadedPhotos, callback) => {
  filterElement.classList.remove('img-filters--inactive');
  photos = [...loadedPhotos];
  setOnFilterClick(callback);
};

export { init, getFilteredPhotos };
