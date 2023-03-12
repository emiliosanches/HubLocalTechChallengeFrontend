import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

api.interceptors.request.use((config) => {
  // const token = ...
  // if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // todo remove token from redux if exists
    }

    return Promise.reject(error);
  }
);