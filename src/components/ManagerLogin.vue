<template>
  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>
    <div id="wrapper">
      <header1></header1>

      <section class="page-header">
        <div class="container">

          <h1>ورود مدیران</h1>

          <!--&lt;!&ndash; breadcrumbs &ndash;&gt;-->
          <!--<ol class="breadcrumb">-->
          <!--<li><a href="#">Home</a></li>-->
          <!--<li><a href="#">Pages</a></li>-->
          <!--<li class="active">Login</li>-->
          <!--</ol>&lt;!&ndash; /breadcrumbs &ndash;&gt;-->

        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div class="row">

            <!-- LEFT TEXT -->
            <div class="col-md-5 col-md-offset-1">

              <h2 class="size-16">توجه</h2>
              <p class="text-muted">این بخش مخصوص مدیران ورزشگاه میباشد و صرفا قابلیت مدیریت باشگاه ورزشی را در اختیار
                شما قرار میدهد.</p>
              <p class="text-muted">در صورتی که مدیر ورزشگاه نیستید و یا نیاز به رزرو سالن دارید از صفحه
                <router-link to="/login-register">ورود / ثبت نام</router-link>
                وارد شوید.
              </p>

            </div>
            <!-- /LEFT TEXT -->


            <!-- LOGIN -->
            <div class="col-md-4">

              <h2 class="size-16">ورود</h2>

              <!-- login form -->
              <div class="clearfix">

                <!-- Email -->
                <div class="form-group">
                  <input type="tel" name="email" class="form-control" placeholder="تلفن همراه" required=""
                         v-model="username">
                </div>

                <!-- Password -->
                <div class="form-group">
                  <input type="password" name="password" class="form-control" placeholder="رمز عبور" required=""
                         v-model="password">
                </div>

              </div>

              <div class="row">

                <div class="col-md-6 col-sm-6 col-xs-6">

                  <!-- Inform Tip -->
                  <div class="form-tip pt-20">
                    <a class="no-text-decoration size-13 margin-top-10 block" href="#">رمزعبور خود را فراموش کرده
                      اید؟</a>
                  </div>

                </div>

                <div class="col-md-6 col-sm-6 col-xs-6 text-right">

                  <button class="btn btn-primary" @click="login">ورود</button>

                </div>

              </div>

              <!-- /login form -->

              <!-- ALERT -->
              <!--<div class="alert alert-mini alert-danger margin-bottom-30">-->
              <!--<strong>Oh snap!</strong> Login Incorrect!-->
              <!--</div>&lt;!&ndash; /ALERT &ndash;&gt;-->

            </div>
            <!-- /LOGIN -->

          </div>


        </div>
      </section>


      <footer>
        <footers></footers>
      </footer>
    </div>

    <a href="#" id="toTop"></a>


    <!-- PRELOADER -->
    <div id="preloader" v-if="loading">
      <div class="inner">
        <span class="loader"></span>
      </div>
    </div><!-- /PRELOADER -->

  </div>
</template>

<script>
  import axios from 'axios'
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "ManagerLogin",
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
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
    data() {
      return {
        username: '',
        password: '',
        passreset: false,
        password_reset: '',
        loading: false
      }
    },
    methods: {
      ...mapActions({
        setLogin: 'setLogin',
        setError: 'setError',
        resetError: 'resetError',
        setUser: 'setUser',
        setGUser: 'setGUser',
        resetGUser: 'resetGUser',
        setManager: 'setManager'
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
              this.setManager();
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
    }
  }
</script>

<style scoped>

</style>
