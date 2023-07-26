import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://127.0.0.1:8000/api', // Replace with your API base URL
  headers: {
    common: {
      // Add common headers here if needed
      Accept: 'application/json'
    },
   // withCredentials: true,
  },
});
//axiosInstance.defaults.withCredentials = true;
// Interceptor for APIs that require JWT token
axiosInstance.interceptors.request.use((config) => {
  // Check if the API requires JWT token
  if (config.authRequired) {
    // Replace 'your-jwt-token' with the actual JWT token from your authentication mechanism
    const jwtToken = '9|BDlMB5bPtZGdS7HAdUA3WkQiXaoy6zDjhTntxfcL';
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

export default axiosInstance
