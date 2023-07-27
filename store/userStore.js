import { defineStore } from 'pinia';
import axios from '../helpers/axios.js';


export const userStore = defineStore('userStore', {
  state: () => ({
    loading: false,
    logInUserInfo: {},
    categories: [],
    isLogIn:false,
  }),

  getters: {
    authCheck() {
      if (process.client) {
        if (this.isLogIn == true) {
           return true;
        }
        if(this.isLogIn == false){
          const token = localStorage.getItem('token');
          return !!token;
        }
         
        return false;
      }
    },
    token (){
      if (typeof window == undefined) {
        return false;
      }
      const token = localStorage.getItem("token") ?? this.logInUserInfo.data.token
      if(token){
        return token;
      }

      return null;
    }
  },

  actions: {
     async actionLogin(payload, token) {
      try {
        const response = await axios.post('/login', payload);
        this.logInUserInfo = response.data;
        this.isLogIn = true;
        // Save the user data and token in local storage (for page reload)
        localStorage.setItem('user', JSON.stringify(response.data.data));
        localStorage.setItem('token', response.data.data.token);
        navigateTo("/");
      } catch (error) {
        throw new Error('Login failed.', error);
      }
    },

    async actionLogout(payload) {
      const response = await axios.post('/logout');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.logInUserInfo = null;
      this.isLogIn = false;
    },

    async actionRegister(payload){
      console.log('registation', payload)
      try {
        const response = await axios.post('/register', payload);
        navigateTo("/login");
      } catch (error) {
        throw new Error('Registration failed.', error);
      }
    }

   



  }
});
