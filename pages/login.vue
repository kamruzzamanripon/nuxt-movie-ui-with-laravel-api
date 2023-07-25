<template>
    <div class="flex h-screen items-center justify-center bg-gray-100">
      <div class="bg-white p-8 shadow-md rounded-lg w-80">
        <h1 class="text-2xl font-semibold mb-4">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input v-model="email" type="email" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input v-model="password" type="password" class="mt-1 block w-full border rounded-md px-3 py-2" required />
          </div>
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        // You can implement your login logic here.
        // For demonstration purposes, we'll just display the login details in the console.
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        // After successful login, you can redirect the user to the desired page.
        // For example: this.$router.push('/dashboard');
      },
    },
  };
  </script>