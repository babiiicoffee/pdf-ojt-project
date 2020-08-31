import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

// import axios from 'axios'
// Vue.use( axios)
   
// Vue.config.productionTip = false

// Vue.use(axios)

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')