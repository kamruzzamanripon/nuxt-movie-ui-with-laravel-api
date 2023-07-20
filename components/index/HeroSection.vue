<template>
<section>
    <div class="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white" style="background-image: url('assets/pictures/banner-one.jpg');">
        <div class="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-44">
            <span class="uppercase text-3xl font-semibold drop-shadow-lg ">Inception</span>
            <div class="text-xs text-gray-200 mt-2">
                <a href="#" class="">Action</a>,
                <a href="#" class="">Adventure</a>,
                <a href="#" class="">Sci-Fi</a>
            </div>
            <div class="mt-4 flex space-x-3 items-center">
                <a href="#" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">Watch</a>
                <a href="#" class="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">
                    <Plus />
                </a>
            </div>
        </div>
    </div>
</section>
</template>
<script setup>
import Plus from '../Icon/plus.vue';

</script>
