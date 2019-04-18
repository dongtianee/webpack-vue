// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import './assets/css/base';
import router from './router';
import Utils from './common/utils';
Vue.use(Utils);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
});