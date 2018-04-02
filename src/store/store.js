import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'

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
      fname:'',
      lname: '',
      email: '',
      mobile:'',
      sheba: '',
      verified: false
    }
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
    getErrors: state => {return state.errorMsg},
    getUser: state => {return state.user}
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
    },
    setUser: (state, dat) =>{
      console.log(dat);
      state.user.id = dat['id'];
      state.user.fname = dat['given_name'];
      state.user.lname = dat['last_name'];
      state.user.email = dat['email'];
      state.user.mobile = dat['mobile'];
      state.user.sheba = dat['sheba'];
      state.user.verified = dat['is_verified'];
    },
    resetUser: (state) =>{
      state.user = {
        id: '',
        fname:'',
        lname: '',
        email: '',
        mobile:'',
        sheba: '',
        verified: false
      }
    },
    logout: state =>{
      state.token = '';
      state.isLoggedin = false;
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
    },
    setUser: ({commit , state}) => {
      axios.get('http://api.shahbandegan.ir/v1/profile',{
        headers: {
          'Authorization': 'Bearer '+ state.token
        }
      }).then(response =>{
        if (response.status < 300){
          commit('resetError');
          commit('setUser', response.data['data']);
        }
        else{
          console.log(response.data['message'])
        }
      }).catch(e =>{
        console.log(e)
      })
    },
    logout: context => {
      context.commit('logout');
      context.commit('resetUser');
    }
  }
});
