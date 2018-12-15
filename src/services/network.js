import axios from 'axios';
import qs from 'qs';
import _ from 'lodash';

import { errorAuthentification } from 'actions';
import { ASTRAL_TOKEN, OFD_URL_41 as baseURL, AUTH_ERROR_DESCRIPTION } from 'constants/urls';

const network = axios.create({
  baseURL,
  headers: {
    'astral-token': ASTRAL_TOKEN,
  },
});

network.interceptors.request.use(config => {
  const apiKey = localStorage.getItem('apiKey');
  if (!config.data) {
    if (apiKey) config.data = qs.stringify({ api_key: apiKey });
    return config;
  }
  if (_.isObject(config.data)) {
    config.data = qs.stringify({ api_key: apiKey, ...config.data });
    return config;
  }
  if (_.isString(config.data)) {
    const data = qs.parse(config.data);
    config.data = qs.stringify({ api_key: apiKey, ...data });
    return config;
  }
  return config;
});

network.interceptors.response.use(undefined, error => {
  const resp = error.response;

  if (
    resp &&
    (resp.status === 401 || (resp.data && resp.data.description === AUTH_ERROR_DESCRIPTION))
  ) {
    errorAuthentification();
  }

  //TODO: Возврат ошибок от API
  if (resp && resp.data && !resp.data.ok && resp.data.description) {
    return resp;
  }

  if (!resp || (!resp.status && resp.status > 499)) {
    error.message = 'Произошла ошибка соединения с сервером';
  }
  return Promise.reject(error);
});

export default network;
