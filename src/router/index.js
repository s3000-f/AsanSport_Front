import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Login from '@/components/LoginRegister'
import SearchResults from '@/components/SearchResults'
import Field from '@/components/FieldDetails'
import FieldsList from '@/components/FieldsList'
import Profile from '@/components/Profile'
import e404 from '@/components/404'
import ManagerLogin from '@/components/ManagerLogin'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login-register',
      name: 'LoginRegister',
      component: Login
    },
    {
      path: '/fields',
      name: 'FieldsList',
      component: FieldsList
    },
    {
      path: '/fields/:id/:name',
      name: 'Field',
      component: Field
    },
    {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path:'/manager-login',
      name: 'ManagerLogin',
      component: ManagerLogin
    },
    {
      path: '*',
      name: '404',
      component: e404
    }
  ]
})
