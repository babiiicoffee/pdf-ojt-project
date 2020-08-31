<template>
  <div class="topnav">
    <v-app-bar app color="primary" dark>
      <v-spacer/>
      <div v-if="loginShow" @click="login">
        <v-btn id="v-btn" color="primary" dark>Login</v-btn>
      </div>
      <div v-else-if="signUpShow" v-on:click="signUp">
        <v-btn id="v-btn" color="primary" dark>Sign in</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "topnav",
  data: () => ({
    signUpShow: true,
    loginShow: false
  }),
  methods: {
    login() {
      this.loginShow = false;
      this.$router.push("/");
      this.signUpShow = true;
    },
    signUp() {
      this.signUpShow = false;
      this.loginShow = true;
      this.$router.push("register");
    }
  }
};
</script>

      