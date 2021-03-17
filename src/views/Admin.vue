<template>
  <div class="admin">
    <h1>{{ message }}</h1>
     <button v-on:click="salesIndex()">Total Sales</button>
     <br>
     <button v-on:click="updateShowings()">Edit Showing</button>
    <div v-for="sale in sales">
      {{sale.id}}
      <p></p>
      
      </div>
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
      movie_id: "",
      auditorium_id: "",
      time: "",
      available_seats: "",
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
    updateShowings: function () {
      console.log("creating exercise...");
      var params = {
        movie_id: this.movie_id,
        auditorium_id: this.auditorium_id,
        time: this.time,
        available_seats: this.available_seats,
      };
      axios.post("/api/showings", params).then((response) => {
        console.log(response.data);
        this.showings.push(response.data);
      });
    },
  },
};
</script>