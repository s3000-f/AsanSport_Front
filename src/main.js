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
    },
    toEnglishNumber: (number) => {
      let result = String(number);
      result = result.replace(new RegExp('۱', 'g'), '1');
      result = result.replace(new RegExp('۲', 'g'), '2');
      result = result.replace(new RegExp('۳', 'g'), '3');
      result = result.replace(new RegExp('۴', 'g'), '4');
      result = result.replace(new RegExp('۵', 'g'), '5');
      result = result.replace(new RegExp('۶', 'g'), '6');
      result = result.replace(new RegExp('۷', 'g'), '7');
      result = result.replace(new RegExp('۸', 'g'), '8');
      result = result.replace(new RegExp('۹', 'g'), '9');
      result = result.replace(new RegExp('۰', 'g'), '0');
      return result;
    },
    s2d: (str) => {
      let result = String(str);
      return result.replace(new RegExp(' ', 'g'), '-');
    }
  }
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.isLoggedin) {
            next({
                path: '/login-register',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
    if (to.matched.some(record => record.meta.requiresGuest)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.isLoggedin) {
            next({
                path: '/profile'
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
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

