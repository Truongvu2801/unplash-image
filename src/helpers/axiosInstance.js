import axios from "axios";

const axiosInstance = () => {
  const baseURL = process.env.REACT_APP_API_URL;
  let headers = {};

  if (process.env.REACT_APP_ACCESS_KEY) {
    headers.Authorization = `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 3000,
    headers
  });
  return axiosInstance;
};

export default axiosInstance;