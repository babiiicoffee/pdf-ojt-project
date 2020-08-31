<template>
  <v-app>
    <Header/>
    <!-- <router-link to="/register">create account</router-link> -->

    <v-main>
      <!-- <Home></Home> -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>


<script>
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/components/modules/Home.vue";
import Header from "@/components/modules/frames/Header.vue";
import router from "@/router";
export default {
  name: "App",
  components: {
    Home,
    Header
  }
};
</script>

<style>
</style>
