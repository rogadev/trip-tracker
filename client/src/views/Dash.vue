<template>
  <div>
    <h1>Trip Asssistant</h1>
    <h3>Navigate to:</h3>
    <div class="container">
      <router-link to="/routes">Manage Routes</router-link>
      <router-link to="/trips">Manage Trips</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>