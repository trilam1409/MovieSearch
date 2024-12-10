import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://imdb.iamidiotareyoutoo.com',
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.message?.includes('timeout')) {
      return Promise.reject(error);
    }

    const response = error?.response;
    switch (response?.status) {
      case 500:
        // TODO: Add necessary actions
        return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
