<template>
  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <slide-top></slide-top>    <!-- /SLIDE TOP -->


    <!-- wrapper -->
    <div id="wrapper">

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


      <!-- -->
      <section>
        <div class="container">

          <!-- LEFT -->
          <div class="col-lg-3 col-md-3 col-sm-4">

            <div class="thumbnail text-center margin-bottom-0">
              <h2 class="size-18 margin-top-10 margin-bottom-0">{{user.fname + ' ' + user.lname}}</h2>
              <h3 class="size-11 margin-top-0 margin-bottom-6 text-muted">{{user.email}}</h3>
              <h3 class="size-11 margin-top-0 margin-bottom-6 text-muted">اعتبار: {{user.credit}} تومان</h3>
            </div>

            <ul class="side-nav list-group margin-bottom-30" id="sidebar-nav">

              <li class="list-group-item padding-3"
                  v-on:click="selected1 = true; selected2 = false; selected3 = false">
                <i class="fa fa-tasks"></i>سالن های رزرو شده
              </li>
              <!--<li class="list-group-item padding-3" v-on:click="selected = true">-->
              <!--<i class="fa fa-comments"></i> نظرات من-->
              <!--</li>-->
              <li class="list-group-item padding-3" v-on:click="selected1 = false; selected2 = false; selected3 = true; ">
                <i class="fa fa-credit-card"></i> اعتبار من
              </li>
              <li class="list-group-item padding-3" v-on:click="selected1 = false; selected2 = true; selected3 = false;">
                <i class="fa fa-gears"></i> تنظیمات
              </li>
              <li class="list-group-item padding-3" v-on:click="logout()">
                <i class="fa fa-power-off"></i> خروج

              </li>
            </ul>

            <div class="margin-bottom-30 text-center" v-if="!user.verified">
              <div class="sky-form clearfix" v-if="verification">
                <div class="form-group text-right">
                  <label class="size-13">کد تایید</label>
                  <label class="input margin-bottom-10 ">
                    <input required="" type="text" v-model="verification_code">
                    <i class="ico-append fa fa-phone"></i>
                  </label>
                </div>
                <button class="btn btn-success" v-on:click="verify">تایید</button>
              </div>
              <div v-else>
                <div class="text-warning text-center margin-bottom-3 size-18">حساب شما تایید نشده است</div>
                <button class="btn btn-warning" v-on:click="sendVerify">
                  <li class="fa fa-check">&nbsp;</li>
                  تایید حساب <span></span></button>
              </div>
            </div>


            <!-- info -->
            <!--<div class="box-dark  margin-bottom-30">&lt;!&ndash; .box-light OR .box-light &ndash;&gt;-->
              <!--<div class="text-muted text-center"><h4> آمار رزرو ها </h4></div>-->
              <!--<div class="row margin-bottom-20">-->
                <!--&lt;!&ndash;<div class="col-md-6 col-sm-6 col-xs-6 text-center bold">&ndash;&gt;-->
                  <!--&lt;!&ndash;<h2 class="size-30 margin-top-10 margin-bottom-0 font-raleway">{{previous_count}}</h2>&ndash;&gt;-->
                  <!--&lt;!&ndash;<h3 class="size-13 margin-top-0 margin-bottom-10 text-info">گذشته</h3>&ndash;&gt;-->
                <!--&lt;!&ndash;</div>&ndash;&gt;-->

                <!--<div class=" text-center bold">-->
                  <!--<h2 class="size-30 margin-top-10 margin-bottom-3 font-raleway">9</h2>-->
                  <!--<h3 class="size-13 margin-top-0 margin-bottom-10 text-info">جلسه</h3>-->
                <!--</div>-->
              <!--</div>-->

            <!--</div>-->

          </div>

          <!-- RIGHT -->
          <transition name="fade">
            <reservations v-if="selected1"></reservations>
            <settings v-if="selected2"></settings>
            <credit v-if="selected3"></credit>
          </transition>


        </div>
      </section>
      <!-- / -->


      <!-- FOOTER -->
      <footers></footers>
      <!-- /FOOTER -->

    </div>
    <!-- /wrapper -->


    <!-- SCROLL TO TOP -->
    <a href="#" id="toTop"></a>
  </div>
</template>

<script>
  import ProfileSettings from './ProfileSettings'
  import ProfileReservations from './ProfileReservations'
  import ProfileUserCredit from './ProfileUserCredit'
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import axios from 'axios';
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'
  // import qs from 'qs';


  export default {
    name: "Profile",
    data() {
      return {
        selected1:true,
        selected2:false,
        selected3:false,
        upcoming_count: 12,
        previous_count: 34,
        verification: false,
        verification_code: '',
      }
    },
    components: {
      SlideTop,
      'settings': ProfileSettings,
      'reservations': ProfileReservations,
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop,
      'credit': ProfileUserCredit
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
        verifyUser: 'verifyUser',
        setUser: 'setUser',
        logout: 'logout',
      }),
      verify() {
        let dat = {
          'mobile': this.user.mobile,
          'verification_code': this.verification_code
        };
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.post('https://api.asansport.com/v1/verify', dat, config).then(response => {
          if (response.status < 300) {
            this.verifyUser();
            this.notif('نتیجه', 'حساب شما با موفقیت تایید شد', 'success')
          }
          else {
            this.notif('خطا', 'اطلاعات خود را بررسی کنید', 'warn');
          }
        }).catch(e => {
          this.notif('خطا', e, 'error');
          console.log(e)
        });
      },
      sendVerify() {
        console.log('mobile --> ' + this.user.mobile);
        let dat = {'mobile': this.user.mobile};
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.post('https://api.asansport.com/v1/verify/resend', dat, config).then(response => {
          if (response.status < 300) {
            this.verification = true;
            this.notif('نتیجه', 'کد تایید برای شما ارسال شد', 'success');

          }
          else {
            this.notif('خطا', 'اطلاعات خود را بررسی کنید', 'warn');
          }
        }).catch(e => {
          this.notif('خطا', e, 'error');
          console.log(e)
        });
      },
      notif(title, text, type) {
        this.$notify({
          text: text,
          type: type,
          title: title
        })
      }
    },
    created() {
      this.setUser()
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
