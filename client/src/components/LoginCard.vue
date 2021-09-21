<template>
  <form @submit.prevent="attemptSigninSignup" class="card-container">
    <h4 v-if="!signIn">New User</h4>
    <div class="input-wrapper">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="email" autocomplete="username" />
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input
        v-model="password"
        id="password"
        type="password"
        :autocomplete="signIn ? 'current-password' : 'new-password'"
      />
    </div>
    <p class="feedback" v-if="feedbackMessage">{{ feedbackMessage }}</p>
    <button type="submit">
      {{ signIn ? "Sign In" : "Sign Up" }}
    </button>
    <br />
    <small v-if="signIn"
      >Are you a new user?
      <br />
      <span class="options-link" @click="toggleSignIn">Sign up instead</span
      >.</small
    >
    <small v-else
      >Already an existing user?<br />
      <span class="options-link" @click="toggleSignIn">Sign in instead</span
      >.</small
    >
  </form>
</template>

<script>
export default {
  name: "login-card",
  data() {
    return {
      signIn: true,
      feedbackMessage: null,
      email: "",
      password: "",
    };
  },
  methods: {
    attemptSigninSignup() {
      if (this.signin) {
        // Sign IN
        fetch("http://localhost:3000/user/signin", this.requestOptions())
          .then((response) => response.text().then((text) => console.log(text)))
          .catch((err) => {
            console.log(err);
            this.feedbackMessage = err;
          });
      } else {
        // Sign UP
        fetch("http://localhost:3000/user/signup", this.requestOptions())
          .then((response) => {
            // 409, conflict, user already exists.
            if (response.status == 409) {
              this.feedbackMessage =
                "A user with that email address already exists.";
            }
            // 100, success, new user created.
            if (response.status == 200) {
              this.$router.push({ name: "success" });
            }
          })
          .catch((err) => {
            console.log(err);
            this.feedbackMessage = err;
          });
      }
    },
    toggleSignIn() {
      this.signIn = !this.signIn;
      this.feedbackMessage = "";
    },
    requestOptions() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      return {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
    },
  },
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
.options-link {
  color: blue;
  cursor: pointer;
}
button {
  margin-bottom: 10px;
  width: 100%;
}
h4 {
  margin: 0 0 10px 0;
}
.feedback {
  font-weight: 600;
  color: red;
  width: 225px;
}
</style>