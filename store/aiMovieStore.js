import axios from "../helpers/axios.js";

import { defineStore } from "pinia";

//define pinia store
export const aiMovieStore = defineStore("aiMovieStore", {

  //initial store
  state: () => ({
    loading: false,
    aiMovieData: {},
    categories: [],
    topMovies: [],
    categoryWiseMovie: [],
  }),

  getters: {},

  actions: {
    async getToken() {
      return await axios.get("/sanctum/csrf-cookie");
    },

    //here payload is ai data. this data store in pinia
    async actionAiMovieData(payload) {
      this.aiMovieData = payload;
      this.loading = false;
    },
    async actionAllCategoryApi() {
      const config = useRuntimeConfig();
      const data = await axios.get("/all-category");
      console.log("axios data", data);
      this.categories = data.data.data;
      //this.actionAiMovieData = movieData;
    },

    //here send ai data to server for save this data in our database
    async actionAiMovieDataSendServer(payload) {
      console.log("actionAiMovieDataSendServer", payload);
      const response = await axios.post("/ai-movie-store", payload);
      navigateTo("/");
    },

    //here menual movie data send to server for save this data in our database
    async actionManualMovieDataSendToServer(payload) {
      console.log("actionManualMovieDataSendToServer", payload);
      const formData = new FormData();
      formData.append("title", payload.title);
      formData.append("description", payload.description);
      formData.append("category_id", payload.category);
      //formData.append('image', payload.file??"")
      if (payload.file) {
        formData.append("image", payload.file);
      }
      console.log("actionManualMovieDataSendToServer", [...formData]);
      const response = await axios.post("/movie-store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigateTo("/");
    },

    //fetch top movies from database
    async actionTopMovie(payload) {
      const data = await axios.get("/top-movies");
      this.topMovies = data.data.data.data;
    },

    //fetch category wise movie list from database
    async actionCategoryWiseMovie() {
      const data = await axios.get("/category-wise-movies");
      console.log("actionCategoryWiseMovie", data);
      this.categoryWiseMovie = data.data.data.data;
    },
  },
});
