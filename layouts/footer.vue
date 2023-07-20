<template>
    <div class="bg-gray-700 py-4 text-white text-center dark:bg-red-700 dark:text-black">
        @ Syed Kamruzzaman ::{{ currentYear }}:: @
    </div>
</template>

<script setup>
const currentDate = new Date();
const currentYear = currentDate.getFullYear().toString();
</script>