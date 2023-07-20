<template>
    <div class="flex justify-between items-center bg-gray-700 dark:bg-red-600 p-4 pb-2">
        <div>
          <select
          v-model="colorMode.preference"
          class="border rounded-md w-52 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        </div>
        <div class=" font-bold text-lg flex items-center gap-x-3 hidden md:flex">
                <svg class="h-8 w-8 fill-white-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
                </svg>
                <div class="tracking-wide text-blue-200 dark:text-white">RMovie<span class="text-red-600">.</span></div>
            </div>
        <div >
          <ul class="flex space-x-3">
            <li class="text-blue-200 cursor-pointer hover:text-white dark:hover:text-black">TV</li>
            <li class="text-white dark:text-black font-semibold">Movies</li>
            <li class="text-blue-200 cursor-pointer hover:text-white dark:hover:text-black">Animes</li>
          </ul>
        </div>
      </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  </script>
  
  <style lang="postcss">
  body {
    @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
  }
  </style>
  