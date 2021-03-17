<template>
  <div class="admin">
    <h1>{{ message }}</h1>
     <button v-on:click="salesIndex()">Total Sales</button>
    <div v-for="sale in sales">
      {{sale.id}}
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
      message: "Admin Access",
      sales: [],
    };
  },
  created: function () {},
  methods: {
    salesIndex: function () {
      console.log("sales index...");
      axios.get("/api/sales").then((response) => {
        console.log(response.data);
        this.theaters = response.data;
      });
    },
  },
};
</script>