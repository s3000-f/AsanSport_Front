import Vue from 'vue'

export default{
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
}
