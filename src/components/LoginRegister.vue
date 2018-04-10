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
                    <div class="sky-form">
                      <div class="clearfix">

                        <!-- Email -->
                        <div class="form-group text-right">
                          <label>تلفن همراه</label>
                          <label class="input margin-bottom-10">
                            <i class="ico-append fa fa-phone"></i>
                            <input required="" type="text" v-model="username">
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

                        <div class="col-md-6 col-sm-6 col-xs-6">

                          <!-- Inform Tip -->
                          <div class="form-tip pt-20">
                            <a class="no-text-decoration size-13 margin-top-10 block bold"
                               v-on:click="passreset = true">رمز عبور را فراموش کرده اید؟</a>
                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 text-right">

                          <button class="btn btn-primary" v-on:click="login"><i
                            class="fa fa-check"></i> ورود
                          </button>

                        </div>

                      </div>

                    </div>


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

                    <form class="nomargin sky-form" action="#" method="post"
                          enctype="multipart/form-data">
                      <fieldset>

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
                          <div class="form-group">

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
                                <input required="" type="text" v-model="phone">
                                <!--<b class="tooltip tooltip-bottom-right">Your Phone (optional)</b>-->
                              </label>
                            </div>

                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group">

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
                          <input class="" type="checkbox" name="checkbox">
                          <i></i>با <a v-on:click="terms">قوانین و مقررات</a> موافقم
                        </label>
                        <!--<label class="checkbox nomargin"><input type="checkbox" name="checkbox"><i></i>I want to-->
                        <!--receive-->
                        <!--news and special offers</label>-->

                      </fieldset>

                      <div class="row">
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary"><i class="fa fa-check"
                                                                           v-on:click="sgnUp"></i>
                            ثبت نام
                          </button>
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
                            <input required="" type="text" v-model="password_reset">
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

  </div>

</template>
<script2 type="text/javascript" src="/static/assets/plugins/jquery/jquery-2.1.4.min.js"></script2>
<script2 type="text/javascript" src="/static/assets/js/scripts.js"></script2>

<script>
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
        loading: false
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
      'slide-top': SlideTop
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
        this.loading = true;
        axios.post("http://api.shahbandegan.ir/v1/login", {
          username: this.username,
          password: this.password
        })
          .then(response => {
            if (response.status < 300) {
              this.title = response.data;
              this.setLogin(response.data['access_token']);
              this.resetError();
              this.setUser();
              settimeout(()=>{},3000);
              this.$router.go(-1);

            }
            else {
              this.setError(response.data['message']);
            }
            this.loading = false;
          })
          .catch(e => {
              this.setError(e);
              this.loading = false;

            }
          )
      },
      sgnUp() {
        this.loading = true;
        axios.post("http://api.shahbandegan.ir/v1/register", {
          given_name: this.name,
          last_name: this.lastName,
          email: this.email,
          mobile: this.phone,
          password: this.pass
        })
          .then(response => {
            this.title = response.status;
            if (response.status < 300) {
              this.setLogin(response.data['access_token']);
              this.resetError();
              this.setUser();
              this.$router.go(-1);
            }
            else {
              this.setError(response.data['message']);
            }
            this.loading = false;
          })
          .catch(e => {
            this.loading = false
          })
      },
      gSignIn() {
        // Just add in this line
        Vue.googleAuth().directAccess();
        var data;
        this.loading = true;
        Vue.googleAuth().signIn(this.gs, function (error) {
          this.setError(error);
        });

      },
      gs(googleUser) {
        this.setGUser(googleUser['Zi']);
        if (this.isGoogle) {
          axios.post("http://api.shahbandegan.ir/v1/login/google", {
            id_token: this.googleUser['id_token'],
          })
            .then(response => {
              if (response.status < 300) {
                this.title = response.data;
                this.setLogin(response.data['access_token']);
                this.resetError();
                this.setUser();
                this.$router.go(-1);
              }
              else {
                this.setError(response.data['message']);
              }

              this.loading = false;
            })
            .catch(e => {
                this.setError(e);
                this.loading = false;
              }
            )
        }
      },
      resetPass() {
        if (this.reset_sms === 'sms') {
          axios.post('http://api.shahbandegan.ir/v1/password/sms', {
            mobile: this.password_reset
          }).then(response => {
            alert(response.data['message']);
            this.passreset = false;
          }).catch(e => {
            console.log(e)
          })
        }
      },
      terms() {
        let route = this.$router.resolve({path: '/'});
        window.open(route.href, '_blank');
      }
    },

  };
</script>

<style scoped>

</style>
