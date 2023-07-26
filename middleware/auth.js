import { userStore } from "../store/userStore.js";

export default defineNuxtRouteMiddleware(({ redirect }) => {
    if (process.client) {
      // This code will only run on the client-side
  
     const userStoreInfo = userStore();
     if ( !localStorage.getItem('token')) {
         return navigateTo("/login")
      }
    }
  });