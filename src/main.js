import Vue from 'vue';
import App from './App.vue';
import 'bootswatch/dist/cosmo/bootstrap.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
