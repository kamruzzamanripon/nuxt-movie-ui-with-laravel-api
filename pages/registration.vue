<template>
    <div class="flex h-screen items-center justify-center bg-gray-100">
      <div class="bg-white p-8 shadow-md rounded-lg w-80">
        <h1 class="text-2xl font-semibold mb-4">Register</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input v-model="userInfo.name" type="text" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="userInfo.email" type="email" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="userInfo.password" type="password" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input v-model="userInfo.password_confirmation" type="password" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { userStore } from '@/store/userStore.js';
import { ref } from 'vue';


  const userInfo = ref({
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
  })
  const userStoreInfo = userStore()

  const register = async ()=>{
    if(userInfo.value.password != userInfo.value.password_confirmation){
      alert('Password does not match, please check' );
      return;
    }

    await userStoreInfo.actionRegister(userInfo.value)

  }
  
  </script>
  