<template>
  <div class="col-lg-9 col-md-9 col-sm-8">

    <ul class="nav nav-tabs nav-top-border">
      <li class="active"><a href="#info" data-toggle="tab">اطلاعات شخصی</a></li>
      <li><a href="#password" data-toggle="tab">رمز عبور</a></li>
    </ul>

    <div class="tab-content margin-top-20">

      <!-- PERSONAL INFO TAB -->
      <div class="tab-pane fade in active" id="info">
        <form role="form" id="personalForm" @submit.prevent="updateUser">
          <div class="form-group">
            <label class="control-label size-16">نام</label>
            <input type="text" v-bind:placeholder="user.fname" class="form-control" v-model="userfinal.given_name">
          </div>
          <div class="form-group">
            <label class="control-label size-16">نام خانوادگی</label>
            <input type="text" v-bind:placeholder="user.lname" class="form-control" v-model="userfinal.last_name">
          </div>
          <div class="form-group">
            <label class="control-label size-16">تلفن همراه</label>
            <input type="text" v-bind:placeholder="user.mobile" class="form-control" v-model="userfinal.mobile">
          </div>
          <div class="form-group">
            <label class="control-label size-16">ایمیل</label>
            <input type="text" v-bind:placeholder="user.email" class="form-control" v-model="userfinal.email">
          </div>
          <div class="form-group">
            <label class="control-label size-16">کد شبا</label>
            <input type="text" v-bind:placeholder="user.sheba" class="form-control" v-model="userfinal.sheba">
          </div>
          <div class="margiv-top10">
            <button class="btn btn-primary"><i class="fa fa-check"></i> ثبت تغییرات</button>
            <button class="btn btn-default" v-on:click="isCancel = true">لغو</button>
          </div>
        </form>
      </div>
      <!-- /PERSONAL INFO TAB -->

      <!-- PASSWORD TAB -->
      <div class="tab-pane fade" id="password">

        <form id="passForm" @submit.prevent="updatePassword">

          <div class="form-group">
            <label class="control-label size-16">رمز فعلی</label>
            <input type="password" class="form-control" v-model="password.current">
          </div>
          <div class="form-group">
            <label class="control-label size-16">رمز جدید</label>
            <input type="password" class="form-control" v-model="password.newP">
          </div>
          <div class="form-group">
            <label class="control-label size-16">تکرار رمز جدید</label>
            <input type="password" class="form-control" v-model="password.again">
          </div>

          <div class="margiv-top10">
            <button class="btn btn-primary"><i class="fa fa-check"></i> ثبت تغییرات</button>
            <button class="btn btn-default" v-on:click="isCancel = true">لغو</button>
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
        if (this.isCancel) {
          this.personalFormReset(event);
          return;
        }
        let dat = {
          'given_name': (this.userfinal.given_name ? this.userfinal.given_name : this.user.fname),
          'last_name': (this.userfinal.last_name ? this.userfinal.last_name : this.user.lname),
          'mobile': (this.userfinal.mobile ? this.userfinal.mobile : this.user.mobile),
          'email': (this.userfinal.email ? this.userfinal.email : this.user.email),
          'sheba': (this.userfinal.sheba ? this.userfinal.sheba : this.user.sheba)
        };
        console.log(dat)
        if (dat.given_name.length < 3 || dat.last_name.length < 3 || dat.mobile.length !== 11 || dat.email.length < 3){
          this.$notify({
            text: 'اطلاعات ورودی اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (!this.validateEmail(dat.email)) {
          this.$notify({
            text: 'ایمیل شما اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if(dat.sheba.length !== 26 || dat.sheba[0] !== 'i' || dat.sheba[1] !== 'r'){
          this.$notify({
            text: 'کد شبا اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        const config = {
          headers: {
            Authorization: 'Bearer ' + this.getToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.put('https://api.asansport.com/v1/profile', dat, config).then(response => {
          if (response.status < 300){
            this.notif('نتیجه', 'اطلاعات با موفقیت ثبت شد', 'success');
            setTimeout(()=>{console.log('wait')},2000);
            location.reload();

          }else{
            this.notif('خطا', 'اطلاعات خود را بررسی کنید', 'warn');
          }
        }).catch(e => {
          this.notif('خطا', 'خطا در برقراری ارتباط', 'error');
          console.log(e)
        })
      },
      updatePassword(event) {
        if (this.isCancel) {
          this.passFormReset(event);
          return;
        }
        if(this.password.current.length < 8 || this.password.newP.length < 8){
          this.$notify({
            text: 'رمزعبور باید بیشتر از ۸ حرف باشد',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (this.password.newP !== this.password.again) {
          this.$notify({
            text: 'رمزعبور باید یکسان باشد',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        const dat = {
          old_password: this.password.current,
          new_password: this.password.newP
        };
        const config = {
          headers: {
            Authorization: 'Bearer ' + this.getToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.put('https://api.asansport.com/v1/profile/password', dat, config).then(response => {
          if (response.status < 300){
            this.notif('نتیجه', 'اطلاعات با موفقیت ثبت شد', 'success');
            this.passFormReset(event);
          }else{
            this.notif('خطا', 'اطلاعات خود را بررسی کنید', 'warn');
          }
        }).catch(e => {
          this.notif('خطا', 'خطا در برقراری ارتباط', 'error');
          console.log(e)
        })
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
      },
      notif(title, text, type) {
        this.$notify({
          text: text,
          type: type,
          title: title
        })
      },
      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    }
  }
</script>

<style scoped>

</style>
