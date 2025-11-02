import axios from 'axios';



const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APIBASEURL}/api/user`,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const fullUrl = axios.getUri(config);
console.log("Full request URL:", fullUrl);
  return config;
  });

export default instance;