<template>
<section class="mt-9 bg-lime-300 dark:bg-rose-500 p-5 rounded-md">
    <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-700 text-base dark:text-white">Top Movies</span>
        <div class="flex items-center space-x-2 fill-gray-500">
            <NavigationArrow />
        </div>
    </div>

    <div class="mt-4 grid grid-cols-2  sm:grid-cols-4 gap-x-5 gap-y-5">
        <div class="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600" v-for="topMovie in aiMOvieStoreInfo.topMovies" :key="topMovie">
            <img :src="topMovie.image" class=" h-4/5 object-cover w-full  " alt="">
            <div class="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                <span class="capitalize  font-medium truncate">{{ topMovie.title }}</span>
                <div class="flex space-x-2 items-center text-xs">
                    <IconImdbLogo />
                    <span>{{ getRandomRating(topMovie.id) }}</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { aiMovieStore } from '@/store/aiMovieStore.js';
import IconImdbLogo from '../Icon/ImdbLogo.vue';
import NavigationArrow from '../Icon/NavigationArrow.vue';

const aiMOvieStoreInfo = aiMovieStore();
const randomRating = ref((Math.random() * 4 + 5).toFixed(1));
watchEffect(()=>{
    aiMOvieStoreInfo.actionTopMovie();
},[])
const getRandomRating = (id) => {
  const hashValue = id % 1000; // Use a large enough number for uniqueness, adjust as needed
  const baseRating = (hashValue % 20 + 75) / 10; // Random number between 7.5 and 9.5
  const randomRating = parseFloat((Math.random() * (10 - baseRating) + baseRating).toFixed(1));

  return randomRating > 10 ? 10 : randomRating;
};

</script>
