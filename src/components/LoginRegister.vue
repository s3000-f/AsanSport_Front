<template>

  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <div id="slidetop">

      <div class="container">

        <div class="row">

          <div class="col-md-4">
            <h6><i class="icon-heart"></i> WHY SMARTY?</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed,
              dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac
              massa. </p>
          </div>

          <div class="col-md-4">
            <h6><i class="icon-attachment"></i> RECENTLY VISITED</h6>
            <ul class="list-unstyled">
              <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i>
                This is a very long text, very very very very very very very very very very very very </a>
              </li>
              <li><a href="#"><i class="fa fa-angle-right"></i> Lorem ipsum dolor sit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i>
                Dolor sit amet,consectetur adipiscing elit amet</a></li>
              <li><a href="#"><i class="fa fa-angle-right"></i>
                Consectetur adipiscing elit amet,consectetur adipiscing elit</a></li>
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

              <!-- QUICK SHOP CART -->
              <li class="quick-cart">
                <a href="#">
                  <span class="badge badge-aqua btn-xs badge-corner">2</span>
                  <i class="fa fa-shopping-cart"></i>
                </a>
                <div class="quick-cart-box">
                  <h4>Shop Cart</h4>

                  <div class="quick-cart-wrapper">

                    <a href="#"><!-- cart item -->
                      <img src="assets/images/demo/people/300x300/4-min.jpg" width="45"
                           height="45" alt=""/>
                      <h6><span>2x</span> RED BAG WITH HUGE POCKETS</h6>
                      <small>$37.21</small>
                    </a><!-- /cart item -->

                    <a href="#"><!-- cart item -->
                      <img src="assets/images/demo/people/300x300/5-min.jpg" width="45"
                           height="45" alt=""/>
                      <h6><span>2x</span> THIS IS A VERY LONG TEXT AND WILL BE TRUNCATED</h6>
                      <small>$17.18</small>
                    </a><!-- /cart item -->

                    <!-- cart no items example -->
                    <!--
                                        <a class="text-center" href="#">
                                            <h6>0 ITEMS ON YOUR CART</h6>
                                        </a>
                                        -->

                  </div>

                  <!-- quick cart footer -->
                  <div class="quick-cart-footer clearfix">
                    <a href="shop-cart.html" class="btn btn-primary btn-xs pull-right">VIEW CART</a>
                    <span class="pull-left"><strong>TOTAL:</strong> $54.39</span>
                  </div>
                  <!-- /quick cart footer -->

                </div>
              </li>
              <!-- /QUICK SHOP CART -->

            </ul>
            <!-- /BUTTONS -->

            <!-- Logo -->
            <a class="logo pull-left" href="index.html">
              <img src="assets/images/logo_dark.png" alt=""/>
            </a>

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
                    <router-link to="/home">HOME</router-link>

                  </li>
                  <li class="dropdown"><!-- BLOG -->
                    <a href="#">
                      BLOG
                    </a>
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
      <section class="page-header">
        <div class="container">

          <h1>LOGIN</h1>

        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div class="row">
            <div class="col-md-6 col-md-offset-3">

              <div class="toggle toggle-transparent toggle-accordion toggle-noicon">

                <div class="toggle active">
                  <label class="size-20"><i class="fa fa-leaf"></i> &nbsp;
                    I'm a returning customer</label>
                  <div class="toggle-content">


                    <!-- ALERT -->
                    <div class="alert alert-mini alert-danger margin-bottom-30">
                      <strong>Oh snap!</strong> Login Incorrect!
                    </div><!-- /ALERT -->


                    <div class="sky-form">
                      <div class="clearfix">

                        <!-- Email -->
                        <div class="form-group">
                          <label>Email</label>
                          <label class="input margin-bottom-10">
                            <i class="ico-append fa fa-envelope"></i>
                            <input required="" type="text" v-model="username">
                            <b class="tooltip tooltip-bottom-right">Needed to verify your account</b>
                          </label>
                        </div>

                        <!-- Password -->
                        <div class="form-group">
                          <label>Password</label>
                          <label class="input margin-bottom-10">
                            <i class="ico-append fa fa-lock"></i>
                            <input required="" type="password" v-model="password">
                            <b class="tooltip tooltip-bottom-right">Type your account password</b>
                          </label>
                        </div>

                      </div>

                      <div class="row">

                        <div class="col-md-6 col-sm-6 col-xs-6">

                          <!-- Inform Tip -->
                          <div class="form-tip pt-20">
                            <a class="no-text-decoration size-13 margin-top-10 block bold"
                               href="#">Forgot Password?</a>
                          </div>

                        </div>

                        <div class="col-md-6 col-sm-6 col-xs-6 text-right">

                          <button class="btn btn-primary" v-on:click="login"><i
                            class="fa fa-check"></i> LOGIN
                          </button>

                        </div>

                      </div>

                    </div>


                  </div>
                </div>

                <div class="toggle">
                  <label class="size-20"><i class="glyphicon glyphicon-user"></i> &nbsp;
                    Don't have an account yet?</label>
                  <div class="toggle-content">

                    <!-- ALERT -->
                    <div class="alert alert-mini alert-danger margin-bottom-30">
                      <strong>Oh snap!</strong> Password do not match!
                    </div><!-- /ALERT -->

                    <form class="nomargin sky-form" action="#" method="post"
                          enctype="multipart/form-data">
                      <fieldset>

                        <div class="row">
                          <div class="form-group">

                            <div class="col-md-6 col-sm-6">
                              <label>First Name *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-user"></i>
                                <input required="" type="text" v-model="name">
                                <b class="tooltip tooltip-bottom-right">Your First Name</b>
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>Last Name *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-user"></i>
                                <input required="" type="text" v-model="lastName">
                                <b class="tooltip tooltip-bottom-right">Your Last Name</b>
                              </label>
                            </div>

                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group">

                            <div class="col-md-6 col-sm-6">
                              <label>Email *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-envelope"></i>
                                <input required="" type="text" v-model="email">
                                <b class="tooltip tooltip-bottom-right">Your Email</b>
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>Phone</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-phone"></i>
                                <input type="text" v-model="phone">
                                <b class="tooltip tooltip-bottom-right">Your Phone (optional)</b>
                              </label>
                            </div>

                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group">

                            <div class="col-md-6 col-sm-6">
                              <label>Password *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-lock"></i>
                                <input required="" type="password" class="err"
                                       v-model="pass">
                                <b class="tooltip tooltip-bottom-right">Min. 6 characters</b>
                              </label>
                            </div>

                            <div class="col-md-6 col-sm-6">
                              <label>Password Again *</label>
                              <label class="input margin-bottom-10">
                                <i class="ico-append fa fa-lock"></i>
                                <input required="" type="password" class="err"
                                       v-model="newPass">
                                <b class="tooltip tooltip-bottom-right">Type the password again</b>
                              </label>
                            </div>

                          </div>
                        </div>

                        <hr/>

                        <label class="checkbox nomargin"><input class="checked-agree"
                                                                type="checkbox" name="checkbox"><i></i>I agree to the <a
                          href="#" data-toggle="modal" data-target="#termsModal">Terms of Service</a></label>
                        <label class="checkbox nomargin"><input type="checkbox" name="checkbox"><i></i>I want to receive
                          news and special offers</label>

                      </fieldset>

                      <div class="row">
                        <div class="col-md-12">
                          <button type="submit" class="btn btn-primary"><i class="fa fa-check"
                                                                           v-on:click="sgnUp"></i>
                            REGISTER
                          </button>
                        </div>
                      </div>

                    </form>


                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>
      <!-- / -->


      <!-- MODAL -->
      <div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="myModal"
           aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
              <h4 class="modal-title" id="myModal">Server Response</h4>
            </div>

            <div class="modal-body modal-short">
              {{title}}

            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>

          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div>
      <!-- /MODAL -->


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

              <form class="validate" action="php/newsletter.php" method="post"
                    data-success="Subscribed! Thank you!" data-toastr-position="bottom-right">
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
                <a href="#" class="social-icon social-icon-border social-facebook pull-left"
                   data-toggle="tooltip" data-placement="top" title="Facebook">

                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-twitter pull-left"
                   data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-gplus pull-left"
                   data-toggle="tooltip" data-placement="top" title="Google plus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-linkedin pull-left"
                   data-toggle="tooltip" data-placement="top" title="Linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>

                <a href="#" class="social-icon social-icon-border social-rss pull-left"
                   data-toggle="tooltip" data-placement="top" title="Rss">
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


    <!-- PRELOADER -->
    <!--<div id="preloader">-->
    <!--<div class="inner">-->
    <!--<span class="loader"></span>-->
    <!--</div>-->
    <!--</div>&lt;!&ndash; /PRELOADER &ndash;&gt;-->

  </div>

