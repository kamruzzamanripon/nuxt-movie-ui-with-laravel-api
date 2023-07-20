<template>
    <div class="bg-gray-200 p-5 rounded-md dark:bg-black">

        <div class="text-center mb-8 relative">
            <h1 class="text-2xl font-bold text-gray-700 mb-3 dark:text-white">Create Category</h1>
            <img src="/assets/pictures/AS0007464_07.gif" alt="" class="rounded-full w-48 h-48 absolute -top-5 right-0 sm::hidden">
        </div>

        <div class="mx-10 px-10 py-16 bg-gray-400 dark:bg-black dark:border rounded-md">
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Category Name
                </label>
                <input type="text" id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type your Movie Title..." v-model="movieData.title">
                <p v-if="!movieData.title && isSubmitted" class="text-red-500 mt-2">Movie Title is required.</p>
            </div>
            <div class="mb-6">
                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Category Image
                </label>
                <input type="file" id="large-input"
                    class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Type your Movie Title...">
                <p v-if="!movieData.title && isSubmitted" class="text-red-500 mt-2">Movie Title is required.</p>
            </div>
            <div class="text-right">
                <button type="submit" class="bg-black text-white p-3 rounded-md dark:border" @click="submitForm">
                    Make Category
                </button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { Configuration, OpenAIApi } from 'openai';
import { ref } from 'vue';

const movieData = ref({
    title: "",
    category: "",
    description: "",
    file:""
})

const config = useRuntimeConfig();
const openAiApiKey = config.public.OPEN_AI_API_KEY
const configuration = new Configuration({
    apiKey: openAiApiKey
})
const openAi = new OpenAIApi(configuration);
const isSubmitted = ref(false);

function validateInputs() {
    const { title, category, description } = movieData.value;
    if (!title || !category || !description) {
        return false;
    }
    return true;
}

const submitForm = () => {
    isSubmitted.value = true;
    if (validateInputs()) {
        const userInput = 'text-area text as like input';

    }
};




</script>