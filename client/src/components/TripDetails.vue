<template>
  <div class="trip-details">
    <p>{{ formattedDate }}</p>
    <p>
      {{ titleCase(details.route.stop1) }} /
      {{ titleCase(details.route.stop2) }}
    </p>
    <p>Pay: ${{ formattedPay }}</p>
  </div>
</template>

<script>
export default {
  props: ["details"],
  computed: {
    formattedDate() {
      let date = new Date(this.details.date);
      return date.toDateString();
    },
    formattedPay() {
      return Number.parseFloat(this.details.route.pay / 100).toFixed(2);
    },
  },
  mounted() {
    console.log(this.details.route);
  },
  inject: ["titleCase"],
};
</script>

<style scoped>
.trip-details {
  margin: 10px;
  border: 1px solid darkgreen;
}
</style>