<template>
  <div class="theater">
    <h1>{{ message }}</h1>
     <button v-on:click="theatersIndex()">Theaters</button>
    <div v-for="theater in theaters">
      {{theater}}
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
      message: "Theater information",
      theaters: [],
    };
  },
  created: function () {},
  methods: {
    theatersIndex: function () {
      console.log("theaters index...");
      axios.get("/api/theaters").then((response) => {
        console.log(response.data);
        this.theaters = response.data;
      });
    },
  },
};
</script>