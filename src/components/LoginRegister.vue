<template>

  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <slide-top></slide-top>    <!-- /SLIDE TOP -->


    <!-- wrapper -->
    <div id="wrapper">

      <!-- Top Bar --><!-- /Top Bar -->


      <!--
                AVAILABLE HEADER CLASSES

                Default nav height: 96px
                .header-md 		= 70px nav height
                .header-sm 		= 60px nav height

                .noborder 		= remove bottom border (only with transparent use)
                .transparent	= transparent header
                .translucent	= translucent header
                .sticky			= sticky header
                .static			= static header
                .dark			= dark header
                .bottom			= header on bottom

                shadow-before-1 = shadow 1 header top
                shadow-after-1 	= shadow 1 header bottom
                shadow-before-2 = shadow 2 header top
                shadow-after-2 	= shadow 2 header bottom
                shadow-before-3 = shadow 3 header top
                shadow-after-3 	= shadow 3 header bottom

                .clearfix		= required for mobile menu, do not remove!

                Example Usage:  class="clearfix sticky header-sm transparent noborder"
            -->
      <header1></header1>


      <!--
                PAGE HEADER

                CLASSES:
                    .page-header-xs	= 20px margins
                    .page-header-md	= 50px margins
                    .page-header-lg	= 80px margins
                    .page-header-xlg= 130px margins
                    .dark			= dark page header

                    .shadow-before-1 	= shadow 1 header top
                    .shadow-after-1 	= shadow 1 header bottom
                    .shadow-before-2 	= shadow 2 header top
                    .shadow-after-2 	= shadow 2 header bottom
                    .shadow-before-3 	= shadow 3 header top
                    .shadow-after-3 	= shadow 3 header bottom
            -->
      <section class="page-header">
        <div class="container">

          <h1>ورود / ثبت نام</h1>

        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div class="row">
            <div class="col-md-6 col-md-offset-3">

              <div class="toggle toggle-transparent toggle-accordion toggle-noicon" v-if="!passreset">

                <div class="toggle active">
                  <label class="size-25"><i class="fa fa-leaf"></i> &nbsp;
                    عضو هستم</label>
                  <div class="toggle-content">


                    <!-- ALERT -->
                    <!--<div class="alert alert-mini alert-danger margin-bottom-30">-->
                    <!--<strong>Oh snap!</strong> Login Incorrect!-->
                    <!--</div>&lt;!&ndash; /ALERT &ndash;&gt;-->

                    <a class="btn btn-danger btn-featured btn-inverse margin-bottom-30" v-on:click="gSignIn">
                      <span>ورود با گوگل</span>
                      <i class="fa fa-google"></i>
                    </a>
                    <i class="break"></i>
                    <form @submit="login">
                    <div class="sky-form">
                      <div class="clearfix">

                        <!-- Email -->
                        <div class="form-group text-right">
                          <label>تلفن همراه</label>
                          <label class="input margin-bottom-10">
                            <i class="ico-append fa fa-phone"></i>
                            <input required="" type="tel" v-model="username">
                            <!--<b class="tooltip tooltip-bottom-right">Needed to verify your account</b>-->
                          </label>
                        </div>

                        <!-- Password -->
                        <div class="form-group text-right">
                          <label>رمز عبور</label>
                          <label class="input margin-bottom-10">
                            <i class="ico-append fa fa-lock"></i>
                            <input required="" type="password" v-model="password">
                            <!--<b class="tooltip tooltip-bottom-right">Type your account password</b>-->
                          </label>
                        </div>

                      </div>

                      <div class="row">

                        <div class="col-md-6 col-sm-6 col-xs-6 text-right">

                          <!-- Inform Tip -->
                          <div class="form-tip pt-20">
                            <a class="no-text-decoration size-13 margin-top-10 block bold"
                               v-on:click="passreset = true">رمز عبور را فراموش کرده اید؟</a>
                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 text-left">

                          <button class="btn btn-primary" v-on:click="login"><i
                            class="fa fa-check"></i> ورود
                          </button>

                        </div>

                      </div>

                    </div>
                    </form>

                  </div>
                </div>

                <div class="toggle">
                  <label class="size-25"><i class="glyphicon glyphicon-user"></i> &nbsp;
                    هنوز عضو نشده ام</label>
                  <div class="toggle-content">

                    <!--&lt;!&ndash; ALERT &ndash;&gt;-->
                    <!--<div class="alert alert-mini alert-danger margin-bottom-30">-->
                    <!--<strong>Oh snap!</strong> Password do not match!-->
                    <!--</div>&lt;!&ndash; /ALERT &ndash;&gt;-->
