const SERVER = 'https://28.javascript.htmlacademy.pro/kekstagram';

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/333',
};

const ErrorText = {
  [HttpMethod.GET]: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  [HttpMethod.POST]: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const request = async (url, method = HttpMethod.GET, body = null) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
};

const loadPhotos = async () => await request(SERVER + Route.GET_DATA);

const sendPhotos = async (body) => {
  await request(
    SERVER + Route.SEND_DATA,
    HttpMethod.POST,
    body,
  );
};

export { loadPhotos, sendPhotos };
