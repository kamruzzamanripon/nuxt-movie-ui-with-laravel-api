<template>
<section 
    class="mt-9 p-5 rounded-md" 
    v-for="category in aiMOvieStoreInfo.categoryWiseMovie" 
    :key="category"
    :class="getRandomColorClass()"
>
    <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-700 text-base dark:text-white">{{ category.name }}</span>
        <div class="flex items-center space-x-2 fill-gray-500">
            <NavigationArrow />
        </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
        <div class="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600" v-for="movie in getRandomMovies(category.movies)" :key="movie">
            <img :src="getImageUrl(movie.image)" class=" h-4/5 object-cover w-full  " alt="">
            <div class="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                <span class="capitalize  font-medium truncate">{{ movie.title }}</span>
                <div class="flex space-x-2 items-center text-xs">
                    <IconImdbLogo />
                    <span>7.4</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { aiMovieStore } from '@/store/aiMovieStore';
import IconImdbLogo from '../Icon/ImdbLogo.vue';
import NavigationArrow from '../Icon/NavigationArrow.vue';
const config = useRuntimeConfig();
const imageRootUrl = config.public.API_ROOT_URL

const aiMOvieStoreInfo = aiMovieStore();
onMounted(()=>{
    aiMOvieStoreInfo.actionCategoryWiseMovie()
})

// For make random color
const getRandomColorClass = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
const colors = [
  'bg-red-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-blue-800',
  'bg-black',
  
];
//image generat url
const getImageUrl = (thumbnail) => {
  const imageUrl = thumbnail ? thumbnail.replace('public', 'storage') : '';
  return `${imageRootUrl}/${imageUrl}`;
};

//random 3 movies generate
const getRandomMovies = (movies) => {
  if (movies.length <= 3) {
    return movies;
  } else {
    const shuffledMovies = [...movies].sort(() => Math.random() - 0.5);
    return shuffledMovies.slice(0, 3);
  }
};
</script>
