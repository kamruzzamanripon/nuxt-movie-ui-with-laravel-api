<template>
<aside class=" w-1/5 py-10 px-10  min-w-min  border-l border-gray-300 dark:border-zinc-700 hidden lg:block ">

    <div class="relative items-center content-center flex">
        <span class="text-gray-400 absolute left-4 cursor-pointer">
           <Search />
        </span>
        <input type="text" class="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white  py-3 rounded-full w-full outline-none focus:ring-1" placeholder="Search ...">
    </div>

    <!-- Popular Movies -->
    <div class="mt-10">
        <span class="font-semibold text-gray-700 dark:text-white">Popular Movies</span>
        <ul class="mt-4 text-gray-400 text-xs space-y-3">
            <li class="flex space-y-3 space-x-3 border p-5 rounded-md border-x-2">
                <img src="assets/pictures/ShawshankRedemptionMoviePoster.jpg" class="w-1/3 rounded-md" alt="">
                <div class="flex flex-col justify-between  ">
                    <div class="flex flex-col space-y-1">
                        <span class="text-gray-700 dark:text-white font-semibold">The Shawshank Redemption</span>
                        <span class="text-xxs hidden xl:block">Drama</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <IconImdbLogo />
                        <span>9.2</span>
                    </div>
                </div>
            </li>
            <li class="pt-1">
                <a href="#" class="px-5 py-2.5 bg-red-600  hover:bg-red-700 rounded-lg text-center font-medium block text-white">See More</a>
            </li>

        </ul>
    </div>
    <!-- End Popular Movies -->

    <!-- Favorites -->
    <div class="mt-10">
        <span class="font-semibold text-gray-700 dark:text-white">Favorites</span>
        <ul class="mt-4 text-gray-400 text-xs space-y-3">
            <li class="flex space-x-3 border p-5 rounded-md border-x-2">
                <img src="assets/pictures/The_Matrix_Poster.jpg" class="object-cover w-1/3 rounded-md" alt="">
                <div class="flex flex-col justify-between  ">
                    <div class="flex flex-col space-y-1">
                        <span class="text-gray-700 dark:text-white font-semibold">The Matrix</span>
                        <span class="text-xxs hidden xl:block">Action, Sci-Fi</span>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <IconImdbLogo />
                        <span>8.7</span>
                    </div>
                </div>
            </li>
            <li class="pt-1">
                <a href="#" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-center font-medium block text-white">See More</a>
            </li>

        </ul>
    </div>
    <!-- End Favorites -->

</aside>
</template>


<script setup>
import IconImdbLogo from '../components/Icon/ImdbLogo.vue';
import Search from '../components/Icon/Search.vue';
</script>

