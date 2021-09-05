<template>
  <div class="trips-list">
    <trip-details
      v-for="trip in trips"
      :key="trip._id"
      :details="trip"
    ></trip-details>
  </div>
</template>

<script>
import TripDetails from "./TripDetails.vue";

export default {
  components: {
    "trip-details": TripDetails,
  },
  props: ["trips"],
};
</script>

<style scoped>
.trips-list {
  margin: 10px;
}
</style>