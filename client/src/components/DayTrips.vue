<template>
  <div class="day-trips">
    <h2>{{ title }}</h2>

    <trips-list :trips="trips"></trips-list>

    <div class="bottom-bar">
      <h4>Trips: {{ tripCount || "0" }}</h4>
      <h4>Pay: ${{ payCount || "0.00" }}</h4>
      <button>add trip {{ month }} {{ day }}</button>
    </div>
  </div>
</template>

<script>
import TripsList from "./TripsList.vue";

export default {
  components: {
    "trips-list": TripsList,
  },
  props: ["title", "trips", "date"],
  data() {
    return {
      month: this.date.getMonth(), // (January gives 0),
      day: this.date.getDate(), // (1-31),
      dateString: this.date.toDateString(),
    };
  },
};
</script>

<style scoped>
.day-trips {
  border: 1px solid royalblue;
  margin: 10px;
}
button {
  margin: 10px;
  padding: 5px 10px;
  height: fit-content;
}
.bottom-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>