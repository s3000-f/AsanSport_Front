import axios from "axios";
import router from '../router/index'

export default {
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
    axios.get('https://api.asansport.com/v1/profile', config).then(response => {
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
  setManager: (context) => {
    context.commit('setManager');
  },
  logout: ({commit, state}) => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + state.token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    axios.post('https://api.asansport.com/v1/logout', {}, config).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    })
    axios.post('https://api.asansport.com/v1/logout', {
      data: ''
    }).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    })
    commit('logout');
    commit('resetUser');
    commit('resetGUser');
    router.push('/');
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
