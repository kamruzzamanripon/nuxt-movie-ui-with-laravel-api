<template>
    <div class="flex min-h-screen">
        <!-- Left Sidebar -->
        <LeftSideBar />
        <!-- /Left Sidebar -->

        <div class="w-full px-6 mt-10">
            <FormInput />
        </div>

        <!-- Right Sidebar -->
        <RightSideBar />
        <!-- /Right Sidebar -->
    </div>
</template>
    
<script setup>
import FormInput from '@/components/manual-make-movie/FormInput.vue';
import LeftSideBar from '@/layouts/LefeSideBar.vue';
import RightSideBar from '@/layouts/RightSideBar.vue';
</script>
    