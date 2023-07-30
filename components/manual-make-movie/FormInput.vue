<template>
    <div class="bg-gray-200 p-5 rounded-md dark:bg-black">

        <div class="text-center mb-8 relative">
            <h1 class="text-2xl font-bold text-gray-700 mb-3 dark:text-white">Manual Movie Maker</h1>
            <img src="/assets/pictures/storytelling-08.gif" alt="" class="rounded-full w-48 h-48 absolute -top-5 right-0 sm::hidden">
        </div>

        <div class="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie
                    Title
                </label>
                <input type="text" id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type your Movie Title..." v-model="movieData.title">
                <p v-if="!movieData.title && isSubmitted" class="text-red-500 mt-2">Movie Title is required.</p>
            </div>
            <div class="mb-6">
                <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie
                    Category</label>
                <select 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    v-model="movieData.category"
                    >
                    <option value="">Choose category</option>
                    <option :value="category.id" v-for="category in aiMovieStoreInfo.categories" :key="category">
                        {{ category.name }}
                    </option>
                </select>
                <p v-if="!movieData.category && isSubmitted" class="text-red-500 mt-2">Movie Category is required.</p>
            </div>
            <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Movie Short
                    Description</label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type Movie short description..." v-model="movieData.description"></textarea>
                <p v-if="!movieData.description && isSubmitted" class="text-red-500 mt-2">Movie Description is required.</p>
            </div>
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Movie Poster
                </label>
                <input 
                    type="file" id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type your Movie Title..."
                    @change="handleFileChange"
                >
                <p v-if="!movieData.file && isSubmitted" class="text-red-500 mt-2">Movie Poster is required.</p>
            </div>
            <div class="text-right">
                <button type="submit" class="bg-black text-white p-3 rounded-md dark:border" @click="submitForm">Make
                    Movie
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { aiMovieStore } from '../../store/aiMovieStore.js';

const movieData = ref({
    title: "",
    category: "",
    description: "",
    file:""
})

const aiMovieStoreInfo = aiMovieStore();
const isSubmitted = ref(false);

onMounted(()=>{
    aiMovieStoreInfo.actionAllCategoryApi()
})


//input file handler
function handleFileChange(event) {
  const file = event.target.files[0];
  movieData.value.file = file;
}
//validation input
function validateInputs() {
    const { title, category, description, file } = movieData.value;
    if (!title || !category || !description || !file) {
        //alert('Please fillup the form')
        return false;
    }
    return true;
}

const submitForm = () => {
    isSubmitted.value = true;
    if (validateInputs()) {
        aiMovieStoreInfo.actionManualMovieDataSendToServer(movieData.value)
    }
};




</script>