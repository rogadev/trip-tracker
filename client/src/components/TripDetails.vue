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
      date.setDate(date.getDate() + 1);
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
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 20px;
  width: 33%;
  margin: 20px auto;
}
</style>