<template>
  <div class="trips">
    <h1>Trips</h1>
    <router-link to="/">back</router-link>

    <day-trips title="Today" :date="todaysDate"></day-trips>
    <day-trips title="Tomorrow" :date="tomorrowsDate"></day-trips>

    <div class="trips-list-container"></div>
  </div>
</template>

<script>
import DayTrips from "../components/DayTrips.vue";

// Used to calculate today's date & tomorrows date for use in the day-trips components.
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export default {
  components: {
    "day-trips": DayTrips,
  },
  data() {
    return {
      tripsData: null,
      todaysDate: today,
      tomorrowsDate: tomorrow,
    };
  },
  beforeMount() {
    let requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };
    fetch("http://localhost:3000/trips", requestOptions)
      .then((response) => response.text())
      .then((result) => (this.tripsData = JSON.parse(result)))
      .catch((error) => console.log("error", error));
  },
};
</script>

<style scoped>
.add-trips-container,
.trips-list-container {
  border: 1px solid black;
  margin: 30px;
}
</style>