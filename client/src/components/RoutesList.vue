<template>
  <ul>
    <li v-for="item in routesList" :key="item.id">
      {{ titleCase(item.stop1) }} - {{ titleCase(item.stop2) }} Pay: ${{
        makeCurrency(item.pay)
      }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      routesList: "",
    };
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
      .catch((error) => console.log("error", error));

    console.log(this.routesList);
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