</template>

<script>
  import axios from 'axios'
  import {mapActions} from 'vuex';
  import {mapGetters} from 'vuex';


  export default {
    name: "LoginRegister",
    data() {
      return {
        title: "title",
        username: '09218013508',
        password: 'Topol1376',
        name: '',
        lastName: '',
        email: '',
        pass: '',
        newPass: '',
        phone: '',
      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
        getToken: 'getToken',
        getErrors: 'getErrors'
      })
    },
    methods: {
      ...mapActions({
        setLogin: 'setLogin',
        setError: 'setError',
        resetError: 'resetError',
        setUser: 'setUser'
      }),
      login() {
        alert(this.username);
        axios.post("http://api.shahbandegan.ir/v1/login", {
          username: this.username,
          password: this.password
        })
          .then(response => {
            if (response.status < 300){
              this.title = response.data;
              this.setLogin(response.data['access_token']);
              this.resetError();
              alert(this.getToken);
            }
            else{
              this.setError(response.data['message']);
              alert(this.getErrors)
            }

          })
          .catch(e => {
            this.setError(e);
            alert(this.getErrors)
            }
          )
      },
      sgnUp() {
        axios.post("http://api.shahbandegan.ir/v1/register", {
          given_name: this.name,
          last_name: this.lastName,
          email: this.email,
          mobile: this.phone,
          password: this.pass
        })
          .then(response => {
            this.title = response.status;
            if (response.status < 300){
              this.setLogin(response.data['access_token']);
              this.resetError();
              alert(this.getToken)
            }
            else{
              this.setError(response.data['message']);
              alert(this.getErrors)
            }
          })
          .catch(e => {
            this.setError(e);
            alert(this.getErrors)
          })
      }
    }
  };
</script>

<style scoped>

</style>
