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
import '../node_modules/fullcalendar/dist/fullcalendar.css'

// import 'bootstrap/dist/css/bootstrap.css'
import {store} from "./store/store";
import GoogleAuth from 'vue-google-auth'
import Notifications from 'vue-notification'
import FullCalendar from 'vue-full-calendar'
import checkbox from 'vue-material-checkbox'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(checkbox)
// import $ from 'jquery'
// import 'expose-loader?$!expose-loader?jQuery!jquery'
// import './assets/js/scripts';
// import './assets/js/view/calendar'
// import "expose-loader?$!jquery"



// Vue.use(require('cors'));
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBY5ggLpYOJB1Uk8j0slBC3UHtQbVw87d8'
    }
});
Vue.use(FullCalendar);
Vue.use(GoogleAuth, {client_id: '879091685695-57n6m7vs45lgnvb0rgsofv95i3844e7v.apps.googleusercontent.com'});
Vue.googleAuth().load();
Vue.config.productionTip = false;
Vue.use(require('vue-script2'));
Vue.use(Notifications);
Vue.mixin({
  methods: {
    toPersianNumber: (number) => {
      let result = String(number);
      result = result.replace(new RegExp('1', 'g'), '۱');
      result = result.replace(new RegExp('2', 'g'), '۲');
      result = result.replace(new RegExp('3', 'g'), '۳');
      result = result.replace(new RegExp('4', 'g'), '۴');
      result = result.replace(new RegExp('5', 'g'), '۵');
      result = result.replace(new RegExp('6', 'g'), '۶');
      result = result.replace(new RegExp('7', 'g'), '۷');
      result = result.replace(new RegExp('8', 'g'), '۸');
      result = result.replace(new RegExp('9', 'g'), '۹');
      result = result.replace(new RegExp('0', 'g'), '۰');
      return result;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

