import axios from "axios";

const scheme = import.meta.env.VITE_SSL === "true" ? "https://" : "http://";

const api = axios.create({
  baseURL: scheme + import.meta.env.VITE_API_URL + "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error.response);
  },
);

export default api;
