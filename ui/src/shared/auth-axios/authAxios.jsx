import axios from 'axios';
import { isString } from 'lodash';

export default function (jwt) {
  const instance = axios.create();

  instance.__jwtRequestInterceptor = function (config = {}) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `JWT ${jwt}`
      }
    };
  };

  instance.__jwtRequestFailureInterceptor = function (err) {
    return Promise.reject(err);
  };

  instance.interceptors.request.use(
    instance.__jwtRequestInterceptor,
    instance.__jwtRequestFailureInterceptor);

  return instance;
};
