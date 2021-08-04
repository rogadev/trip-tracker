<template>
  <div class="list-container" @click="startTrip">
    <h3 class="name">{{ name }}</h3>
    <div class="bottom-container">
      <div class="left-side">
        <small>From</small>
        <p class="bolder">{{ pickup_city }}</p>
      </div>
      <div class="right-side">
        <small>To</small>
        <p class="bolder">{{ dropoff_city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "pickup_city", "dropoff_city"],
  methods: {
    startTrip() {
      console.log(
        "Start trip to " + this.pickup_city + " then on to " + this.dropoff_city
      );
    },
  },
};
</script>

<style scoped>
.list-container {
  border: 1px solid #1d3354;
  background-color: #fff;
  margin: 5px;
  cursor: pointer;
}
.bottom-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left-side,
.right-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}
.left-side {
  text-align: left;
  padding-left: 15px;
}
.right-side {
  text-align: right;
  padding-right: 15px;
}
p,
small {
  margin: 0;
}
.bolder {
  font-weight: 600;
}
h3 {
  margin: 10px 0;
}
</style>