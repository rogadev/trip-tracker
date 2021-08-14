<template>
  <div class="card-container">
    <div class="input-wrapper">
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="johndoe@gogogranny.com" />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="password123" />
    </div>
    <button>Sign In</button>
  </div>
</template>

<script>
export default {
  name: "login-card",
};
</script>

<style scoped>
.card-container {
  border: 1px solid rgb(31, 31, 31);
  border-radius: 3px;
  box-shadow: 1px 2px 4px rgba(34, 34, 34, 0.404);
  padding: 20px;
  width: fit-content;
  margin: 20px auto;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
label {
  text-align: left;
  padding-bottom: 5px;
}
button {
  color: white;
}
</style>