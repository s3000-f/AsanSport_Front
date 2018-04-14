import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    isLoggedin: false,
    token: '',
    hasError: false,
    errorMsg: '',
    user: {
      id: '',
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      sheba: '',
      credit: 0,
      verified: false,
      isManager: false
    },
    reload: true,
    googleUser: {},
    isGoogle: false
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, {expires: 3, secure: false}),
      removeItem: key => Cookies.remove(key)
    }
  })],
  getters: getters,
  mutations: mutations,
  actions: actions
});
