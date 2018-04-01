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
                <a href="javascript:">
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
                      <img src="/static/assets/images/demo/people/300x300/4-min.jpg" width="45" height="45" alt=""/>
                      <h6><span>2x</span> RED BAG WITH HUGE POCKETS</h6>
                      <small>$37.21</small>
                    </a><!-- /cart item -->

                    <a href="#"><!-- cart item -->
                      <img src="/static/assets/images/demo/people/300x300/5-min.jpg" width="45" height="45" alt=""/>
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
      <section class="page-header dark page-header-xs">
        <div class="container">

          <h1>PORTFOLIO</h1>

          <!-- breadcrumbs -->
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li class="active">Grid - 1 Column</li>
          </ol><!-- /breadcrumbs -->


        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div id="portfolio">

            <ul class="nav nav-pills mix-filter margin-bottom-60">
              <li data-filter="all" class="filter active"><a href="#">All</a></li>
              <li data-filter="development" class="filter"><a href="#">Development</a></li>
              <li data-filter="photography" class="filter"><a href="#">Photography</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
            </ul>


            <div v-for="field in fields">

              <div class="row mix design" ><!-- item -->

                <div class="col-md-7"><!-- image -->
                  <div class="item-box">
                    <figure>
											<span class="item-hover">
												<span class="overlay dark-5"></span>
												<span class="inner">

													<!-- lightbox -->
													<a class="ico-rounded lightbox" href="/static/assets/images/demo/mockups/1200x800/6-min.jpg"
                             data-plugin-options='{"type":"image"}'>
														<span class="fa fa-plus size-20"></span>
													</a>

                          <!-- details -->
													<router-link class="ico-rounded" v-bind:to="'/field-details/' + field.id"   >
														<span class="glyphicon glyphicon-option-horizontal size-20"></span>
													</router-link>

												</span>
											</span>

                      <!-- carousel -->
                      <div class="owl-carousel buttons-autohide controlls-over nomargin"
                           data-plugin-options='{"singleItem": true, "autoPlay": 4000, "navigation": false, "pagination": true, "transitionStyle":"goDown"}'>
                        <div>
                          <img class="img-responsive" src="/static/assets/images/demo/mockups/600x399/8-min.jpg"
                               width="800" height="533" alt="">
                        </div>
                        <div>
                          <img class="img-responsive" src="/static/assets/images/demo/mockups/600x399/9-min.jpg"
                               width="800" height="533" alt="">
                        </div>
                        <div>
                          <img class="img-responsive" src="/static/assets/images/demo/mockups/600x399/10-min.jpg"
                               width="800" height="533" alt="">
                        </div>
                      </div>
                      <!-- /carousel -->

                    </figure>
                  </div>
                </div><!-- /image -->

                <div class="col-md-5"><!-- description -->
                  <h2>
                    <router-link class="ico-rounded" v-bind:to="'/field-details/' + field.id"   >
                      {{field.name}}
                    </router-link>
                  </h2>
                  <ul class="list-inline categories nomargin">
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Design</a></li>
                  </ul>

                  <div class="margin-top-30"><!-- description -->

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales
                      sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et,
                      iaculis ac massa. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et
                      lacus neque.</p>

                    <ul class="list-unstyled">
                      <li>
                        <i class="fa fa-check"></i>
                        <strong>Technologies:</strong> PHP, Mysql, Redis
                      </li>
                      <li>
                        <i class="fa fa-check"></i>
                        <strong>Date:</strong> 29th June, 2015
                      </li>
                      <li>
                        <i class="fa fa-check"></i>
                        <strong>Client:</strong> Lorem Company LLC
                      </li>
                    </ul>

                    <a class="btn btn-lg btn-default btn-bordered size-15" href="portfolio-single-slider.html">PROJECT
                      DETAIL</a>

                  </div>

                </div><!-- /description -->


              </div><!-- /item -->

              <div class="divider margin-top-10 margin-bottom-10"></div>


            </div>

          </div>

        </div>
      </section>
      <!-- / -->


      <!-- FOOTER -->
      <footer id="footer">
        <div class="container">

          <div class="row">

            <div class="col-md-3">
              <!-- Footer Logo -->
              <img class="footer-logo" src="/static/assets/images/logo-footer.png" alt=""/>

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


    <!-- PRELOADER -->
    <!--<div id="preloader">-->
    <!--<div class="inner">-->
    <!--<span class="loader"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!-- /PRELOADER -->


    <!-- JAVASCRIPT FILES -->
    <!--<script type="text/javascript">var plugin_path = 'assets/plugins/';</script>-->
    <!--<script type="text/javascript" src="assets/plugins/jquery/jquery-2.1.4.min.js"></script>-->

    <!--<script type="text/javascript" src="assets/js/scripts.js"></script>-->

    <!--&lt;!&ndash; STYLESWITCHER - REMOVE &ndash;&gt;-->
    <!--<script async type="text/javascript" src="assets/plugins/styleswitcher/styleswitcher.js"></script>-->
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    data: function () {
      return {
        name: 'FieldsList',
        fields: [],
        shit:[]
      // {
      //   id: '',
      //     name: '',
      //   address: ''
      // }
      }
    },
    created() {
      this.getFields()
    },
    watch: {
      '$route': 'getFields'
    },
    methods: {
      getFields() {
        axios.get("http://api.shahbandegan.ir/v1/fields")
          .then(response => {
            console.log(response.data.data);
            this.shit = response.data.value;
            this.fields = response.data.data;
            // this.fields.push(response.data["id"] , response.data["name"] ,  response.data["address"]);
            console.log(this.fields[0] + "============")
          })

      }
    }

  }
</script>
