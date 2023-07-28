import axios from '../helpers/axios.js';

import { defineStore } from 'pinia';
export const aiMovieStore = defineStore('aiMovieStore',{
    state: ()=>({
      loading:false,
      aiMovieData:{},
      categories:[],
      topMovies:[],
      categoryWiseMovie:[],
    }),
  
    getters:{
       
    },
    actions:{
        async getToken (){
          return await axios.get("/sanctum/csrf-cookie")
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
          console.log('actionAiMovieDataSendServer', payload)
          const response = await axios.post('/ai-movie-store', payload);
        },
        async actionTopMovie(payload){
          const data =  await axios.get('/top-movies');
          this.topMovies = data.data.data.data;
        },
        async actionCategoryWiseMovie(){
          const data =  await axios.get('/category-wise-movies');
          console.log('actionCategoryWiseMovie', data);
          this.categoryWiseMovie = data.data.data.data
        }

    }
  })