<form @submit="sgnUp">
                    <div class="nomargin sky-form">
                      <fieldset class="margin-bottom-0">

                        <div class="row">
                          <div class="form-group text-right">

                            <div class="col-md-6 col-sm-6">
                              <label>نام *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-user"></i>
                                <input required="" type="text" v-model="name">
                                <!--<b class="tooltip tooltip-bottom-right">Your First Name</b>-->
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>نام خانوادگی *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-user"></i>
                                <input required="" type="text" v-model="lastName">
                                <!--<b class="tooltip tooltip-bottom-right">Your Last Name</b>-->
                              </label>
                            </div>

                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group text-right">

                            <div class="col-md-6 col-sm-6">
                              <label>ایمیل *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-envelope"></i>
                                <input required="" type="text" v-model="email">
                                <!--<b class="tooltip tooltip-bottom-right">Your Email</b>-->
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>تلفن همراه *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-phone"></i>
                                <input required="" type="tel" v-model="phone">
                                <!--<b class="tooltip tooltip-bottom-right">Your Phone (optional)</b>-->
                              </label>
                            </div>

                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group text-right">

                            <div class="col-md-6 col-sm-6">
                              <label>رمزعبور *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-lock"></i>
                                <input required="" type="password"
                                       v-model="pass">
                                <!--<b class="tooltip tooltip-bottom-right">Min. 6 characters</b>-->
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>تکرار رمزعبور</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-lock"></i>
                                <input required="" type="password"
                                       v-model="newPass">
                                <!--<b class="tooltip tooltip-bottom-right">Type the password again</b>-->
                              </label>
                            </div>

                          </div>
                        </div>

                        <hr/>

                        <label class="nomargin text-right">
                          با کلیک بر روی ثبت نام موافقت خود را با قوانین آسان اسپورت تایید می کنید.
                        </label>
                        <!--<label class="checkbox nomargin"><input type="checkbox" name="checkbox"><i></i>I want to-->
                        <!--receive-->
                        <!--news and special offers</label>-->

                      </fieldset>

                      <div class="row">
                        <div class="col-md-12">
                          <button class="btn btn-primary" v-on:click="sgnUp"><i class="fa fa-check"></i>
                            ثبت نام
                          </button>
                        </div>
                      </div>

                    </div>
