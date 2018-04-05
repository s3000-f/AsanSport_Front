<template>
  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <div id="slidetop">

      <div class="container">

        <div class="row">

          <div class="col-md-4">
            <h6><i class="icon-heart"></i> WHY SMARTY?</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed,
              dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac
              massa. </p>
          </div>

          <div class="col-md-4">
            <h6><i class="icon-attachment"></i> RECENTLY VISITED</h6>
            <ul class="list-unstyled">
              <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> This is a very long text, very very very very very very
                very very very very very very </a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Lorem ipsum dolor sit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Dolor sit amet,consectetur adipiscing elit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet,consectetur adipiscing
                elit</a></li>
            </ul>
          </div>

          <div class="col-md-4">
            <h6><i class="icon-envelope"></i> CONTACT INFO</h6>
            <ul class="list-unstyled">
              <li><b>Address:</b> PO Box 21132, Here Weare St, <br/> Melbourne, Vivas 2355 Australia</li>
              <li><b>Phone:</b> 1-800-565-2390</li>
              <li><b>Email:</b> <a href="mailto:support@yourname.com">support@yourname.com</a></li>
            </ul>
          </div>

        </div>

      </div>

      <a class="slidetop-toggle" href="#"><!-- toggle button --></a>

    </div>
    <!-- /SLIDE TOP -->


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
      <div id="header" class="sticky clearfix">

        <!-- TOP NAV -->
        <header id="topNav">
          <div class="container">

            <!-- Mobile Menu Button -->
            <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
              <i class="fa fa-bars"></i>
            </button>

            <!-- BUTTONS -->
            <ul class="pull-right nav nav-pills nav-second-main">

              <!-- SEARCH -->
              <li class="search">
                <a href="javascript:;">
                  <i class="fa fa-search"></i>
                </a>
                <div class="search-box">
                  <form action="page-search-result-1.html" method="get">
                    <div class="input-group">
                      <input type="text" name="src" placeholder="Search" class="form-control"/>
                      <span class="input-group-btn">
												<button class="btn btn-primary" type="submit">Search</button>
											</span>
                    </div>
                  </form>
                </div>
              </li>
              <!-- /SEARCH -->

            </ul>
            <!-- /BUTTONS -->

            <!-- Logo -->
            <router-link class="logo pull-left" to="/">
              <img src="http://new.asansport.com/img/logo.png" alt=""/>
            </router-link>

            <!--
                            Top Nav

                            AVAILABLE CLASSES:
                            submenu-dark = dark sub menu
                        -->
            <div class="navbar-collapse pull-right nav-main-collapse collapse">
              <nav class="nav-main">

                <!--
                                    NOTE

                                    For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
                                    Direct Link Example:

                                    <li>
                                        <a href="#">HOME</a>
                                    </li>
                                -->
                <ul id="topMain" class="nav nav-pills nav-main">
                  <li class="dropdown active"><!-- HOME -->
                    <router-link to="/home">Home</router-link>
                  </li>
                  <li class="dropdown"><!-- BLOG -->
                    <router-link to="/about">About</router-link>
                  </li>
                </ul>

              </nav>
            </div>

          </div>
        </header>
        <!-- /Top Nav -->

      </div>


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

            <div class="thumbnail text-center">
              <h2 class="size-18 margin-top-10 margin-bottom-0">{{user.fname + ' ' + user.lname}}</h2>
              <h3 class="size-11 margin-top-0 margin-bottom-6 text-muted">{{user.email}}</h3>
            </div>
            <div class="margin-bottom-30 text-center" v-if="!user.verified">
              <div class="sky-form clearfix" v-if="verification">
                <div class="form-group text-right">
                  <label>Verification Code</label>
                  <label class="input margin-bottom-10 ">
                    <input required="" type="text" v-model="verification_code">
                    <i class="ico-append fa fa-phone"></i>
                  </label>
                </div>
                <button class="btn btn-success" v-on:click="verify">Verify</button>
              </div>
              <div v-else>
                <div class="text-warning text-center margin-bottom-3">Your Account is Not Verified</div>
                <button class="btn btn-warning" v-on:click="sendVerify">
                  <li class="fa fa-check">&nbsp;</li>
                  تایید حساب <span></span></button>
              </div>
            </div>


            <!-- SIDE NAV -->
            <ul class="side-nav-head list-group-item-success margin-bottom-60" id="sidebar-nav">

              <li class="list-group-item padding-3" v-on:click="selected = false"><i class="fa fa-tasks"></i>RESERVATIONS
              </li>
              <li class="list-group-item padding-3" v-on:click="selected = true"><i class="fa fa-gears"></i> SETTINGS
              </li>
            </ul>
            <!-- /SIDE NAV -->


            <!-- info -->
            <div class="box-dark  margin-bottom-30"><!-- .box-light OR .box-light -->
              <div class="text-muted text-center"><h4> Reservation Information </h4></div>
              <div class="row margin-bottom-20">
                <div class="col-md-6 col-sm-6 col-xs-6 text-center bold">
                  <h2 class="size-30 margin-top-10 margin-bottom-0 font-raleway">{{previous_count}}</h2>
                  <h3 class="size-11 margin-top-0 margin-bottom-10 text-info">Previous</h3>
                </div>

                <div class="col-md-6 col-sm-6 col-xs-6 text-center bold">
                  <h2 class="size-30 margin-top-10 margin-bottom-0 font-raleway">{{upcoming_count}}</h2>
                  <h3 class="size-11 margin-top-0 margin-bottom-10 text-info">Upcoming</h3>
                </div>
              </div>

            </div>

          </div>

          <!-- RIGHT -->
          <transition name="fade">
            <settings v-if="selected"></settings>
            <reservations v-else></reservations>
          </transition>


        </div>
      </section>
      <!-- / -->


      <!-- FOOTER -->
      <footer id="footer">
        <div class="container">

          <div class="row">

            <div class="col-md-3">
              <!-- Footer Logo -->
              <img class="footer-logo" src="assets/images/logo-footer.png" alt=""/>

              <!-- Small Description -->
              <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

              <!-- Contact Address -->
              <address>
                <ul class="list-unstyled">
                  <li class="footer-sprite address">
                    PO Box 21132<br>
                    Here Weare St, Melbourne<br>
                    Vivas 2355 Australia<br>
                  </li>
                  <li class="footer-sprite phone">
                    Phone: 1-800-565-2390
                  </li>
                  <li class="footer-sprite email">
                    <a href="mailto:support@yourname.com">support@yourname.com</a>
                  </li>
                </ul>
              </address>
              <!-- /Contact Address -->

            </div>

            <div class="col-md-3">

              <!-- Latest Blog Post -->
              <h4 class="letter-spacing-1">LATEST NEWS</h4>
              <ul class="footer-posts list-unstyled">
                <li>
                  <a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
                  <small>29 June 2015</small>
                </li>
                <li>
                  <a href="#">Nullam id dolor id nibh ultricies</a>
                  <small>29 June 2015</small>
                </li>
                <li>
                  <a href="#">Duis mollis, est non commodo luctus</a>
                  <small>29 June 2015</small>
                </li>
              </ul>
              <!-- /Latest Blog Post -->

            </div>

            <div class="col-md-2">

              <!-- Links -->
              <h4 class="letter-spacing-1">EXPLORE SMARTY</h4>
              <ul class="footer-links list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Our Clients</a></li>
                <li><a href="#">Our Pricing</a></li>
                <li><a href="#">Smarty Tour</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
              <!-- /Links -->

            </div>

            <div class="col-md-4">

              <!-- Newsletter Form -->
              <h4 class="letter-spacing-1">KEEP IN TOUCH</h4>
              <p>Subscribe to Our Newsletter to get Important News &amp; Offers</p>

              <form class="validate" action="php/newsletter.php" method="post" data-success="Subscribed! Thank you!"
                    data-toastr-position="bottom-right">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                  <input type="email" id="email" name="email" class="form-control required"
                         placeholder="Enter your Email">
                  <span class="input-group-btn">
										<button class="btn btn-success" type="submit">Subscribe</button>
									</span>
                </div>
              </form>
              <!-- /Newsletter Form -->

              <!-- Social Icons -->
              <div class="margin-top-20">
                <a href="#" class="social-icon social-icon-border social-facebook pull-left" data-toggle="tooltip"
                   data-placement="top" title="Facebook">

                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-twitter pull-left" data-toggle="tooltip"
                   data-placement="top" title="Twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-gplus pull-left" data-toggle="tooltip"
                   data-placement="top" title="Google plus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-linkedin pull-left" data-toggle="tooltip"
                   data-placement="top" title="Linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-rss pull-left" data-toggle="tooltip"
                   data-placement="top" title="Rss">
                  <i class="icon-rss"></i>
                  <i class="icon-rss"></i>
                </a>

              </div>
              <!-- /Social Icons -->

            </div>

          </div>

        </div>

        <div class="copyright">
          <div class="container">
            <ul class="pull-right nomargin list-inline mobile-block">
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li>&bull;</li>
              <li><a href="#">Privacy</a></li>
            </ul>
            &copy; All Rights Reserved, Company LTD
          </div>
        </div>
      </footer>
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
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
  import axios from 'axios';

  export default {
    name: "Profile",
    data() {
      return {
        selected: false,
        upcoming_count: 12,
        previous_count: 34,
        verification: false,
        verification_code: ''
      }
    },
    components: {
      'settings': ProfileSettings,
      'reservations': ProfileReservations
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
        verifyUser: 'verifyUser'
      }),
      verify() {
        axios.post('http://api.shahbandegan.ir/v1/verify', {
          data: {
            'mobile': this.user.mobile,
            'verification_code': this.verification_code
          }
        }).then(response => {
          if (response.status < 300) {
            this.verifyUser();
          }
        }).catch(e => {
          console.log(e)
        });
      },
      sendVerify() {
        axios.post('http://api.shahbandegan.ir/v1/verify/resend', {
          data: {
            'mobile': this.user.mobile
          }
        }).then(response => {
          if (response.status < 300) {
            this.verification = true;
          }
        }).catch(e => {
          console.log(e)
        });
      }
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
