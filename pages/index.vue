<template>
    <div class="flex min-h-screen">
        <LeftSideBar />
        <main class=" flex-1 py-10  px-5 sm:px-10 ">
            <HeroSection />
            <TopMovies />
            <CategoryWiseMovies />
        </main>
        <RightSideBar />

    </div>
</template>
    
<script setup>
import CategoryWiseMovies from '@/components/index/CategoryWiseMovies.vue';
import HeroSection from '@/components/index/HeroSection.vue';
import TopMovies from '@/components/index/TopMovies.vue';
import LeftSideBar from '@/layouts/LefeSideBar.vue';
import RightSideBar from '@/layouts/RightSideBar.vue';
</script>