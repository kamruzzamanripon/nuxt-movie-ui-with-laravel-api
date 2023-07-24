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

// Function to fetch the CSRF token
async function fetchCSRFToken() {
  try {
    const response = await axiosInstance.get('/csrf-token');
    console.log('csrf token', response.data.csrf_token)
    return response.data.csrf_token;
  } catch (error) {
    console.error('Error fetching CSRF token:', error.message);
    return null;
  }
}


// Interceptor to handle CSRF token
axiosInstance.interceptors.request.use(async (config) => {
  if (!config.url.includes('csrf-cookie')) {
    // Fetch the CSRF token
    const csrfToken = await fetchCSRFToken();
    console.log('csrf token-2', csrfToken)
    // Include the CSRF token in the request headers
    if (csrfToken) {
      config.headers['XSRF-TOKEN'] = csrfToken;
    } else {
      console.error('CSRF token not available.');
    }
  }
  return config;
});

export default axiosInstance;
