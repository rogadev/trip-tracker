<template>
  <div class="trips">
    <h1>Trips</h1>
    <router-link to="/">back</router-link>

    <day-trips
      title="Today"
      :date="todaysDate"
      :trips="todaysTrips"
    ></day-trips>
    <day-trips
      title="Tomorrow"
      :date="tomorrowsDate"
      :trips="tomorrowsTrips"
    ></day-trips>

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
      todaysTrips: null,
      tomorrowsTrips: null,
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
      .then((result) => {
        this.tripsData = JSON.parse(result);
      })
      .then(() => this.getTodaysTrips())
      .then(() => this.getTomorrowsTrips())
      .catch((error) => console.error("API Error: ", error))
      .finally(() => console.log("Trips.vue: Interaction with API complete."));
  },
  methods: {
    getTodaysTrips() {
      let trips = [];
      for (const trip of this.tripsData) {
        if (trip.date == today) trips.unshift(trip);
      }
      console.log("today", trips);
    },
    getTomorrowsTrips() {},
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