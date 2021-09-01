<template>
  <form
    @submit.prevent="attemptCreateNewRoute"
    id="new-route"
    autocomplete="off"
  >
    <label for="type">Type</label>
    <select name="type" id="type">
      <option value="M">Ministry</option>
      <option value="P">Personal</option>
    </select>

    <label for="code">Code</label>
    <input v-model="code" id="code" type="text" ref="formStart" />

    <label for="stop1">Stop 1</label>
    <select name="stop1" id="stop1">
      <option
        v-for="location in destinations"
        :key="location + '1'"
        :value="location"
      >
        {{ location }}
      </option>
    </select>

    <label for="stop2">Stop 2</label>
    <select name="stop2" id="stop2">
      <option
        v-for="location in destinations"
        :key="location + '2'"
        :value="location"
      >
        {{ location }}
      </option>
    </select>

    <label for="pay">Pay</label>
    <input v-model="pay" type="text" id="pay" />
    <label for="distance">Distance</label>
    <input v-model="distance" type="text" id="distance" />
    <label for="duration">Duration</label>
    <input v-model="duration" type="text" id="duration" />
    <button v-if="!loading" type="submit">Create New Route</button>
    <div v-else class="loading">
      <small>creating...</small>
    </div>
  </form>
</template>

<script>
import { writeNewRoute } from "../db";

export default {
  methods: {
    attemptCreateNewRoute() {
      this.loading = true;
      writeNewRoute(
        this.code,
        this.type,
        this.stop1,
        this.stop2,
        this.pay,
        this.distance,
        this.duration
      );
      this.$emit("closeModal");
      this.loading = false;
    },
  },
  emits: ["closeModal"],
  data() {
    return {
      loading: false,
      code: "",
      type: "M",
      stop1: "",
      stop2: "",
      pay: "",
      distance: "",
      duration: "",
      destinations: [
        "Courtenay",
        "Cumberland",
        "Nanaimo",
        "Victoria",
        "Campbell River",
        "Parksville",
        "Qualicum",
        "Port Alberni",
        "Ladysmith",
        "Duncan",
        "Crofton",
        "Errington",
        "Coombs",
        "Whisky Creek",
        "Wellington",
        "Cassidy",
        "Cedar",
        "Lantzville",
        "Nanoose Bay",
        "Chemanius",
        "Saltair",
        "Qualicum Bay",
        "Bowser",
        "Cobble Hill",
        "Mill Bay",
        "Dashwood",
      ],
    };
  },
  mounted() {
    this.$refs.formStart.focus();
  },
};
</script>

<style scoped>
input {
  text-align: center;
}
</style>