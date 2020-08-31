<template>
  <v-app id="login">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col id="card" cols="12" sm="8" md="4">
            <transition>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Registration form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="firstName"
                          :rules="[rules.required]"
                          label="First Name"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="lastName"
                          :rules="[rules.required]"
                          label="Last Name"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="showPassword ? 'text' : 'password'"
                          name="password"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="showPassword = !showPassword"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          block
                          v-model="verify"
                          :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="showConfirmPassword ? 'text' : 'password'"
                          name="confirmpassword"
                          label="Confirm Password"
                          counter
                          @click:append="showConfirmPassword = !showConfirmPassword"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" v-on:click="register">Sign Up</v-btn>
                </v-card-actions>
              </v-card>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  mounted() {
    console.log("Component mounted.");
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  data: () => ({
    valid: true,

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    showPassword: false,
    showConfirmPassword: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "atleast 8 characters"
    }
  }),
  methods: {
    register(e) {
      if (this.$refs.registerForm.validate()) {
        // submit form to server/API here...
        e.preventDefault();

        let userData = {
          firstname: this.firstName,
          lastname: this.lastName,
          email: this.email,
          password: this.password
        };

        console.log(this.userData);
        this.$router.push("login");

        // axios({
        //   method: "post",
        //   url: "http://localhost:8000/users",
        //   data: userData
        // })
        //   .then(function(response) {
        //     //handle success
        //     console.log(response);
        //     // this.users.push(user);
        //     this.resetForm();
        //   })
        //   .catch(function(response) {
        //     //handle error
        //     console.log(response);
        //   });
      }
    }
  }
};
</script>

<style>
</style>