<template>
  <div class="login">
    <h1>Granny Go Go</h1>
    <h2>Trip Assistant</h2>
    <login-card></login-card>
    <div class="login-image">Login Image</div>
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