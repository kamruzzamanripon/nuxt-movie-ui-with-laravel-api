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
        }
    }
  })