import { defineStore } from 'pinia';
import axios from '../helpers/axios.js';

export const userStore = defineStore('userStore', {
  state: () => ({
    loading: false,
    logInUserInfo: {},
    categories: [],
    isLogIn:false
  }),

  getters: {},

  actions: {
    // async csrfCookie() {
    //   await useFetch("http://127.0.0.1:8000/sanctum/csrf-cookie", {
    //     credentials: "include"
    //   });
    // }, 

    async actionUserLogin(payload, token) {
      try {
        const response = await axios.post('/login', payload);
        this.logInUserInfo = response.data;
        this.isLogIn = true;
        // Save the user data and token in local storage (for page reload)
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.setItem('token', response.data.data.token);
        navigateTo("/");
      } catch (error) {
        throw new Error('Login failed.');
      }
    },

    logout() {
      // Clear the user data and token from local storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.logInUserInfo = null;
      this.isLogIn = false;
    },

    beforeCreate() {
      // Check if the user data and token exist in local storage
      const userData = localStorage.getItem('user');
      const token = localStorage.getItem('token');
  
      if (userData && token) {
        // Parse the user data and set it in the store
        const parsedUserData = JSON.parse(userData);
        this.logInUserInfo = parsedUserData;
        this.isLogIn = true;
      }
    },



  }
});
