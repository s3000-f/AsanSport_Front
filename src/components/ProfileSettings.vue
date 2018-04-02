<template>
  <div class="col-lg-9 col-md-9 col-sm-8">

    <ul class="nav nav-tabs nav-top-border">
      <li class="active"><a href="#info" data-toggle="tab">Personal Info</a></li>
      <li><a href="#password" data-toggle="tab">Password</a></li>
    </ul>

    <div class="tab-content margin-top-20">

      <!-- PERSONAL INFO TAB -->
      <div class="tab-pane fade in active" id="info">
        <form role="form" id="personalForm" @submit.prevent="updateUser">
          <div class="form-group">
            <label class="control-label">First Name</label>
            <input type="text" v-bind:placeholder="user.fname" class="form-control" v-model="userfinal.given_name">
          </div>
          <div class="form-group">
            <label class="control-label">Last Name</label>
            <input type="text" v-bind:placeholder="user.lname" class="form-control" v-model="userfinal.last_name">
          </div>
          <div class="form-group">
            <label class="control-label">Mobile Number</label>
            <input type="text" v-bind:placeholder="user.mobile" class="form-control" v-model="userfinal.mobile">
          </div>
          <div class="form-group">
            <label class="control-label">Email</label>
            <input type="text" v-bind:placeholder="user.email" class="form-control" v-model="userfinal.email">
          </div>
          <div class="form-group">
            <label class="control-label">Sheba</label>
            <input type="text" v-bind:placeholder="user.sheba" class="form-control" v-model="userfinal.sheba">
          </div>
          <div class="margiv-top10">
            <button class="btn btn-primary" ><i class="fa fa-check"></i> Save Changes </button>
            <button class="btn btn-default" v-on:click="isCancel = true">Cancel </button>
          </div>
        </form>
      </div>
      <!-- /PERSONAL INFO TAB -->

      <!-- PASSWORD TAB -->
      <div class="tab-pane fade" id="password">

        <form id="passForm" @submit.prevent="updatePassword">

          <div class="form-group">
            <label class="control-label">Current Password</label>
            <input type="password" class="form-control" v-model="password.current">
          </div>
          <div class="form-group">
            <label class="control-label">New Password</label>
            <input type="password" class="form-control" v-model="password.newP">
          </div>
          <div class="form-group">
            <label class="control-label">Re-type New Password</label>
            <input type="password" class="form-control" v-model="password.again">
          </div>

          <div class="margiv-top10">
            <button class="btn btn-primary"><i class="fa fa-check"></i> Change Password</button>
            <button class="btn btn-default" v-on:click="isCancel = true">Cancel</button>
          </div>

        </form>

      </div>
      <!-- /PASSWORD TAB -->

    </div>

  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import axios from 'axios'

  export default {
    name: "ProfileSettings",
    data() {
      return {
        userfinal: {
          given_name: '',
          last_name: '',
          mobile: '',
          email: '',
          sheba: ''
        },
        password: {
          current: '',
          newP: '',
          again: ''
        },
        isCancel: false
      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
        getToken: 'getToken',
        getErrors: 'getErrors',
        user: 'getUser'
      })
    },
    methods: {
      ...mapActions({
        setLogin: 'setLogin',
        setError: 'setError',
        resetError: 'resetError',
        setUser: 'setUser'
      }),
      updateUser(event) {
        if(this.isCancel){
          this.personalFormReset(event);
          return;
        }
        var dat = {
          'given_name': (this.userfinal.given_name ? this.userfinal.given_name : this.user.given_name),
          'last_name': (this.userfinal.last_name ? this.userfinal.last_name : this.user.last_name),
          'mobile': (this.userfinal.mobile ? this.userfinal.mobile : this.user.mobile),
          'email': (this.userfinal.email ? this.userfinal.email : this.user.email),
          'sheba': (this.userfinal.sheba ? this.userfinal.sheba : this.user.sheba)
        };
        axios.post('http://api.shahbandegan.ir/v1/profile', {
          data: dat,
          headers: {'Authorization': 'Bearer ' + this.getToken}
        }).then(response => {
          if (response.status < 300) {
            this.setUser();
          }
        }).catch(e => {
          console.log(e)
        })
      },
      updatePassword(event) {
        if (this.isCancel) {
          this.passFormReset(event);
          return;
        }
      },
      passFormReset(event) {
        this.password = {
          current: '',
          newP: '',
          again: ''
        };
        this.isCancel = false;
        event.target.reset();
      },
      personalFormReset(event) {
        this.userfinal = {
          given_name: '',
          last_name: '',
          mobile: '',
          email: '',
          sheba: ''
        };
        this.isCancel = false;
        event.target.reset();
      }
    }
  }
</script>

<style scoped>

</style>
