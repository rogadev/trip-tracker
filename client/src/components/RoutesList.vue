<template>
  <div class="routes-list">
    <h2>Existing Routes</h2>
    <route-detail></route-detail>
    <li v-for="item in routesList" :key="item.id">
      {{ titleCase(item.stop1) }} - {{ titleCase(item.stop2) }} Pay: ${{
        makeCurrency(item.pay)
      }}
    </li>
  </div>
</template>

<script>
import RouteDetail from "./RouteDetail.vue";

export default {
  data() {
    return {
      routesList: "",
    };
  },
  components: {
    "route-detail": RouteDetail,
  },
  beforeMount() {
    var requestOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    fetch("http://localhost:3000/routes", requestOptions)
      .then((response) => response.text())
      .then((result) => (this.routesList = JSON.parse(result)))
      .catch((error) => console.error("API Error (/routes): ", error));
  },
  methods: {
    titleCase(str) {
      str = str.toLowerCase().split(" ");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(" ");
    },
    makeCurrency(str) {
      let num = Number.parseFloat(str);
      num = num / 100;
      return num.toFixed(2);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.routes-list {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 400px;
  margin: 20px auto 0 auto;
  padding: 20px 0;
}
h2 {
  padding: 0 15px 15px 15px;
  margin: 0;
}
</style>