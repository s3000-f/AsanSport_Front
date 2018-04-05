// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'

import router from './router'
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/plugins/slider.revolution/css/extralayers.css'
import './assets/plugins/slider.revolution/css/extralayers.css'
import './assets/plugins/slider.revolution/css/settings.css'
import './assets/css/essentials.css'
import './assets/css/layout.css'
import './assets/css/header-1.css'
import './assets/css/layout-shop.css'
import './assets/css/color_scheme/green.css'
import './assets/css/layout-RTL.css'
import './assets/plugins/bootstrap/RTL/bootstrap-flipped.min.css'
import './assets/plugins/bootstrap/RTL/bootstrap-rtl.min.css'
import {store} from "./store/store";
import GoogleAuth from 'vue-google-auth'

// Vue.use(require('cors'));
Vue.use(GoogleAuth, { client_id: '879091685695-57n6m7vs45lgnvb0rgsofv95i3844e7v.apps.googleusercontent.com' });
Vue.googleAuth().load();
Vue.config.productionTip = false;
Vue.use(require('vue-script2'));
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
