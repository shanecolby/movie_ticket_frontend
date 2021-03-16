<template>
  <div class="showing">
    <h1>{{ message }}</h1>
     <button v-on:click="showingsIndex()">Show Times</button>
    <div v-for="showing in showings">
      {{showing}}
      <p></p>
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
      message: "Showings...",
      showings: [],
    };
  },
  created: function () {},
  methods: {
    showingsIndex: function () {
      console.log("showings index...");
      axios.get("/api/showings").then((response) => {
        console.log(response.data);
        this.showings = response.data;
      });
    },
  },
};
</script>