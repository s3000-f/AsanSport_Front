export default {
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
}