</form>

                  </div>
                </div>

              </div>
              <div class="toggle toggle-transparent toggle-accordion toggle-noicon" v-else>
                <div class="toggle active ">
                  <label class="size-20"><i class="fa fa-leaf"></i> &nbsp;
                    بازیابی رمز عبور</label>
                  <div class="toggle-content">
                    <div class="sky-form">
                      <div class="clearfix">

                        <!-- Email -->
                        <div class="form-group text-right">
                          <label>تلفن همراه</label>
                          <label class="input margin-bottom-10 ">
                            <input required="" type="tel" v-model="password_reset">
                            <i class="ico-append fa fa-phone"></i>

                          </label>

                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 text-left">
                          <!-- Inform Tip -->
                          <button class="btn btn-default" v-on:click="passreset = false">
                            لغو
                          </button>
                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                          <button class="btn btn-primary" v-on:click="resetPass"><i
                            class="fa fa-check"></i> بازیابی
                          </button>
                        </div>

                      </div>


                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <!-- / -->


      <!-- FOOTER -->
      <footer>
        <footers></footers>
      </footer>      <!-- /FOOTER -->

    </div>
    <!-- /wrapper -->


    <!-- SCROLL TO TOP -->
    <a href="#" id="toTop"></a>


    <!-- PRELOADER -->
    <div id="preloader" v-if="loading">
      <div class="inner">
        <span class="loader"></span>
      </div>
    </div><!-- /PRELOADER -->

    <sweet-modal ref="modal" title="بازیابی رمز عبور">
      <div class="clearfix">
        <!-- Email -->
        <div class="form-group">
          <label class="text-right">کد تایید</label>
          <input type="text" name="email" class="form-control" placeholder="کد تایید" required=""
                 v-model="reset_code">
        </div>
        <div class="form-group">
          <label class="text-right">تلفن همراه</label>
          <input type="tel" class="form-control" placeholder="تلفن همراه" required=""
                 v-model="password_reset">
        </div>
        <!-- Password -->
        <div class="form-group">
          <label class="text-right">رمز عبور</label>
          <input type="password" name="password" class="form-control" placeholder="رمز عبور" required=""
                 v-model="password">
        </div>
        <div class="form-group">
          <label class="text-right">تکرار رمز عبور</label>
          <input type="password" name="password" class="form-control" placeholder="تکرار رمز عبور" required=""
                 v-model="newPass">
        </div>

      </div>
      <button class="btn btn-success" slot="button" v-on:click="checkPassReset">تایید</button>

    </sweet-modal>

  </div>

</template>

