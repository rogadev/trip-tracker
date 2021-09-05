<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  provide: {
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
    titleCase(str) {
      str = str.toLowerCase().split(" ");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(" ");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
