import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from "../helpers/axios.js";

export const categoryStore = defineStore('categoryStore', () => {
  const categories = ref([])
    
  const actionStoreCategory = async(payload)=>{
    console.log('actionStoreCategory', payload)
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("image", payload.file);
    //console.log("actionManualMovieDataSendToServer", [...formData]);
    const response = await axios.post("/category-store", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    navigateTo("/");
  }

  const actionAllCategoryApi = async()=> {
    const config = useRuntimeConfig();
    const data = await axios.get("/all-category");
    console.log("axios data", data);
    categories.value = data.data.data;
    //this.actionAiMovieData = movieData;
  }
  
    return { actionStoreCategory, actionAllCategoryApi, categories }
  })