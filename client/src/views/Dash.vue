<template>
  <div class="dash">
    <h1>Dashboard</h1>

    <div class="add-route">
      <h2>Add Route</h2>
      <form @submit.prevent="createNewRoute">
        <label for="code">Code</label>
        <input v-model="code" id="code" type="text" ref="formStart" />
        <label for="type">Type</label>
        <input v-model="type" id="type" type="text" />
        <label for="location1">Stop 1</label>
        <input v-model="stop1" type="text" id="location1" />
        <label for="location2">Stop 2</label>
        <input v-model="stop2" type="text" id="location2" />
        <label for="location3">Stop 3 (optional)</label>
        <input v-model="stop3" type="text" id="location3" />
        <label for="location4">Stop 4 (optional)</label>
        <input v-model="stop4" type="text" id="location4" />
        <label for="pay">Pay</label>
        <input v-model="pay" type="text" id="pay" />
        <label for="distance">Distance</label>
        <input v-model="distance" type="text" id="distance" />
        <label for="duration">Duration</label>
        <input v-model="duration" type="text" id="duration" />
        <button type="submit">Add Route</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      type: "M",
      stop1: "",
      stop2: "",
      stop3: "",
      stop4: "",
      pay: "",
      distance: "",
      duration: "",
    };
  },
  methods: {
    createNewRoute() {
      let payload = {
        code: this.code,
        type: this.type,
        stop1: this.stop1,
        stop2: this.stop2,
        stop3: this.stop3,
        stop4: this.stop4,
        pay: this.pay,
        distance: this.distance,
        duration: this.duration,
      };
      console.log(payload);
    },
  },
  mounted() {
    this.$refs.formStart.focus();
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
}
input {
  margin-bottom: 10px;
  text-align: center;
}
/* Without this workaround, autofill will disrupt v-model, causing fields to appear blank according to data() */
:-webkit-autofill {
  /* Expose a hook for JavaScript when auto fill is shown. */
  /* JavaScript can capture 'animationstart' events */
  animation-name: onAutoFillStart;
  transition: background-color 50000s ease-in-out 0s;
}
:not(:-webkit-autofill) {
  /* Expose a hook for JS onAutoFillCancel */
  /* JavaScript can capture 'animationstart' events */
  animation-name: onAutoFillCancel;
}
</style>