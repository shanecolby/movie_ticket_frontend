<template>
  <div class="showing">
    <h1>{{ message }}</h1>
     <button v-on:click="showingsIndex()">Show Times</button>
    <div v-for="showing in showings">
      {{showing}}
      <button v-on:click="createSale()">Purchase</button>
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
      message: "Movie Showings",
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
    createSale: function () {
      var params = {
        showing_id: this.showing_id,
        customer_name: this.customer_name,
        customer_email: this.customer_email,
      };
      axios.post("/api/sales", params).then((response) => {
        console.log(response.data);
        this.sales.push(response.data);
      });
    },
  },
};
</script>