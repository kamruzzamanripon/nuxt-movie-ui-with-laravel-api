<template>
     <div class="bg-gray-200 p-5 rounded-md dark:bg-black my-10">
            
            <div class="text-center mb-8">
                <h1 class="text-2xl font-bold text-gray-700 mb-3 dark:text-white">This is your Search Result</h1>
            </div>

            <div class="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
                <div class="mb-6 flex items-center justify-center">
                    <img 
                        :src="getImageSource" 
                        alt="result-image" 
                        class="rounded-md border border-2 border-x-1"
                        
                    >
                </div>
                <div class="mb-6">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Title</label>
                    <input 
                        type="text" 
                        id="large-input" 
                        class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Type your Movie Title..."
                        v-model="movieData.title"
                    >
                </div>
                <div class="mb-6">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Category</label>
                    <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Type your Movie category Name..."
                        v-model="movieData.category_id"
                        required
                        >
                        <option value="">Select Category</option>
                        <option :value="category.id" v-for="category in aiMovieStoreInfo.categories" :key="category">
                        {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Short Description</label>
                    <textarea 
                        id="message" 
                        rows="4" 
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Type Movie short description..."
                        v-model="movieData.description"
                    ></textarea>
                </div>
                <div class="text-right">
                    <button class="bg-black text-white p-3 rounded-md dark:border" @click="submitForm">Save your Movie</button>
                </div>
            </div>

        </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { aiMovieStore } from '../../store/aiMovieStore.js';


const aiMovieStoreInfo = aiMovieStore()
const movieData = ref({
    title:"",
    description:"", 
    base64Data:"", 
    category_id:"", 
})

watchEffect(()=>{
    movieData.value.title = aiMovieStoreInfo.aiMovieData.title
    movieData.value.description = aiMovieStoreInfo.aiMovieData.synopsis
    aiMovieStoreInfo.actionAllCategoryApi()
   // console.log("image info-22", "data:image/png;base64" + aiMovieStoreInfo.aiMovieData.b64JsonImage.b64_json)
},[])

//base64 convert for show image
const getImageSource = computed(() => {
  const imageData = aiMovieStoreInfo.aiMovieData.b64JsonImage?.b64_json || ''; 
  return `data:image/jpeg;base64,${imageData}`;
});

const submitForm = async() => {
    if(!movieData.value.category_id){
        alert("Select Category")
        return;
    }
    movieData.value.base64Data = getImageSource;
    await aiMovieStoreInfo.actionAiMovieDataSendServer(movieData.value);
    aiMovieStoreInfo.loading = false;
   
};



</script>

<style scoped>
img {
    width: 400px;
}
</style>