<script>
  import {SweetModal, SweetModalTab} from 'sweet-modal-vue'
  import axios from 'axios'
  import Vue from 'vue'
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "LoginRegister",
    data() {
      return {
        title: "title",
        username: '',
        password: '',
        name: '',
        lastName: '',
        email: '',
        pass: '',
        newPass: '',
        phone: '',
        passreset: false,
        password_reset: '',
        reset_sms: 'email',
        loading: false,
        accepted: false,
        reset_code: ''
      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
        getToken: 'getToken',
        getErrors: 'getErrors',
        isGoogle: 'isGoogle',
        googleUser: 'getGoogleUser'
      })
    },
    components: {
      SlideTop,
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop,
      SweetModal,
      SweetModalTab
    },
    methods: {
      ...mapActions({
        setLogin: 'setLogin',
        setError: 'setError',
        resetError: 'resetError',
        setUser: 'setUser',
        setGUser: 'setGUser',
        resetGUser: 'resetGUser'
      }),
      login() {
        if (this.username.length !== 11 || this.password.length < 8) {
          this.$notify({
            text: 'اطلاعات ورودی اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        this.loading = true;
        axios.post("https://api.asansport.com/v1/login", {
          username: this.username,
          password: this.password
        })
          .then(response => {
            if (response.status < 300) {
              this.title = response.data;
              this.setLogin(response.data['access_token']);
              this.resetError();
              this.setUser();
              this.$router.push('/');

            }
            else {
              this.setError(response.data['message']);
              this.$notify({
                text: response.data['message'],
                type: 'error',
                title: 'خطا'
              });
            }
            this.loading = false;
          })
          .catch(e => {
              this.$notify({
                text: 'خطا در برقراری ارتباط',
                type: 'error',
                title: 'خطا'
              });
              this.setError(e);
              this.loading = false;

            }
          )
      },
      sgnUp() {
        if (this.name.length < 3 || this.lastName.length < 3 || this.email.length < 3 || this.phone.length !== 11) {
          this.$notify({
            text: 'اطلاعات ورودی اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (this.pass.length < 8) {
          this.$notify({
            text: 'رمزعبور باید بیشتر از ۸ حرف باشد',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (this.pass !== this.newPass) {
          this.$notify({
            text: 'رمزعبور باید یکسان باشد',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (!this.validateEmail(this.email)) {
          this.$notify({
            text: 'ایمیل شما اشتباه است',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        if (!this.accepted) {
          this.$notify({
            text: 'برای ثبت نام باید با قوانین موافقت کنید',
            type: 'error',
            title: 'خطا'
          });
          return;
        }
        this.loading = true;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        const dat = {
          given_name: this.name,
          last_name: this.lastName,
          email: this.email,
          mobile: this.phone,
          password: this.pass
        };
        axios.post('https://api.asansport.com/v1/register', dat, config).then(response => {
          if (response.status < 300) {
            this.setLogin(response.data['access_token']);
            this.resetError();
            this.setUser();
            setTimeout(() => {
              console.log('wait')
            }, 2000);
            this.$router.push('/');
          }
          else {
            this.$notify({
              text: response.data['message'],
              type: 'error',
              title: 'خطا'
            });

          }
          this.loading = false;
        }).catch(e => {
          this.$notify({
            text: 'خطا در برقراری ارتباط',
            type: 'error',
            title: 'خطا'
          });
          console.log(e);
          this.loading = false;
        })
      },
      gSignIn() {
        // Just add in this line
        Vue.googleAuth().directAccess();
        // var data;
        this.loading = true;
        Vue.googleAuth().signIn(this.gs, function (error) {
          this.setError(error);
          this.$notify({
            text: 'خطا در برقراری ارتباط',
            type: 'error',
            title: 'خطا'
          });
        });
      },
      gs(googleUser) {
        this.setGUser(googleUser['Zi']);
        if (this.isGoogle) {
          axios.post("https://api.asansport.com/v1/login/google", {
            id_token: this.googleUser['id_token'],
          })
            .then(response => {
              if (response.status < 300) {
                this.title = response.data;
                this.setLogin(response.data['access_token']);
                this.resetError();
                this.setUser();
                setTimeout(() => {
                  console.log('wait')
                }, 2000);
                this.$router.push('/');
              }
              else {
                this.setError(response.data['message']);
                this.$notify({
                  text: response.data['message'],
                  type: 'error',
                  title: 'خطا'
                });
              }
              this.loading = false;
            })
            .catch(e => {
                this.$notify({
                  text: 'خطا در برقراری ارتباط',
                  type: 'error',
                  title: 'خطا'
                });
                this.setError(e);
                this.loading = false;
              }
            )
        }
      },
      resetPass() {
        axios.post('https://api.asansport.com/v1/password/sms', {
          mobile: this.password_reset
        }).then(response => {
          if (response.status < 300) {
            this.$notify({
              text: response.data['message'],
              type: 'success',
              title: 'توجه'
            });
          } else {
            this.$notify({
              text: response.data['message'],
              type: 'error',
              title: 'خطا'
            });
          }
          setTimeout(() => {
            this.$refs.modal.open()
          }, 2000);
          this.passreset = false;
        }).catch(e => {
          this.$notify({
            text: 'خطا در برقراری ارتباط',
            type: 'error',
            title: 'خطا'
          });
          console.log(e)
        })

      },
      terms() {
        let route = this.$router.resolve({path: '/terms'});
        window.open(route.href, '_blank');
      },
      checkPassReset() {
        axios.post('https://api.asansport.com/v1/password/reset', {
          mobile: this.password_reset,
          token: this.reset_code,
          password: this.password
        })
          .then(response => {
            if (response.status < 300) {
              this.$refs.modal.close();
              this.$notify({
                text: 'رمزعبور با موفقیت تغییر یافت',
                type: 'success',
                title: 'توجه'
              });
            } else {
              this.$notify({
                text: 'اطلاعات خود را بررسی کنید',
                type: 'error',
                title: 'خطا'
              });
            }
          })
          .catch(e => {
            this.$notify({
              text: 'خطا در برقراری ارتباط',
              type: 'error',
              title: 'خطا'
            });
            console.log(e)
          });

      },
      validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    },
    created() {
      if (this.$store.state.isLoggedin) {
        this.$router.replace('/');
      }
      console.log(this.$refs)
    },


  };
</script>

<style scoped>

</style>
