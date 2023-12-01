const AVATARS_COUNT = 6;
const PHOTOS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const COMMENTS_COUNT = 9;
const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];
const PHOTOS_DESCRIPTIONS = [
  'Пролетая над пляжем на парашюте! #изи_кен_кизи',
  'Благими намерениями выстлана дорога на пляж.',
  'Райское наслаждение',
  'Фотик что надо!!! #не_смотри_по_сторонам',
  'Принимаем рисовые ванны. Внутрь',
  'Бэтмобиль уже не тот',
  'Традиционные фото завтрака. #просто_оставлю_это_здесь',
  'Невероятно вкусно! Второй день уже наслаждаемся',
  'Самолёты низко летают, но ничто не предвещает дождя =)',
  'Вы полюбуйтесь на эту красоту! Обожаю чёрную пятницу!',
  'Незабываемое место. А ведь отпуск только начался! #новые_тропы',
  'Как приехали в город, сразу сняли эту красотку. Если уж ехать на пару тыщ км, то с комфортом!',
  'ЗОЖ - ешь, сколько хошь! #healthy',
  'SUSHI CAT!',
  'Такого подарка я ещё не получал! Кайф!',
  'Рисуют белыми линиями самолёты в облаках...',
  'Такая энергия и такое звучание! Мурашки по коже бегали весь концерт! #best_moments',
  'Настоятельно рекомендую посетить этот ярчайший фестиваль! #original_meet',
  'Ох уж этот алиэкспресс. Не могу остановиться заказывать. На сколько по десятибалльной оцените?',
  'Приятный вечер #снова_отпуск',
  'Двадцатый день здорового питания. Гамбургер пока не хочется!',
  'Опять закат взрывается пламенем #malibu_sunset #best_moments_of_life',
  'Вариация на тему лучшего альбома The Prodigy',
  'Как же это было незабываемо. Стадион то сходил с ума, то блаженно растекался волнами рук. Просто супер!',
  'Никакие солнечные ожоги не затмят эти ощущения от пребывания в дикой природе! #safari #so_hot',
];
const NAMES = [
  'Алефтина',
  'Инна',
  'Иван',
  'Андрей',
  'Святослав',
  'Велимир',
  'Брюс',
  'Адам',
  'Трислав',
  'Прохор',
];
const SURNAMES = [
  'Величко',
  'Кадырко',
  'Браун',
  'Уэйн',
  'Кличко',
  'Пшештович',
  'Слепчевич',
  'Уренгой',
  'Перебейнос',
  'Фримен',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createCommentText = () => Array.from({length: getRandomInteger(1, 3)},() =>
  getRandomArrayElement(COMMENTS_TEXT)
).join(' ');


const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar- ${getRandomInteger(1, AVATARS_COUNT)}.svg`,
  message: createCommentText(),
  name: `${getRandomArrayElement(NAMES) } ${ getRandomArrayElement(SURNAMES)}`,
}
);

const generatePhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENTS_COUNT)},
    createComment
  ),
});

const getPhotos = () => Array.from({length: PHOTOS_COUNT}, (_, photoIndex) =>
  generatePhoto(photoIndex + 1)
);

getPhotos();
