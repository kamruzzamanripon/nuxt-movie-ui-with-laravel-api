<template>
<section class="mt-9 bg-blue-400 dark:bg-black p-5 rounded-md">
    <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-700 text-base dark:text-white">Category wise movie</span>
        <div class="flex items-center space-x-2 fill-gray-500">
            <NavigationArrow />
        </div>
    </div>

    <div class="mt-4 grid grid-cols-2 gap-y-5 sm:grid-cols-3 gap-x-5 ">
        <div class="flex flex-col rounded-xl overflow-hidden aspect-square border dark:border-zinc-600" v-for="n in 3" :key="n">
            <img src="assets/pictures/movie-posters-at-starstills__62518.jpg" class=" h-4/5 object-cover w-full  " alt="">
            <div class="w-full h-1/5 bg-white dark:bg-zinc-800 dark:text-white px-3 flex items-center justify-between border-t-2 border-t-red-600">
                <span class="capitalize  font-medium truncate">Tenet</span>
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
import IconImdbLogo from '../Icon/ImdbLogo.vue';
import NavigationArrow from '../Icon/NavigationArrow.vue';
</script>
