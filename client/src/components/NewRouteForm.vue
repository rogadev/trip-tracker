<template>
  <form
    @submit.prevent="attemptCreateNewRoute"
    id="new-route"
    autocomplete="off"
  >
    <label for="type">Type</label>
    <select name="type" id="type" v-model="type">
      <option value="M">Ministry</option>
      <option value="P">Personal</option>
    </select>

    <label for="code">Code</label>
    <input v-model="code" id="code" type="text" ref="formStart" />

    <label for="stop1">Stop 1</label>
    <select name="stop1" id="stop1" v-model="stop1">
      <option
        v-for="location in destinations"
        :key="location + '1'"
        :value="location.toLowerCase()"
      >
        {{ location }}
      </option>
    </select>

    <label for="stop2">Stop 2</label>
    <select name="stop2" id="stop2" v-model="stop2">
      <option
        v-for="location in destinations"
        :key="location + '2'"
        :value="location.toLowerCase()"
      >
        {{ location }}
      </option>
    </select>

    <label for="pay">Pay</label>
    <input v-model="pay" type="text" id="pay" />
    <label for="distance">Distance (km)</label>
    <input v-model="distance" type="text" id="distance" />
    <label for="duration">Duration (minutes)</label>
    <input v-model="duration" type="text" id="duration" />
    <button v-if="!loading" type="submit" :disabled="!validated">
      Create New Route
    </button>
    <div v-else class="loading">
      <small>creating...</small>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    attemptCreateNewRoute() {
      this.loading = true;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(this.payload);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/routes", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.log("error", error))
        .finally(this.$emit("closeModal"));
    },
  },
  computed: {
    validated() {
      let valid = true;
      let code = this.payload.code;
      let type = this.payload.type;
      let s1 = this.payload.stop1;
      let s2 = this.payload.stop2;
      let pay = this.payload.pay;
      let distance = this.payload.distance;
      let duration = this.payload.duration;

      if (code.length < 1 || code.length > 3) valid = false;
      if (type.length < 1 || type.length > 2) valid = false;
      if (!s1 || !s2) valid = false;
      if (pay < 1 || distance < 1 || duration < 1) valid = false;

      console.log(this.payload);
      return valid;
    },
    payload() {
      let distance = this.distance ? this.distance * 10 : 0;
      let pay = this.pay ? this.pay * 100 : 0;
      let duration = this.duration ? this.duration : 0;
      return {
        code: this.code,
        type: this.type,
        stop1: this.stop1,
        stop2: this.stop2,
        pay: Number.parseInt(pay),
        distance: Number.parseInt(distance),
        duration: Number.parseInt(duration),
      };
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
      pay: null,
      distance: null,
      duration: null,
      destinations: [
        "Courtenay",
        "Cumberland",
        "Comox Valley",
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
        "Lake Cowichan",
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