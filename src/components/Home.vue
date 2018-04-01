<template>
  <div>
    <div class="smoothscroll enable-animation">
      <div id="slidetop">

        <div class="container">

          <div class="row">

            <div class="col-md-4">
              <h6><i class="icon-heart"></i> WHY SMARTY?</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales
                sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et,
                iaculis ac massa. </p>
            </div>

            <div class="col-md-4">
              <h6><i class="icon-attachment"></i> RECENTLY VISITED</h6>
              <ul class="list-unstyled">
                <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet</a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i> This is a very long text, very very very very
                  very very very very very very very very </a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i> Lorem ipsum dolor sit amet</a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i> Dolor sit amet,consectetur adipiscing elit
                  amet</a></li>
                <li><a href="#"><i class="fa fa-angle-right"></i> Consectetur adipiscing elit amet,consectetur
                  adipiscing elit</a></li>
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

        <!-- Top Bar -->
        <div id="topBar" class="dark">
          <div class="container">

            <!-- right -->
            <ul class="top-links list-inline pull-right">
              <li class="text-welcome hidden-xs">Welcome to Smarty, <strong>John Doe</strong></li>
              <li>
                <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#"><i
                  class="fa fa-user hidden-xs"></i>
                  <router-link to="/profile">Your Account</router-link>
                </a>
              <li class="divider"></li>
              <li><a tabindex="-1" href="#"><i class="glyphicon glyphicon-off"></i> LOGOUT</a></li>
            </ul>
            </li>
            <li class="hidden-xs">
              <router-link to="/login-register">LOGIN/REGISTER</router-link>
            </li>
            </ul>

            <!-- left -->

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
              <input type="text" class="form-control" placeholder="SEARCH"/>
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
                  <a href="javascript2:;">
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
                        <img src="/static/assets/images/demo/people/300x300/4-min.jpg" width="45" height="45"
                             alt=""/>
                        <h6><span>2x</span> RED BAG WITH HUGE POCKETS</h6>
                        <small>$37.21</small>
                      </a><!-- /cart item -->

                      <a href="#"><!-- cart item -->
                        <img src="/static/assets/images/demo/people/300x300/5-min.jpg" width="45" height="45"
                             alt=""/>
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
                <img src="/static/assets/images/logo_dark.png" alt=""/>
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


        <!-- REVOLUTION SLIDER -->
        <section id="slider" class="slider fullwidthbanner-container roundedcorners">
          <!--
              Navigation Styles:

                  data-navigationStyle="" theme default navigation

                  data-navigationStyle="preview1"
                  data-navigationStyle="preview2"
                  data-navigationStyle="preview3"
                  data-navigationStyle="preview4"

              Bottom Shadows
                  data-shadow="1"
                  data-shadow="2"
                  data-shadow="3"

              Slider Height (do not use on fullscreen mode)
                  data-height="300"
                  data-height="350"
                  data-height="400"
                  data-height="450"
                  data-height="500"
                  data-height="550"
                  data-height="600"
                  data-height="650"
                  data-height="700"
                  data-height="750"
                  data-height="800"
          -->
          <div class="fullwidthbanner" data-height="550" data-navigationStyle="">
            <ul class="hide">

              <!-- SLIDE  -->
              <li data-transition="fade" data-slotamount="1" data-masterspeed="1500" data-delay="10000"
                  data-saveperformance="off" data-title="Slide" style="background-color: #F6F6F6;">

                <img src="/static/assets/images/demo/wall2.jpg" alt="video" data-bgposition="top center"
                     data-bgfit="cover" data-bgrepeat="no-repeat">

                <div class="tp-caption customin ltl tp-resizeme revo-slider-caps-text uppercase"
                     data-x="left"
                     data-y="50"
                     data-customin="x:-200;y:0;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="400"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <img v-bind:src="slide.image.src1" alt="Girl" class="shop-item-image" style="max-height: 450px;">
                </div>

                <div class="tp-caption customin ltl tp-resizeme text_white weight-300"
                     data-x="643"
                     data-y="75"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn" style=" color: #777;">
                  {{slide.subtitle.st1}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme large_bold_white"
                     data-x="650"
                     data-y="105"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1200"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 430px; white-space: normal; line-height: 1.15;">
                  {{slide.title.t1}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme small_light_white font-lato size-20"
                     data-x="650"
                     data-y="275"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1400"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 550px; white-space: normal; text-shadow:none;">
                  {{slide.description.d1}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme"
                     data-x="650"
                     data-y="375"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1550"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <router-link to="fields" class="btn btn-primary btn-lg">
                    <span>Reserve</span>
                  </router-link>
                </div>
              </li>

              <li data-transition="fade" data-slotamount="1" data-masterspeed="1500" data-delay="10000"
                  data-saveperformance="off" data-title="Slide" style="background-color: #F6F6F6;">

                <img src="/static/assets/images/demo/wall2.jpg" alt="video" data-bgposition="top center"
                     data-bgfit="cover" data-bgrepeat="no-repeat">

                <div class="tp-caption customin ltl tp-resizeme revo-slider-caps-text uppercase"
                     data-x="left"
                     data-y="50"
                     data-customin="x:-200;y:0;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="400"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <img v-bind:src="slide.image.src2" alt="Girl" style="max-height: 450px;">
                </div>

                <div class="tp-caption customin ltl tp-resizeme text_white weight-300"
                     data-x="643"
                     data-y="75"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn" style=" color: #777;">
                  {{slide.subtitle.st2}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme large_bold_white"
                     data-x="650"
                     data-y="105"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1200"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 430px; white-space: normal; line-height: 1.15;">
                  {{slide.title.t2}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme small_light_white font-lato size-20"
                     data-x="650"
                     data-y="275"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1400"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 550px; white-space: normal; text-shadow:none;">
                  {{slide.description.d2}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme"
                     data-x="650"
                     data-y="375"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1550"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <router-link to="fields" class="btn btn-primary btn-lg">
                    <span>Reserve</span>
                  </router-link>
                </div>
              </li>

              <li data-transition="fade" data-slotamount="1" data-masterspeed="1500" data-delay="10000"
                  data-saveperformance="off" data-title="Slide" style="background-color: #F6F6F6;">

                <img src="/static/assets/images/demo/wall2.jpg" alt="video" data-bgposition="top center"
                     data-bgfit="cover" data-bgrepeat="no-repeat">

                <div class="tp-caption customin ltl tp-resizeme revo-slider-caps-text uppercase"
                     data-x="left"
                     data-y="50"
                     data-customin="x:-200;y:0;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="400"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <img v-bind:src="slide.image.src3" alt="Girl" class="img-rounded" style="max-height: 450px; margin-left: auto">
                </div>

                <div class="tp-caption customin ltl tp-resizeme text_white weight-300"
                     data-x="643"
                     data-y="75"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1000"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn" style=" color: #777;">
                  {{slide.subtitle.st3}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme large_bold_white"
                     data-x="650"
                     data-y="105"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1200"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 430px; white-space: normal; line-height: 1.15;">
                  {{slide.title.t3}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme small_light_white font-lato size-20"
                     data-x="650"
                     data-y="275"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1400"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style=" color: #333; max-width: 550px; white-space: normal; text-shadow:none;">
                  {{slide.description.d3}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme"
                     data-x="650"
                     data-y="375"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1.3;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="700"
                     data-start="1550"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn">
                  <router-link to="fields" class="btn btn-primary btn-lg">
                    <span>Reserve</span>
                  </router-link>
                </div>
              </li>



            </ul>
            <div class="tp-bannertimer"></div>
          </div>
        </section>
        <!-- /REVOLUTION SLIDER -->


        <!-- INFO BAR -->
        <section class="info-bar info-bar-dark">
          <div class="container">

            <div class="row">

              <div class="col-sm-4">
                <i class="glyphicon glyphicon-globe"></i>
                <h3>FREE SHIPPING &amp; RETURN</h3>
                <p>Free shipping on all orders over $99.</p>
              </div>

              <div class="col-sm-4">
                <i class="glyphicon glyphicon-usd"></i>
                <h3>MONEY BACK GUARANTEE</h3>
                <p>100% money back guarantee.</p>
              </div>

              <div class="col-sm-4">
                <i class="glyphicon glyphicon-flag"></i>
                <h3>ONLINE SUPPORT 24/7</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

            </div>

          </div>
        </section>
        <!-- /INFO BAR -->


        <!-- FEATURED -->
        <section>
          <div class="container">

            <h2 class="owl-featured noborder"><strong>FEATURED</strong> PRODUCTS</h2>
            <div class="owl-carousel featured nomargin owl-padding-10"
                 data-plugin-options='{"loop":true,"singleItem": false, "items": "4", "stopOnHover":false, "autoPlay":4000, "autoHeight": false, "navigation": true, "pagination": false}'>

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p13.jpg"
                         alt="shop first image"/>
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p14.jpg"
                         alt="shop hover image"/>
                  </a>
                  <!-- /product image(s) -->

                </div>

                <div class="shop-item-summary text-center">
                  <h2>Cotton 100% - Pink Shirt</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    <span class="line-through">$98.00</span>
                    $78.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <!-- CAROUSEL -->
                    <div class="owl-carousel owl-padding-0 nomargin"
                         data-plugin-options='{"singleItem": true, "autoPlay": 3000, "navigation": false, "pagination": false, "transitionStyle":"fadeUp"}'>
                      <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p5.jpg"
                           alt="">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p1.jpg"
                           alt="">
                    </div>
                    <!-- /CAROUSEL -->
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Pink Dress 100% Cotton</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    $44.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p2.jpg"
                         alt="shop first image"/>
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p12.jpg"
                         alt="shop hover image"/>
                  </a>
                  <!-- /product image(s) -->

                </div>

                <div class="shop-item-summary text-center">
                  <h2>Black Fashion Hat</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    <span class="line-through">$77.00</span>
                    $65.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p8.jpg"
                         alt="shop first image"/>
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Beach Black Lady Suit</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    $56.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p7.jpg"
                         alt="shop first image"/>
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Town Dress - Black</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    $154.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p6.jpg"
                         alt="shop first image"/>
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p14.jpg"
                         alt="shop hover image"/>
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Chick Lady Fashion</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    $167.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p11.jpg"
                         alt="shop hover image"/>
                    <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p3.jpg"
                         alt="shop first image"/>
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Black Long Lady Shirt</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-0 size-13"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-price">
                    $128.00
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                </div>
                <!-- /buttons -->
              </div>
              <!-- /item -->

            </div>

          </div>
        </section>
        <!-- /FEATURED -->


        <!-- PARALLAX -->
        <section class="parallax parallax-2"
                 style="background-image: url('/static/assets/images/demo/particles_bg.jpg');">
          <div class="overlay dark-1"><!-- dark overlay [0 to 9 opacity] --></div>

          <div class="container">


            <div class="owl-carousel text-center owl-testimonial nomargin"
                 data-plugin-options='{"singleItem": true, "autoPlay": 3000, "navigation": false, "pagination": true}'>

              <div class="text-center">
                <h3 class="nomargin">Popular Products</h3>
                <p class="font-lato weight-300 lead nomargin-top">Incidunt deleniti blanditiis quas aperiam
                  recusandae consequatur ullam.</p>
              </div>

              <div class="text-center">
                <h3 class="nomargin">New Products</h3>
                <p class="font-lato weight-300 lead nomargin-top">Incidunt deleniti blanditiis quas aperiam
                  recusandae consequatur ullam.</p>
              </div>

            </div>


          </div>

        </section>
        <!-- /PARALLAX -->


        <!-- NEW PRODUCTS -->
        <section>
          <div class="container">

            <div class="heading-title heading-dotted">
              <h2 class="size-20">WOMEN DRESSES</h2>
            </div>

            <ul class="shop-item-list row list-inline nomargin">

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/5.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Blue Dress</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      <span class="line-through">$98.00</span>
                      $78.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/6.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Mobile Phone</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $53.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/7.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Black Shirt</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $68.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/8.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Backpack</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $19.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/9.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Blue Shoes</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $81.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/1.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Water Watch</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $38.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/2.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Bag</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $22.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/3.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Woman Bag</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $15.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/4.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Woman Hat</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $61.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/5.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Cotton Cap</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $56.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/6.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Sun Glasses</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $98.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <a class="shop-item-image" href="shop-single-left.html">
                      <img class="img-responsive" src="/static/assets/images/demo/shop/home/products/small/7.jpg"
                           alt=""/>
                    </a>
                    <!-- /product image(s) -->

                    <!-- hover buttons -->
                    <div class="shop-option-over">
                      <a class="btn btn-default" href="shop-cart.html"><i
                        class="fa fa-cart-plus size-18"></i></a>
                    </div>
                    <!-- /hover buttons -->

                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">Bag</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div class="rating rating-4 size-11"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-price">
                      $34.00
                    </div>
                    <!-- /price -->
                  </div>

                </div>

              </li>
              <!-- /ITEM -->

            </ul>

          </div>
        </section>
        <!-- NEW PRODUCTS -->


        <!-- NEW PRODUCTS -->
        <section>
          <div class="container">
            <div class="heading-title heading-dotted">
              <h2 class="size-20">WHAT CUSTOMERS SAY?</h2>
            </div>
            <!--
                Note: remove class="rounded" from the img for squared image!
            -->
            <ul class="row clearfix testimonial-dotted list-unstyled nomargin">
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/2-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Joana Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/6-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Melissa Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/7-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Stephany Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/8-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Pamela Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/11-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Simina Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
              <li class="col-md-4">
                <div class="testimonial">
                  <figure class="pull-left">
                    <img class="rounded" src="/static/assets/images/demo/people/300x300/12-min.jpg" alt=""/>
                  </figure>
                  <div class="testimonial-content">
                    <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum
                      libero illo rerum!</p>
                    <cite>
                      Mihaela Doe
                      <span>Company Ltd.</span>
                    </cite>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </section>
        <!-- NEW PRODUCTS -->


        <!-- BRANDS -->
        <section class="padding-xxs">
          <div class="container">

            <!--
                controlls-over		= navigation buttons over the image
                buttons-autohide 	= navigation buttons visible on mouse hover only

                data-plugin-options:
                    "singleItem": true
                    "autoPlay": true (or ms. eg: 4000)
                    "navigation": true
                    "pagination": true
            -->
            <div class="text-center">
              <div class="owl-carousel nomargin" data-plugin-options='{"singleItem": false, "autoPlay": 3000}'>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/1.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/2.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/3.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/4.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/5.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/6.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/7.jpg" alt="">
                </div>
                <div>
                  <img class="img-responsive" src="/static/assets/images/demo/brands/8.jpg" alt="">
                </div>
              </div>
            </div>

          </div>
        </section>
        <!-- BRANDS -->


        <!-- FOOTER -->
        <footer id="footer">
          <div class="container">

            <div class="row margin-top-60 margin-bottom-40 size-13">

              <!-- col #1 -->
              <div class="col-md-4 col-sm-4">

                <!-- Footer Logo -->
                <img class="footer-logo" src="/static/assets/images/logo-footer.png" alt=""/>

                <p>
                  Incredibly beautiful responsive Bootstrap Template for Corporate and Creative Professionals.
                </p>

                <h2>(800) 123-4567</h2>

                <!-- Social Icons -->
                <div class="clearfix">

                  <a href="#" class="social-icon social-icon-sm social-icon-border social-facebook pull-left"
                     data-toggle="tooltip" data-placement="top" title="Facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-border social-twitter pull-left"
                     data-toggle="tooltip" data-placement="top" title="Twitter">
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-border social-gplus pull-left"
                     data-toggle="tooltip" data-placement="top" title="Google plus">
                    <i class="icon-gplus"></i>
                    <i class="icon-gplus"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-border social-linkedin pull-left"
                     data-toggle="tooltip" data-placement="top" title="Linkedin">
                    <i class="icon-linkedin"></i>
                    <i class="icon-linkedin"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-border social-rss pull-left"
                     data-toggle="tooltip" data-placement="top" title="Rss">
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
                      <li><a class="block" href="#"><i class="fa fa-angle-right"></i> About Our Team</a>
                      </li>
                      <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Services</a></li>
                      <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Careers</a></li>
                      <li><a class="block" href="#"><i class="fa fa-angle-right"></i> Gallery</a></li>
                      <li><a class="block" href="#"><i class="fa fa-angle-right"></i> FAQ</a></li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <h4 class="letter-spacing-1">SECURE PAYMENT</h4>
                    <p>Donec tellus massa, tristique sit amet condim vel, facilisis quis sapien. Praesent id
                      enim sit amet.</p>
                    <p>    <!-- see /static/assets/images/cc/ for more icons -->
                      <img src="/static/assets/images/cc/Visa.png" alt=""/>
                      <img src="/static/assets/images/cc/Mastercard.png" alt=""/>
                      <img src="/static/assets/images/cc/Maestro.png" alt=""/>
                      <img src="/static/assets/images/cc/PayPal.png" alt=""/>
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


        <!--
            HOME SHOP - MODAL ON LOAD

            data-autoload="true" 			- load modal on page load
            data-autoload-delay="2000"		- load after 2000 ms (1000ms = 1s)
        -->
        <!--<div id="shopLoadModal" class="modal fade" data-autoload="true" data-autoload-delay="2000">-->
        <!--<div class="modal-dialog modal-full">-->
        <!--<div class="modal-content" style="background-image:url('/static/assets/images/misc/shop/shop_modal.jpg');">-->

        <!--&lt;!&ndash; header modal &ndash;&gt;-->
        <!--<div class="modal-header noborder">-->
        <!--<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>-->
        <!--</div>-->

        <!--&lt;!&ndash; body modal &ndash;&gt;-->
        <!--<div class="modal-body">-->

        <!--<div class="block-content">-->

        <!--<img src="/static/assets/images/logo-footer-dark.png" alt="" />-->
        <!--<p class="size-13 margin-bottom-20 margin-top-30">Subscribe to the Smarty newsletter to get all new products and all new discounts.</p>-->

        <!--&lt;!&ndash; newsletter &ndash;&gt;-->
        <!--<div class="inline-search clearfix margin-bottom-20">-->
        <!--<form action="php/newsletter.php" method="post" class="validate nomargin" data-success="Subscribed! Thank you!" data-toastr-position="bottom-right" novalidate="novalidate">-->

        <!--<input type="search" placeholder="Email Address" id="shop_email" name="shop_email" class="serch-input required">-->
        <!--<button type="submit">-->
        <!--<i class="fa fa-check"></i>-->
        <!--</button>-->
        <!--</form>-->
        <!--</div>-->
        <!--&lt;!&ndash; /newsletter &ndash;&gt;-->

        <!--&lt;!&ndash; Don't show this popup again &ndash;&gt;-->
        <!--<div class="size-11 text-left">-->
        <!--<label class="checkbox pull-left">-->
        <!--<input class="loadModalHide" type="checkbox" />-->
        <!--<i></i> <span class="weight-300">Don't show this popup again</span>-->
        <!--</label>-->

        <!--</div>-->
        <!--&lt;!&ndash; /Don't show this popup again &ndash;&gt;-->

        <!--</div>-->

        <!--</div>-->

        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!-- /HOME SHOP - MODAL ON LOAD -->


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


  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        slide: {
          image: {
            src1: 'https://images.bubbleroom.eu/data/product/676x980/brazilian-crochet-pantie.jpg',
            src2: 'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg',
            src3: 'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg'
          },
          title: {
            t1: 'Some Fucking Title 1',
            t2: 'Some Fucking Title 2',
            t3: 'Some Fucking Title 3'
          },
          subtitle: {
            st1:'Some Subtitle Shit 1',
            st2:'Some Subtitle Shit 2',
            st3:'Some Subtitle Shit 3'
          },
          description: {
            d1: 'Stupid ass description for the fucking field slider which is located on the fucking top of fucking home page of this stupid goddamn site 1',
            d2: 'Stupid ass description for the fucking field slider which is located on the fucking top of fucking home page of this stupid goddamn site 2',
            d3: 'Stupid ass description for the fucking field slider which is located on the fucking top of fucking home page of this stupid goddamn site 3'
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
<!-- SLIDE  -->
<!--<li data-transition="random" data-slotamount="1" data-masterspeed="1000" data-saveperformance="off"-->
    <!--data-title="Slide">-->

  <!--<img src="/static/assets/images/1x1.png" data-lazyload="/static/assets/images/demo/1200x800/10-min.jpg"-->
       <!--alt=""-->
       <!--data-bgfit="cover" data-bgposition="center top" data-bgrepeat="no-repeat"/>-->

  <!--<div class="tp-dottedoverlay twoxtwo">&lt;!&ndash; dotted overlay &ndash;&gt;</div>-->
  <!--<div class="overlay dark-3">&lt;!&ndash; dark overlay [1 to 9 opacity] &ndash;&gt;</div>-->

  <!--<div class="tp-caption customin ltl tp-resizeme text_white"-->
       <!--data-x="center"-->
       <!--data-y="105"-->
       <!--data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"-->
       <!--data-speed="800"-->
       <!--data-start="1000"-->
       <!--data-easing="easeOutQuad"-->
       <!--data-splitin="none"-->
       <!--data-splitout="none"-->
       <!--data-elementdelay="0.01"-->
       <!--data-endelementdelay="0.1"-->
       <!--data-endspeed="1000"-->
       <!--data-endeasing="Power4.easeIn" style="z-index: 10;">-->
    <!--<span class="weight-300">DEVELOPMENT / MARKETING / DESIGN / PHOTO</span>-->
  <!--</div>-->

  <!--<div class="tp-caption customin ltl tp-resizeme large_bold_white"-->
       <!--data-x="center"-->
       <!--data-y="155"-->
       <!--data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"-->
       <!--data-speed="800"-->
       <!--data-start="1200"-->
       <!--data-easing="easeOutQuad"-->
       <!--data-splitin="none"-->
       <!--data-splitout="none"-->
       <!--data-elementdelay="0.01"-->
       <!--data-endelementdelay="0.1"-->
       <!--data-endspeed="1000"-->
       <!--data-endeasing="Power4.easeIn" style="z-index: 10;">-->
    <!--WELCOME TO SMARTY-->
  <!--</div>-->

  <!--<div class="tp-caption customin ltl tp-resizeme small_light_white font-lato size-20"-->
       <!--data-x="center"-->
       <!--data-y="245"-->
       <!--data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"-->
       <!--data-speed="800"-->
       <!--data-start="1400"-->
       <!--data-easing="easeOutQuad"-->
       <!--data-splitin="none"-->
       <!--data-splitout="none"-->
       <!--data-elementdelay="0.01"-->
       <!--data-endelementdelay="0.1"-->
       <!--data-endspeed="1000"-->
       <!--data-endeasing="Power4.easeIn"-->
       <!--style="z-index: 10; width: 100%; max-width: 750px; white-space: normal; text-align:center;">-->
    <!--Fabulas definitiones ei pri per recteque hendrerit script2orem in errem scribentur mel-->
    <!--fastidii propriae philosophia cu mea.-->
  <!--</div>-->

  <!--<div class="tp-caption customin ltl tp-resizeme"-->
       <!--data-x="center"-->
       <!--data-y="313"-->
       <!--data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"-->
       <!--data-speed="800"-->
       <!--data-start="1550"-->
       <!--data-easing="easeOutQuad"-->
       <!--data-splitin="none"-->
       <!--data-splitout="none"-->
       <!--data-elementdelay="0.01"-->
       <!--data-endelementdelay="0.1"-->
       <!--data-endspeed="1000"-->
       <!--data-endeasing="Power4.easeIn" style="z-index: 10;">-->
    <!--<router-link to="feilds-list" class="btn btn-default btn-lg">-->
      <!--<span>start shopping &raquo;</span>-->
    <!--</router-link>-->
  <!--</div>-->

<!--</li>-->

<!--&lt;!&ndash; SLIDE &ndash;&gt;-->
<!--<li data-transition="fade" data-slotamount="7" data-masterspeed="1000" data-title="Slide">-->

  <!--<img src="/static/assets/images/demo/spotted.jpg" alt="video" data-bgposition="top center"-->
       <!--data-bgfit="cover" data-bgrepeat="no-repeat">-->

  <!--<div class="caption customin customout tp-resizeme"-->
       <!--data-x="right"-->
       <!--data-y="center"-->
       <!--data-voffset="-70"-->
       <!--data-customin="x:-50;y:-300;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"-->
       <!--data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"-->
       <!--data-speed="800"-->
       <!--data-start="1000"-->
       <!--data-startslide="1"-->
       <!--data-easing="Power4.easeOut"-->
       <!--data-endspeed="500"-->
       <!--data-endeasing="Power4.easeIn">-->
    <!--<h4>OVER 30% OFF</h4>-->
  <!--</div>-->

  <!--<div class="caption fade customout tp-resizeme"-->
       <!--data-x="right"-->
       <!--data-y="center"-->
       <!--data-voffset="-110"-->
       <!--data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"-->
       <!--data-speed="800"-->
       <!--data-start="1300"-->
       <!--data-startslide="1"-->
       <!--data-easing="Power4.easeOut"-->
       <!--data-endspeed="500"-->
       <!--data-endeasing="Power4.easeIn">-->
    <!--<h2>FASHION <strong>HUGE SALES</strong></h2>-->
  <!--</div>-->

  <!--<div class="caption customin customout tp-resizeme large_bold_white"-->
       <!--data-x="right"-->
       <!--data-y="center"-->
       <!--data-voffset="75"-->
       <!--data-customin="x:-50;y:100;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.1;scaleY:0.1;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"-->
       <!--data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"-->
       <!--data-speed="800"-->
       <!--data-start="1500"-->
       <!--data-startslide="1"-->
       <!--data-easing="Power4.easeOut"-->
       <!--data-endspeed="500"-->
       <!--data-endeasing="Power4.easeIn">-->
    <!--<router-link to="feilds-list" class="scrollTo btn btn-default btn-md btn-lg">-->
      <!--<span>start shopping &raquo;</span>-->
    <!--</router-link>-->
  <!--</div>-->


  <!--<div class="caption customin customout tp-resizeme"-->
       <!--data-x="left"-->
       <!--data-hoffset="0"-->
       <!--data-y="center"-->
       <!--data-voffset="0"-->
       <!--data-customin="x:50;y:150;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.5;scaleY:0.5;skewX:0;skewY:0;opacity:0;transformPerspective:0;transformOrigin:50% 50%;"-->
       <!--data-customout="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0.75;scaleY:0.75;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"-->
       <!--data-speed="800"-->
       <!--data-start="1800"-->
       <!--data-startslide="1"-->
       <!--data-easing="Power4.easeOut"-->
       <!--data-endspeed="500"-->
       <!--data-endeasing="Power4.easeIn"-->
       <!--data-autoplay="false"-->
       <!--data-autoplayonlyfirsttime="false">-->
    <!--<iframe-->
      <!--src="http://player.vimeo.com/video/58238439?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff"-->
      <!--width="480" height="275" allowfullscreen></iframe>-->
  <!--</div>-->
<!--</li>-->
