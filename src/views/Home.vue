<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="moviesIndex()">Show Movies</button>
    <div v-for="movie in movies">
      {{movie.title}}
      
      <br>
      <!-- <button v-on:click="addToShowing(movie.id)">Click to purchase</button> -->
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "LaunchPad Movie-Lab",
      movies: [],
    };
  },
  created: function () {},
  methods: {
    moviesIndex: function () {
      console.log("movies index...");
      axios.get("/api/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    // addToShowing: function (movie_id) {
    //   console.log("creating showings...");
    //   console.log(movie_id);

    //   var params = {
    //     showng_id: movie_id,
    //   };
    //   axios.post("/api/showings", params).then((response) => {
    //     console.log(response.data);
    //   });
    // },
  },
};
</script>