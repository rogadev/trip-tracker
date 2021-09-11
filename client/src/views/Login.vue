<template>
  <div class="login-container">
    <h1>Sign In</h1>
    <login-card></login-card>
  </div>
</template>

<script>
import LoginCard from "../components/LoginCard.vue";
export default {
  components: {
    "login-card": LoginCard,
  },
};
</script>

<style scoped>
</style>