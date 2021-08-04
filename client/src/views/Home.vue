<template>
  <div class="home-card">
    <div class="home-card-header">
      <h1>Start New Trip</h1>
    </div>

    <passenger
      v-for="passenger in passengers"
      :key="passenger._id"
      :name="passenger.name"
      :pickup_city="passenger.pickup.city"
      :dropoff_city="passenger.dropoff.city"
    ></passenger>
    <CustomTrip />

    <TheFooter />
  </div>
</template>

<script>
import passenger from "../components/passengers/PassengersList.vue";
import CustomTrip from "../components/CustomTrip.vue";

export default {
  name: "Home",
  data() {
    return {
      passengers: [
        {
          name: "John Doe",
          pickup: {
            city: "New York",
            address: "123 Main St.",
          },
          dropoff: {
            city: "San Francisco",
            address: "456 Main St.",
          },
        },
      ],
    };
  },
  components: {
    passenger,
    CustomTrip,
  },
};
</script>

<style scoped>
h1 {
  color: #fff;
}
.home-card {
  margin: 0;
  width: 100%;
  background-color: #eff1ed;
}
.home-card-header {
  margin: 0;
  padding: 15px;
  background-color: #1d3354;
}
.home-card-body {
  padding: 15px;
}
</style>
