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
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      sheba: '',
      credit: 0,
      verified: false
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
  getters: {
    getToken: state => {
      return state.token
    },
    isLogged: state => {
      return state.isLoggedin
    },
    getErrors: state => {
      return state.errorMsg
    },
    getUser: state => {
      return state.user
    },
    getGoogleUser: state => {
      return state.googleUser
    },
    isGoogle: state => {
      return state.isGoogle
    }
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
    resetError: state => {
      state.hasError = false;
      state.errorMsg = '';
    },
    setUser: (state, dat) => {
      console.log(dat);
      state.user.id = dat['id'];
      state.user.fname = dat['given_name'];
      state.user.lname = dat['last_name'];
      state.user.email = dat['email'];
      state.user.mobile = dat['mobile'];
      state.user.sheba = dat['sheba'];
      state.user.verified = dat['is_verified'];
      state.user.credit = dat['credit'];
    },
    resetUser: (state) => {
      state.user = {
        id: '',
        fname: '',
        lname: '',
        email: '',
        mobile: '',
        sheba: '',
        verified: false,
        credit: 0,
      }
    },
    logout: state => {
      state.token = '';
      state.isLoggedin = false;
    },
    setGUser: (state, user) => {
      state.googleUser = user;
      state.isGoogle = true;
    },
    resetGUser: state => {
      state.googleUser = {};
      state.isGoogle = false;
    },
    verifyUser: state => {
      state.user.verified = true;
    },
    reload: (state, dat) => {
      state.reload = dat;
    }
  },
  actions: {
    setLogin: (context, p1) => {
      context.commit('setLogin', p1)
    },
    setError: (context, err) => {
      context.commit('setError', err)
    },
    resetError: context => {
      context.commit('resetError')
    },
    setUser: ({commit, state}) => {
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };
      axios.get('http://api.shahbandegan.ir/v1/profile', config).then(response => {
        if (response.status < 300) {
          commit('resetError');
          commit('setUser', response.data['data']);
        }
        else {
          console.log(response.data['message'])
        }
      }).catch(e => {
        console.log(e)
      })
    },
    logout: ({commit, state}) => {
      commit('logout');
      commit('resetUser');
      commit('resetGUser');
      const config = {
        headers: {
          Authorization: 'Bearer ' + state.token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      };
      axios.post('http://api.shahbandegan.ir/v1/logout', {}, config).then(response => {
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
      // axios.post('http://api.shahbandegan.ir/v1/logout', {
      //   data: ''
      // }).then(response => {
      //   console.log(response)
      // }).catch(e => {
      //   console.log(e)
      // })
    },
    setGUser: (context, user) => {
      context.commit('setGUser', user)
    },
    resetGUser: context => {
      context.commit('resetGUser');
    },
    verifyUser: context => {
      context.commit('verifyUser');
    },
    reload: (context, dat) => {
      context.commit('reload', dat)
    }
  }
});
