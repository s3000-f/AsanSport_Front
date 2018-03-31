import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    isLoggedin: false,
    token: '',
    hasError: false,
    errorMsg: ''
  },
  plugins: [createPersistedState({
    storage: {
      getItem: key => Cookies.get(key),
      setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })],
  getters: {
    getToken: state => {return state.token},
    isLogged: state => {return state.isLoggedin},
    getErrors: state => {return state.errorMsg}
  },
  mutations: {
    setLogin: (state, el1) => {
      state.isLoggedin = true;
      state.token = el1;
    },
    setError: (state, err) => {
      state.hasError = true;
      state.errorMsg = err;
    },
    resetError: state =>{
      state.hasError = false;
      state.errorMsg = '';
    }
  },
  actions: {
    setLogin: (context, p1) => {
      context.commit('setLogin',p1)
    },
    setError: (context, err) =>{
      context.commit('setError', err)
    },
    resetError: context =>{
      context.commit('resetError')
    }
  }
});
