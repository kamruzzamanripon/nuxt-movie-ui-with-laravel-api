<template>
    <div class="loading">
      <div class="relative">
        <img src="assets/pictures/bird-wings-flying-feature.gif" alt="" class="w-full">
        <h3 class="font-semibold text-3xl text-red-500 absolute top-5 left-6">wait....., I am going to the director to make this movie.</h3>
      </div>
    </div>
  </template>
  
  <style scoped>
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background: #00000061;
    height: 100%;
    z-index: 5555;
  }
  
  .spinner-border {
    width: 3rem;
    height: 3rem;
    color: #007bff;
  }
  </style>