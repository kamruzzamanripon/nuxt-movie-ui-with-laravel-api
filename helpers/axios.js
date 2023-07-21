import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Replace with your API base URL
  headers: {
    common: {
      // Add common headers here if needed
      // e.g., Accept: 'application/json'
    },
  },
});

// Interceptor for APIs that require JWT token
axiosInstance.interceptors.request.use((config) => {
  // Check if the API requires JWT token
  if (config.authRequired) {
    // Replace 'your-jwt-token' with the actual JWT token from your authentication mechanism
    const jwtToken = 'your-jwt-token';
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

export default axiosInstance
