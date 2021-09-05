<template>
  <div class="new-trip">
    <h2>Add New Trip</h2>
    <form
      @submit.prevent="attemptAddTrip"
      class="new-trip-form"
      autocomplete="off"
    >
      <div class="input-area" v-if="!routeFound">
        <label for="trip-date">Trip Date: </label>
        <input type="date" id="trip-date" v-model="date" />
        <br />
        <label for="from">From: </label>
        <select name="from" id="from" v-model="from" :disabled="!haveDate">
          <option
            v-for="location in destinations"
            :key="location + '1'"
            :value="location.toLowerCase()"
          >
            {{ location }}
          </option>
        </select>
        <br />
        <label for="to">To: </label>
        <select name="to" id="to" v-model="to" :disabled="!haveFrom">
          <option
            v-for="location in destinations"
            :key="location + '2'"
            :value="location.toLowerCase()"
          >
            {{ location }}
          </option>
        </select>
      </div>
      <p class="feedback-message" v-if="feedbackMessage">
        {{ feedbackMessage }}
      </p>
      <button
        type="button"
        @click.prevent="searchForRoute"
        :disabled="!haveTo"
        v-if="!routeFound"
      >
        {{ feedbackMessage ? "Try Again" : "Find Route" }}
      </button>

      <div class="confirm-trip" v-if="routeFound">
        <p>Stop: {{ titleCase(responseData.stop1) }}</p>
        <p>Stop: {{ titleCase(responseData.stop2) }}</p>
        <p>Pay: ${{ payString(responseData.pay) }}</p>
      </div>
      <button type="submit" v-if="routeFound">Add Trip</button>
    </form>

    <trips-list :trips="tripsList"></trips-list>
  </div>
</template>

<script>
import TripsList from "../components/TripsList.vue";

export default {
  components: {
    "trips-list": TripsList,
  },
  beforeMount() {
    this.populateList();
  },
  inject: ["destinations", "titleCase"],
  computed: {
    haveDate() {
      let value = this.date;
      let result = false;
      switch (typeof value) {
        case "number":
          result = true;
          break; //required for
        case "string":
          result = !isNaN(Date.parse(value));
          break;
        case "object":
          if (value instanceof Date) {
            result = !isNaN(value.getTime());
          }
          break;
        default:
          result = false;
          break;
      }
      return result;
    },
    haveFrom() {
      return this.from ? true : false;
    },
    haveTo() {
      return this.to ? true : false;
    },
  },
  data() {
    return {
      date: new Date(),
      to: "",
      from: "",
      routeFound: false,
      feedbackMessage: "",
      responseData: null,
      tripsList: [],
    };
  },
  methods: {
    payString(input) {
      return Number.parseFloat(input / 100).toFixed(2);
    },
    resetForm() {
      this.date = new Date();
      this.to = "";
      this.from = "";
      this.routeFound = false;
    },
    searchForRoute() {
      // Does route exist?
      var requestOptions = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      };

      fetch(
        `http://localhost:3000/routes/${encodeURI(this.from)}/${encodeURI(
          this.to
        )}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => (this.responseData = JSON.parse(result)))
        .catch((error) => console.error("API Error (/routes): ", error))
        .finally(() => {
          this.routeFound = this.responseData ? true : false;
        });
      // Yes? Add trip to trips.
      // No? Ask for pay, duration, and distance. Create route.
    },
    attemptAddTrip() {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let payload = {
        date: this.date,
        route: this.responseData,
      };

      var raw = JSON.stringify(payload);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/trips", requestOptions)
        .then((response) => response.text())
        .catch((error) => console.error("API Error (/trips): ", error))
        .finally(() => {
          this.resetForm();
          this.populateList();
        });
    },
    populateList() {
      var requestOptions = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      };

      fetch("http://localhost:3000/trips", requestOptions)
        .then((response) => response.text())
        .then((result) => (this.tripsList = JSON.parse(result)))
        .catch((error) => console.error("API Error (/routes): ", error));
    },
  },
};
</script>

<style scoped>
/* TODO: Fix styles (css grid? table?) */

.input-area {
  text-align: left;
  width: 240px;
  margin: 0 auto;
}
input {
  text-align: center;
}
.new-trip {
  padding: 20px;
}
.new-trip > h2 {
  margin-top: 0;
}
button {
  margin: 10px;
}
p.feedback-message {
  color: darkred;
  text-align: center;
  margin: 10px 0 0 0;
  padding: 0;
}
</style>