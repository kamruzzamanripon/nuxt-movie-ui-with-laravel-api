import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
    state: ()=>({
        data:[
          {title:'this is title'}
        ]
    }),
  
    getters:{
       
    },
    actions:{
        
    }
  })