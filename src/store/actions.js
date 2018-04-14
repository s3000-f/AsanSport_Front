import axios from "axios";

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
    let config = {
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
    axios.post('http://api.shahbandegan.ir/v1/logout', {
      data: ''
    }).then(response => {
      console.log(response)
    }).catch(e => {
      console.log(e)
    })
    commit('logout');
    commit('resetUser');
    commit('resetGUser');
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
