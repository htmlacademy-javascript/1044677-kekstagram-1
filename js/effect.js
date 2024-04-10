const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [Effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const effectToSliderOptions = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};

const modalWindow = document.querySelector('.img-upload');
const imagePreview = modalWindow.querySelector('.img-upload__preview img');
const imageEffects = modalWindow.querySelector('.effects');
const effectSlider = modalWindow.querySelector('.effect-level__slider');
const sliderContainer = modalWindow.querySelector('.img-upload__effect-level') ;
const effectLevel = modalWindow.querySelector('.effect-level__value');

let chosenEffect = Effect.DEFAULT;

const isDefault = () => chosenEffect === Effect.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imagePreview.style.filter = null;
    return;
  }
  const { value } = effectLevel;
  const { style, unit } = effectToFilter[chosenEffect];
  imagePreview.style.filter = `${style}(${value}${unit})`;
  imagePreview.classList = [];
  imagePreview.classList.add(`effects__preview--${style}`);
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const onSliderUpdate = () => {
  effectLevel.value = effectSlider.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(effectSlider, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number (value),
      from: (value) => Number (value),
    }
  });
  effectSlider.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({ min, max, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(effectToSliderOptions[chosenEffect]);
    showSlider();
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(Effect.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(effectToSliderOptions[chosenEffect]) ;
  imageEffects.addEventListener('change', onEffectsChange);
};

export { init, reset };
