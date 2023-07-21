import axios from '../helpers/axios.js';

import { defineStore } from 'pinia';
export const aiMovieStore = defineStore('aiMovieStore',{
    state: ()=>({
      aiMovieData:{},
      loading:false
    }),
  
    getters:{
       
    },
    actions:{
        async actionAiMovieData(payload){
          this.aiMovieData = payload;
          this.loading = false;
        },
        async actionAllCategoryApi(){
          alert('ok')

          
          const config = useRuntimeConfig(); 
          const data =  await axios.get('/all-category');
          console.log('axios data', data)
      
         
        }
    }
  })