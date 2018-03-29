<template>
  <div class="smoothscroll enable-animation">

  <!-- SLIDE TOP -->
  <div id="slidetop">

    <div class="container">

      <div class="row">

        <div class="col-md-4">
          <h6><i class="icon-heart"></i> WHY SMARTY?</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. </p>
        </div>

        <div class="col-md-4">
          <h6><i class="icon-attachment"></i> RECENTLY VISITED</h6>
          <ul class="list-unstyled">
            <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet</a></li>
            <li><a href="#"><i class="fa fa-angle-right"></i> This is a very long text, very very very very very very very very very very very very </a></li>
            <li><a href="#"><i class="fa fa-angle-right"></i> Lorem ipsum dolor sit amet</a></li>
            <li><a href="#"><i class="fa fa-angle-right"></i> Dolor sit amet,consectetur adipiscing elit amet</a></li>
            <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet,consectetur adipiscing elit</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h6><i class="icon-envelope"></i> CONTACT INFO</h6>
          <ul class="list-unstyled">
            <li><b>Address:</b> PO Box 21132, Here Weare St, <br /> Melbourne, Vivas 2355 Australia</li>
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

    <!-- Top Bar -->
    <div id="topBar">
      <div class="container">

        <!-- right -->
        <ul class="top-links list-inline pull-right">
          <li class="text-welcome hidden-xs">Welcome to Smarty, <strong>John Doe</strong></li>
          <li>
            <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#"><i class="fa fa-user hidden-xs"></i> MY ACCOUNT</a>
            <ul class="dropdown-menu pull-right">
              <li><a tabindex="-1" href="#"><i class="fa fa-history"></i> ORDER HISTORY</a></li>
              <li class="divider"></li>
              <li><a tabindex="-1" href="#"><i class="fa fa-bookmark"></i> MY WISHLIST</a></li>
              <li><a tabindex="-1" href="#"><i class="fa fa-edit"></i> MY REVIEWS</a></li>
              <li><a tabindex="-1" href="#"><i class="fa fa-cog"></i> MY SETTINGS</a></li>
              <li class="divider"></li>
              <li><a tabindex="-1" href="#"><i class="glyphicon glyphicon-off"></i> LOGOUT</a></li>
            </ul>
          </li>
          <li class="hidden-xs"><a href="page-login-register-3.html">LOGIN</a></li>
          <li class="hidden-xs"><a href="page-login-register-3.html">REGISTER</a></li>
        </ul>

        <!-- left -->
        <ul class="top-links list-inline">
          <li class="hidden-xs"><a href="page-faq-1.html">FAQ</a></li>
          <li>
            <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#"><img class="flag-lang" src="assets/images/flags/us.png" width="16" height="11" alt="lang" /> ENGLISH</a>
            <ul class="dropdown-langs dropdown-menu">
              <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/flags/us.png" width="16" height="11" alt="lang" /> ENGLISH</a></li>
              <li class="divider"></li>
              <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/flags/de.png" width="16" height="11" alt="lang" /> GERMAN</a></li>
              <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/flags/ru.png" width="16" height="11" alt="lang" /> RUSSIAN</a></li>
              <li><a tabindex="-1" href="#"><img class="flag-lang" src="assets/images/flags/it.png" width="16" height="11" alt="lang" /> ITALIAN</a></li>
            </ul>
          </li>
          <li>
            <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#">USD</a>
            <ul class="dropdown-langs dropdown-menu">
              <li><a tabindex="-1" href="#">USD</a></li>
              <li class="divider"></li>
              <li><a tabindex="-1" href="#">EUR</a></li>
              <li><a tabindex="-1" href="#">GBP</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
    <!-- /Top Bar -->

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

      <!-- SEARCH HEADER -->
      <div class="search-box over-header">
        <a id="closeSearch" href="#" class="glyphicon glyphicon-remove"></a>

        <form action="page-search-result-1.html" method="get">
          <input type="text" class="form-control" placeholder="SEARCH" />
        </form>
      </div>
      <!-- /SEARCH HEADER -->


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
                    <img src="assets/images/demo/people/300x300/4-min.jpg" width="45" height="45" alt="" />
                    <h6><span>2x</span> RED BAG WITH HUGE POCKETS</h6>
                    <small>$37.21</small>
                  </a><!-- /cart item -->

                  <a href="#"><!-- cart item -->
                    <img src="assets/images/demo/people/300x300/5-min.jpg" width="45" height="45" alt="" />
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
            <img src="assets/images/logo_dark.png" alt="" />
          </a>

          <!--
                          Top Nav

                          AVAILABLE CLASSES:
                          submenu-dark = dark sub menu
                      -->
          <div class="navbar-collapse pull-right nav-main-collapse collapse submenu-dark">
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
                  <a href="#">
                    HOME
                  </a>
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
    <section class="page-header page-header-xs">
      <div class="container">

        <h1>CHECKOUT</h1>

        <!-- breadcrumbs -->
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li class="active">Checkout</li>
        </ol><!-- /breadcrumbs -->

      </div>
    </section>
    <!-- /PAGE HEADER -->




    <!-- CART -->
    <section>
      <div class="container">


        <!-- NOT LOGGED IN -->
        <div class="panel panel-default">
          <div class="panel-body">
            <strong>You are not logged in!</strong>
            Please, <a href="page-login-register-3.html">login</a> or <a href="javascript:;" onclick="jQuery('#accountswitch').trigger('click'); _scrollTo('#newaccount', 200);">create an account</a> for later use.
          </div>
        </div>
        <!-- /NOT LOGGED IN -->



        <!-- CHECKOUT -->
        <form class="row clearfix" method="post" action="shop-checkout-final.html">

          <div class="col-lg-7 col-sm-7">
            <div class="heading-title">
              <h4>Billing &amp; Shipping</h4>
            </div>


            <!-- BILLING -->
            <fieldset class="margin-top-60">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="billing_firstname">First Name *</label>
                  <input id="billing_firstname" name="billing[firstname]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="billing_lastname">Last Name *</label>
                  <input id="billing_lastname" name="billing[lastname]" type="text" class="form-control required" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="billing_email">Email *</label>
                  <input id="billing_email" name="billing[email]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="billing_company">Company</label>
                  <input id="billing_company" name="billing[company]" type="text" class="form-control" />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <label for="billing_address1">Address *</label>
                  <input id="billing_address1" name="billing[address][]" type="text" class="form-control required" placeholder="Address 1" />

                  <input id="billing_address2" name="billing[address][]" type="text" class="form-control margin-top-10" placeholder="Address 2" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="billing_city">City *</label>
                  <input id="billing_city" name="billing[city]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="billing_state">State/Province *</label>
                  <select id="billing_state" name="billing[state]" class="form-control pointer required">
                    <option value="">Select...</option>
                    <option value="1">Alabama</option>
                    <option value="2">Alaska</option>
                    <option value="">..............</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="billing_zipcode">Zip/Postal Code *</label>
                  <input id="billing_zipcode" name="billing[zipcode]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="billing_country">Country *</label>
                  <select id="billing_country" name="billing[country]" class="form-control pointer required">
                    <option value="">Select...</option>
                    <option value="1">united States</option>
                    <option value="2">united Kingdom</option>
                    <option value="">..............</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="billing_phone">Phone *</label>
                  <input id="billing_phone" name="billing[phone]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="billing_fax">Fax</label>
                  <input id="billing_fax" name="billing[fax]" type="text" class="form-control" />
                </div>
              </div>

              <hr />

              <div class="row">

                <div class="col-lg-12 nomargin clearfix">
                  <label class="checkbox pull-left"><!-- see assets/js/view/demo.shop.js - CHECKOUT section -->
                    <input id="shipswitch" name="shipping[same_as_billing]" type="checkbox" value="1" checked="checked" />
                    <i></i> <span class="weight-300">Ship to the same address</span>
                  </label>
                </div>

              </div>

            </fieldset>
            <!-- /BILLING -->


            <!-- SHIPPING -->
            <fieldset id="shipping" class="margin-top-80 softhide">
              <h4>Shipping Address</h4>
              <hr />

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:firstname">First Name *</label>
                  <input id="shipping:firstname" name="shipping[firstname]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:lastname">Last Name *</label>
                  <input id="shipping:lastname" name="shipping[lastname]" type="text" class="form-control required" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:email">Email *</label>
                  <input id="shipping:email" name="shipping[email]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:company">Company</label>
                  <input id="shipping:company" name="shipping[company]" type="text" class="form-control" />
                </div>
              </div>

              <div class="row">
                <div class="col-lg-12">
                  <label for="shipping:address1">Address *</label>
                  <input id="shipping:address1" name="shipping[address][]" type="text" class="form-control required" placeholder="Address 1" />

                  <input id="shipping:address2" name="shipping[address][]" type="text" class="form-control margin-top-10" placeholder="Address 2" />
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:city">City *</label>
                  <input id="shipping:city" name="shipping[city]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:state">State/Province *</label>
                  <select id="shipping:state" name="shipping[state]" class="form-control pointer required">
                    <option value="">Select...</option>
                    <option value="1">Alabama</option>
                    <option value="2">Alaska</option>
                    <option value="">..............</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:zipcode">Zip/Postal Code *</label>
                  <input id="shipping:zipcode" name="shipping[zipcode]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:country">Country *</label>
                  <select id="shipping:country" name="shipping[country]" class="form-control pointer required">
                    <option value="">Select...</option>
                    <option value="1">united States</option>
                    <option value="2">united Kingdom</option>
                    <option value="">..............</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:phone">Phone *</label>
                  <input id="shipping:phone" name="shipping[phone]" type="text" class="form-control required" />
                </div>
                <div class="col-md-6 col-sm-6">
                  <label for="shipping:fax">Fax</label>
                  <input id="shipping:fax" name="shipping[fax]" type="text" class="form-control" />
                </div>
              </div>

            </fieldset>
            <!-- /SHIPPING -->

          </div>



          <div class="col-lg-5 col-sm-5">
            <div class="heading-title">
              <h4>Payment Method</h4>
            </div>

            <!-- PAYMENT METHOD -->
            <fieldset class="margin-top-60">
              <div class="toggle-transparent toggle-bordered-full clearfix">
                <div class="toggle active">
                  <div class="toggle-content">

                    <div class="row nomargin-bottom">
                      <div class="col-lg-12 nomargin clearfix">
                        <label class="radio pull-left nomargin-top">
                          <input id="payment_check" name="payment[method]" type="radio" value="1" checked="checked" />
                          <i></i> <span class="weight-300">Check / Money order</span>
                        </label>
                      </div>
                      <div class="col-lg-12 nomargin clearfix">
                        <label class="radio pull-left">
                          <input id="payment_card" name="payment[method]" type="radio" value="2" />
                          <i></i> <span class="weight-300">Credit Card</span>
                        </label>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </fieldset>
            <!-- /PAYMENT METHOD -->


            <!-- CREDIT CARD PAYMENT -->
            <fieldset id="ccPayment" class="margin-top-30 softhide">

              <div class="toggle-transparent toggle-bordered-full clearfix">
                <div class="toggle active">
                  <div class="toggle-content">

                    <div class="row">
                      <div class="col-lg-12">
                        <label for="payment:name">Name on Card *</label>
                        <input id="payment:name" name="payment[name]" type="text" class="form-control required" autocomplete="off" />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12">
                        <label for="payment:name">Credit Card Type *</label>
                        <select id="payment:state" name="payment[state]" class="form-control pointer required">
                          <option value="">Select...</option>
                          <option value="AE">American Express</option>
                          <option value="VI">Visa</option>
                          <option value="MC">Mastercard</option>
                          <option value="DI">Discover</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12">
                        <label for="payment:cc_number">Credit Card Number *</label>
                        <input id="payment:cc_number" name="payment[cc_number]" type="text" class="form-control required" autocomplete="off" />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12">
                        <label for="payment:cc_exp_month">Card Expiration *</label>

                        <div class="row nomargin-bottom">
                          <div class="col-lg-6 col-sm-6">
                            <select id="payment:cc_exp_month" name="payment[cc_exp_month]" class="form-control pointer required">
                              <option value="0">Month</option>
                              <option value="01">01 - January</option>
                              <option value="02">02 - February</option>
                              <option value="03">03 - March</option>
                              <option value="04">04 - April</option>
                              <option value="05">05 - May</option>
                              <option value="06">06 - June</option>
                              <option value="07">07 - July</option>
                              <option value="08">08 - August</option>
                              <option value="09">09 - September</option>
                              <option value="10">10 - October</option>
                              <option value="11">11 - November</option>
                              <option value="12">12 - December</option>
                            </select>
                          </div>

                          <div class="col-lg-6 col-sm-6">
                            <select id="payment:cc_exp_year" name="payment[cc_exp_year]" class="form-control pointer required">
                              <option value="0">Year</option>
                              <option value="2015">2015</option>
                              <option value="2016">2016</option>
                              <option value="2017">2017</option>
                              <option value="2018">2018</option>
                              <option value="2019">2019</option>
                              <option value="2020">2020</option>
                              <option value="2021">2021</option>
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                              <option value="2025">2025</option>
                            </select>
                          </div>

                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-12">
                        <label for="payment:cc_cvv">CVV2 *</label>
                        <input id="payment:cc_cvv" name="payment[cc_cvv]" type="text" class="form-control required" autocomplete="off" maxlength="4" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </fieldset>
            <!-- /CREDIT CARD PAYMENT -->


            <!-- TOTAL / PLACE ORDER -->
            <div class="toggle-transparent toggle-bordered-full clearfix">
              <div class="toggle active">
                <div class="toggle-content">

										<span class="clearfix">
											<span class="pull-right">$120.75</span>
											<strong class="pull-left">Subtotal:</strong>
										</span>
                  <span class="clearfix">
											<span class="pull-right">$0.00</span>
											<span class="pull-left">Discount:</span>
										</span>
                  <span class="clearfix">
											<span class="pull-right">$8.00</span>
											<span class="pull-left">Shipping:</span>
										</span>

                  <hr />

                  <span class="clearfix">
											<span class="pull-right size-20">$128.75</span>
											<strong class="pull-left">TOTAL:</strong>
										</span>

                  <hr />

                  <button class="btn btn-primary btn-lg btn-block size-15"><i class="fa fa-mail-forward"></i> Place Order Now</button>
                </div>
              </div>
            </div>
            <!-- /TOTAL / PLACE ORDER -->

            <!-- CREATE ACCOUNT -->
            <div class="toggle-transparent toggle-bordered-full margin-top-30 clearfix">
              <div class="toggle active">
                <div class="toggle-content">

                  <div class="clearfix">
                    <label class="checkbox pull-left">
                      <input id="accountswitch" name="create-account[yes]" type="checkbox" value="1" />
                      <i></i> <span class="weight-300">Create an account for later use</span>
                    </label>
                  </div>

                  <!-- CREATE ACCOUNT FORM -->
                  <div id="newaccount" class="margin-top-10 margin-bottom-30 softhide">

                    <div class="row nomargin-bottom">
                      <div class="col-md-6 col-sm-6">
                        <label for="account:password">Password *</label>
                        <input id="account:password" name="account[password]" type="password" class="form-control" />
                      </div>
                      <div class="col-md-6 col-sm-6">
                        <label for="account:password2">Confirm Password *</label>
                        <input id="account:password2" name="account[password2]" type="password" class="form-control" />
                      </div>
                    </div>
                    <small class="text-warning">NOTE: Email address will be used to login</small>

                  </div>
                  <!-- /CREATE ACCOUNT FORM -->


                </div>
              </div>
            </div>
            <!-- /CREATE ACCOUNT -->

      </div>
        </form>
        <!-- /CHECKOUT -->

      </div>
    </section>
    <!-- /CART -->





    <!-- FOOTER -->
    <footer id="footer">
      <div class="container">

        <div class="row margin-top-60 margin-bottom-40 size-13">

          <!-- col #1 -->
          <div class="col-md-4 col-sm-4">

            <!-- Footer Logo -->
            <img class="footer-logo" src="assets/images/logo-footer.png" alt="" />

            <p>
              Incredibly beautiful responsive Bootstrap Template for Corporate and Creative Professionals.
            </p>

            <h2>(800) 123-4567</h2>

            <!-- Social Icons -->
            <div class="clearfix">

              <a href="#" class="social-icon social-icon-sm social-icon-border social-facebook pull-left" data-toggle="tooltip" data-placement="top" title="Facebook">
                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
              </a>

              <a href="#" class="social-icon social-icon-sm social-icon-border social-twitter pull-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                <i class="icon-twitter"></i>
                <i class="icon-twitter"></i>
              </a>

              <a href="#" class="social-icon social-icon-sm social-icon-border social-gplus pull-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                <i class="icon-gplus"></i>
                <i class="icon-gplus"></i>
              </a>

              <a href="#" class="social-icon social-icon-sm social-icon-border social-linkedin pull-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                <i class="icon-linkedin"></i>
                <i class="icon-linkedin"></i>
              </a>

              <a href="#" class="social-icon social-icon-sm social-icon-border social-rss pull-left" data-toggle="tooltip" data-placement="top" title="Rss">
                <i class="icon-rss"></i>
                <i class="icon-rss"></i>
              </a>

            </div>
            <!-- /Social Icons -->

          </div>
          <!-- /col #1 -->

          <!-- col #2 -->
          <div class="col-md-8 col-sm-8">

            <div class="row">

              <div class="col-md-5 hidden-sm hidden-xs">
                <h4 class="letter-spacing-1">RECENT NEWS</h4>
                <ul class="list-unstyled footer-list half-paddings">
                  <li>
                    <a class="block" href="#">New CSS3 Transitions this Year</a>
                    <small>June 29, 2015</small>
                  </li>
                  <li>
                    <a class="block" href="#">Inteligent Transitions In UX Design</a>
                    <small>June 29, 2015</small>
                  </li>
                  <li>
                    <a class="block" href="#">Lorem Ipsum Dolor</a>
                    <small>June 29, 2015</small>
                  </li>
                  <li>
                    <a class="block" href="#">New CSS3 Transitions this Year</a>
                    <small>June 29, 2015</small>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 hidden-sm hidden-xs">
                <h4 class="letter-spacing-1">EXPLORE US</h4>
                <ul class="list-unstyled footer-list half-paddings noborder">
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> About Us</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> About Me</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> About Our Team</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Services</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Careers</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Gallery</a></li>
                  <li><a class="block" href="#"><i class="fa fa-angle-right"></i> FAQ</a></li>
                </ul>
              </div>

              <div class="col-md-4">
                <h4 class="letter-spacing-1">SECURE PAYMENT</h4>
                <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id enim sit amet.</p>
                <p>	<!-- see assets/images/cc/ for more icons -->
                  <img src="assets/images/cc/Visa.png" alt="" />
                  <img src="assets/images/cc/Mastercard.png" alt="" />
                  <img src="assets/images/cc/Maestro.png" alt="" />
                  <img src="assets/images/cc/PayPal.png" alt="" />
                </p>
              </div>

            </div>

          </div>
          <!-- /col #2 -->

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
  <div id="preloader">
    <div class="inner">
      <span class="loader"></span>
    </div>
  </div><!-- /PRELOADER -->


  <!-- JAVASCRIPT FILES -->
  <!--<script type="text/javascript">var plugin_path = 'assets/plugins/';</script>-->
  <!--<script type="text/javascript" src="assets/plugins/jquery/jquery-2.1.4.min.js"></script>-->

  <!--<script type="text/javascript" src="assets/js/scripts.js"></script>-->

  <!-- STYLESWITCHER - REMOVE -->
  <!--<script async type="text/javascript" src="assets/plugins/styleswitcher/styleswitcher.js"></script>-->

  <!-- PAGE LEVEL SCRIPTS -->
  <!--<script type="text/javascript" src="assets/js/view/demo.shop.js"></script>-->
  </div>

</template>

<script>
    export default {
        name: "check-out"
    }
</script>

<style scoped>

</style>
