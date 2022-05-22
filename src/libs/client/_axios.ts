import axios, { AxiosInstance } from 'axios';

const _axios: AxiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000, // 10초
});

_axios.interceptors.request.use(
  (config) => ({
    ...config,
    requestTime: new Date(),
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  }),
  (error) => {
    return Promise.reject(error);
  },
);

_axios.interceptors.response.use(
  (res) => {
    if (process.env.NODE_ENV === 'development') {
      const { requestTime } = res.config as { requestTime: Date };
      const spendTime = new Date().getTime() - new Date(requestTime).getTime();
      const method = res.config.method?.toUpperCase();

      console.groupCollapsed(`[${method} ${res.status} ${spendTime}ms] ${res.config.url}`);
      console.log(res.data);
      console.groupEnd();
    }
    return res;
  },
  (error) => {
    console.groupCollapsed(`[ Error ] ${error.message}`);
    console.log(error.config);
    console.groupEnd();
    return Promise.reject(error.response.data);
  },
);

export default _axios;
