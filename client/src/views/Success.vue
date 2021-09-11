<template>
  <div class="success">
    <h1>Success!</h1>
    <p class="larger bold">Your new account has been created.</p>
    <small>
      You should automatically redirected to the
      <router-link to="/login">log in</router-link> page in
      <span class="bold">{{ secondsRemaining }}</span>
      seconds...
    </small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondsRemaining: 7,
    };
  },
  created() {
    /* Execute a count-down sequence and route back to login page once complete. */
    setInterval(() => {
      if (this.secondsRemaining <= 1) {
        this.secondsRemaining--;
        // add just enough time to see the timer hit 0 and redirect back to login page
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 250);
      } else this.secondsRemaining--;
    }, 1000);
  },
};
</script>

<style scoped>
.larger {
  font-size: 1.3em;
}
.bold {
  font-weight: bold;
}
</style>