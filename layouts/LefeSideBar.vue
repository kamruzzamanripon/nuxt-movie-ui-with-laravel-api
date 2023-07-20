<template>
    <!-- Left Sidebar -->
    <aside class=" w-1/6 py-10 pl-10  min-w-min  border-r border-gray-300 dark:border-zinc-700  hidden md:block ">

        <nuxt-link to="/">
            <div class=" font-bold text-lg flex items-center gap-x-3">
                <RMovieLogo />
                <div class="tracking-wide dark:text-white">RMovie<span class="text-red-600">.</span></div>
            </div>
        </nuxt-link>

        <!-- Menu -->
        <div class="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
            <div class="text-gray-400/70  font-medium uppercase">Menu</div>
            <RouterLink to="/" class="flex items-center space-x-2 py-1   font-semibold  border-r-4 border-r-red-600 pr-20 "
                :class="{ 'text-green-700 dark:text-yellow-200': isActive('/') }" @click="setActiveMenuItem('/')">
                <home />
                <span>Home</span>
            </RouterLink>

            <RouterLink to="/ai-make-movie"
                class="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
                :class="{ 'text-green-700 dark:text-yellow-200': isActive('/ai-make-movie') }"
                @click="setActiveMenuItem('/ai-make-movie')">
                <MovieMaker />
                <span>Ai Make Movie</span>
            </RouterLink>

            <RouterLink to="/manual-make-movie"
                class="flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
                :class="{ 'text-green-700 dark:text-yellow-200': isActive('/manual-make-movie') }"
                @click="setActiveMenuItem('/manual-make-movie')">
                <MovieMaker />
                <span>Manual Make Movie</span>
            </RouterLink>

            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
                href="#">
                <Community />
                <span>Community</span>
            </a>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
                href="#">
                <ComingSoon />
                <span>Coming Soon</span>
            </a>

            <div class="mt-8 text-gray-400/70  font-medium uppercase">Social</div>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
                href="#">
                <Profile />
                <span>Profile</span>
            </a>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
                href="#">
                <Friends />
                <span>Friends</span>
            </a>

            <RouterLink to="/make-category"
                class="flex items-center space-x-1 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
                :class="{ 'text-green-700 dark:text-yellow-200': isActive('/make-category') }"
                @click="setActiveMenuItem('/make-category')">
                <MakeCategory />
                <span>Make Category</span>
            </RouterLink>


            <div class="mt-8 text-gray-400/70  font-medium uppercase">General</div>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white "
                href="#">
                <Settings />
                <span>Settings</span>
            </a>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
                href="#">
                <Logout />
                <span>Logout</span>
            </a>
            <a class=" flex items-center space-x-2 py-1  group hover:border-r-4 hover:border-r-red-600 hover:font-semibold dark:hover:text-white"
                href="#">
                <Logout />
                <span>LogIn</span>
            </a>

        </div><!-- /Menu -->

    </aside><!-- /Left Sidebar -->
</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import ComingSoon from '../components/Icon/ComingSoon.vue';
import Community from '../components/Icon/Community.vue';
import Friends from '../components/Icon/Friends.vue';
import Home from '../components/Icon/Home.vue';
import Logout from '../components/Icon/Logout.vue';
import MakeCategory from '../components/Icon/MakeCategory.vue';
import MovieMaker from '../components/Icon/MovieMaker.vue';
import Profile from '../components/Icon/Profile.vue';
import RMovieLogo from '../components/Icon/RMovieLogo.vue';
import Settings from '../components/Icon/Settings.vue';

const route = useRoute();
const activeMenuItem = ref(route.path);

const setActiveMenuItem = (path) => {
    activeMenuItem.value = path;
};

const isActive = (path) => {
    return activeMenuItem.value === path;
};
</script>

  components: { Home },