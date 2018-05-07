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
import Collaboration from '@/components/Collaboration'
import Order from '@/components/Order'
import Faq from '@/components/Faq'
import Terms from '@/components/Terms'
import Privacy from '@/components/Privacy'
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
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login-register',
      name: 'LoginRegister',
      component: Login,
        meta: { requiresGuest: true }
    },
    {
      path: '/fields',
      name: 'FieldsList',
      component: FieldsList
    },
    {
      path: '/fields/category-:cat',
      name: 'FieldsList',
      component: FieldsList
    },
    {
      path: '/fields/q=:query',
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
      path:'/collaboration',
      name: 'Collaboration',
      component: Collaboration
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/privacy-policy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '*',
      name: '404',
      component: e404
    }
  ]
})
