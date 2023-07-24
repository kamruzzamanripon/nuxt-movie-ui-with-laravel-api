import axios from '../helpers/axios.js';

import { defineStore } from 'pinia';
export const aiMovieStore = defineStore('aiMovieStore',{
    state: ()=>({
      loading:false,
      aiMovieData:{},
      categories:[]
    }),
  
    getters:{
       
    },
    actions:{
        async getToken (){
          return await axios.get("/csrf-token")
        },
        async actionAiMovieData(payload){
          this.aiMovieData = payload;
          this.loading = false;
        },
        async actionAllCategoryApi(){
          const config = useRuntimeConfig(); 
          const data =  await axios.get('/all-category');
          console.log('axios data', data);
          this.categories = data.data.data;
          //this.actionAiMovieData = movieData;
        },




        async actionAiMovieDataSendServer(payload){
          //console.log('actionAiMovieDataSendServer-2', csrfToken)
          console.log('actionAiMovieDataSendServer', payload)
          const response = await axios.post('/ai-movie-store', payload);
        }
    }
  })