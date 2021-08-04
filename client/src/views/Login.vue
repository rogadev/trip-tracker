<template>
  <div class="login-card">
    <div class="card-content">
      <h1>Login</h1>
      <form @submit="login">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login(e) {
      e.preventDefault();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 50vw;
  padding: 20px 50px 50px 50px;
  margin: auto;
  margin-top: 25vh;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: #4caf50 0px 0px 0px 1px;
}
.car-content {
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 15px;
}
button {
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
}
</style>
