<template>
  <div class="trips">
    <h1>Trips</h1>
    <router-link to="/">back</router-link>
    <new-trip-form></new-trip-form>
  </div>
</template>

<script>
import NewTripForm from "../components/NewTripForm.vue";
// // Used to calculate today's date & tomorrows date for use in the day-trips components.
// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(tomorrow.getDate() + 1);

export default {
  components: {
    "new-trip-form": NewTripForm,
  },
  // beforeMount() {
  //   let requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   };
  //   fetch("http://localhost:3000/trips", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       this.tripsData = JSON.parse(result);
  //     })
  //     .catch((error) => console.error("API Error: ", error))
  //     .finally(() => console.log("Trips.vue: Interaction with API complete."));
  // },
};
</script>

<style scoped>
.add-trips-container,
.trips-list-container {
  border: 1px solid black;
  margin: 30px;
}
</style>