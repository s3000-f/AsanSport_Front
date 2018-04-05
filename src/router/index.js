import Vue from 'vue'
import Router from 'vue-router'
import About from  '@/components/About'
import Coins from '@/components/Coins'
import Home from '@/components/Home'
import Login from '@/components/LoginRegister'
import SearchResults from '@/components/SearchResults'
import Field from '@/components/FieldDetails'
import FieldsList from '@/components/FieldsList'
import CheckOut from '@/components/CheckOut'
import Profile from '@/components/Profile'

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
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login-register',
      name: 'LoginRegister',
      component: Login
    },{
      path: '/fields/:id/:kir',
      name: 'Field',
      component: Field
    },
    {
      path: '/search-results',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/check-out',
      name: 'CheckOut',
      component: CheckOut
    },
    {
      path: '/fields',
      name: 'FieldsList',
      component: FieldsList
    }
  ]
})
