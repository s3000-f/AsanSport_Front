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

          <div class="col-lg-3 col-md-3 order-md-1 order-lg-1">

            <!-- CATEGORIES -->
            <div class="side-nav mb-60">

              <div class="side-nav-head">
                <button class="fa fa-bars"></button>
                <h4>CATEGORIES</h4>
              </div>

              <ul class="list-group list-group-bordered list-group-noicon uppercase">
                <li class="list-group-item active">
                  <a class="dropdown-toggle" href="#">WOMEN</a>
                  <ul>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(123)</span> Shoes &amp; Boots</a></li>
                    <li class="active"><a href="#"><span class="fs-11 text-muted float-right">(331)</span> Top &amp; Blouses</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(234)</span> Dresses &amp; Skirts</a></li>
                    <li class="list-group-item active">
                      <a class="dropdown-toggle" href="#">DEEP LEVEL NAV</a>
                      <ul>
                        <li><a href="#"><span class="fs-11 text-muted float-right">(88)</span> Accessories</a></li>
                        <li><a href="#"><span class="fs-11 text-muted float-right">(67)</span> Shoes &amp; Boots</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">MEN</a>
                  <ul>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(88)</span> Accessories</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(67)</span> Shoes &amp; Boots</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(32)</span> Dresses &amp; Skirts</a></li>
                    <li class="active"><a href="#"><span class="fs-11 text-muted float-right">(78)</span> Top &amp; Blouses</a></li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">JEWELLERY</a>
                  <ul>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(23)</span> Dresses &amp; Skirts</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(34)</span> Shoes &amp; Boots</a></li>
                    <li class="active"><a href="#"><span class="fs-11 text-muted float-right">(21)</span> Top &amp; Blouses</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(88)</span> Accessories</a></li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">KIDS</a>
                  <ul>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(88)</span> Shoes &amp; Boots</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(22)</span> Dresses &amp; Skirts</a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right">(31)</span> Accessories</a></li>
                    <li class="active"><a href="#"><span class="fs-11 text-muted float-right">(18)</span> Top &amp; Blouses</a></li>
                  </ul>
                </li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(189)</span> ACCESSORIES</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(61)</span> GLASSES</a></li>

              </ul>

            </div>
            <!-- /CATEGORIES -->

            <!-- SIZE -->
            <div class="mb-60">
              <h4>SIZE</h4>

              <a class="tag" href="#">
                <span class="txt">S</span>
              </a>
              <a class="tag" href="#">
                <span class="txt bold">M</span>
              </a>
              <a class="tag" href="#">
                <span class="txt">L</span>
              </a>
              <a class="tag" href="#">
                <span class="txt">XL</span>
              </a>
              <a class="tag" href="#">
                <span class="txt">2XL</span>
              </a>
              <a class="tag" href="#">
                <span class="txt">3XL</span>
              </a>

              <hr>

              <div class="clearfix fs-12">
                <a class="float-right fa fa-remove" href="#"></a>
                SELECTED SIZE: <strong>M</strong>
              </div>
            </div>
            <!-- /SIZE -->


            <!-- COLOR -->
            <div class="mb-60">
              <h4>COLOR</h4>

              <a class="tag shop-color" href="#" style="background-color:#000000"></a>
              <a class="tag shop-color" href="#" style="background-color:#FFFFFF"></a>
              <a class="tag shop-color" href="#" style="background-color:#C0C0C0"></a>
              <a class="tag shop-color" href="#" style="background-color:#0000E0"></a>
              <a class="tag shop-color" href="#" style="background-color:#800080"></a>
              <a class="tag shop-color" href="#" style="background-color:#FF0000"></a>
              <a class="tag shop-color" href="#" style="background-color:#FF0080"></a>
              <a class="tag shop-color" href="#" style="background-color:#FF6600"></a>
              <a class="tag shop-color" href="#" style="background-color:#E0DCC8"></a>
              <a class="tag shop-color" href="#" style="background-color:#F0E68C"></a>
              <a class="tag shop-color" href="#" style="background-color:#FFFFD0"></a>
              <a class="tag shop-color" href="#" style="background-color:#4B0082"></a>
              <a class="tag shop-color" href="#" style="background-color:#666666"></a>
              <a class="tag shop-color" href="#" style="background-color:#00FF00"></a>
              <a class="tag shop-color" href="#" style="background-color:#36454F"></a>
              <a class="tag shop-color" href="#" style="background-color:#F4A460"></a>
              <a class="tag shop-color" href="#" style="background-color:#0088CC"></a>
              <a class="tag shop-color" href="#" style="background-color:#B38B6D"></a>

              <hr>

              <div class="clearfix fs-12">
                <a class="float-right fa fa-remove" href="#"></a>
                SELECTED COLOR: <strong>Red</strong>
              </div>
            </div>
            <!-- /COLOR -->


            <!-- BRANDS -->
            <div class="side-nav mb-60">

              <div class="side-nav-head">
                <button class="fa fa-bars"></button>
                <h4>BRANDS</h4>
              </div>

              <ul class="list-group list-unstyled">
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(21)</span> Armani</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(44)</span> Nike</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(2)</span> Jolidon</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(18)</span> Ralph Lauren</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(87)</span> Lotto</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(32)</span> Fila</a></li>
                <li class="list-group-item"><a href="#"><span class="fs-11 text-muted float-right">(69)</span> Boss</a></li>
              </ul>

            </div>
            <!-- BRANDS -->


            <!-- BANNER ROTATOR -->
            <div class="owl-carousel buttons-autohide controlls-over mb-60 text-center owl-theme owl-carousel-init" data-plugin-options="{&quot;singleItem&quot;: true, &quot;autoPlay&quot;: 4000, &quot;navigation&quot;: true, &quot;pagination&quot;: false, &quot;transitionStyle&quot;:&quot;goDown&quot;}" style="opacity: 1; display: block;">
              <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 1052px; left: 0px; display: block; transition: all 0ms ease; transform: translate3d(0px, 0px, 0px); transform-origin: 131.5px center 0px; perspective-origin: 131.5px center;"><div class="owl-item" style="width: 263px;"><a href="#">
                <img class="img-fluid" src="demo_files/images/shop/banners/off_1.png" width="270" height="350" alt="">
              </a></div><div class="owl-item" style="width: 263px;"><a href="#">
                <img class="img-fluid" src="demo_files/images/shop/banners/off_2.png" width="270" height="350" alt="">
              </a></div></div></div>

              <div class="owl-controls clickable"><div class="owl-buttons"><div class="owl-prev"><i class="fa fa-angle-left"></i></div><div class="owl-next"><i class="fa fa-angle-right"></i></div></div></div></div>
            <!-- /BANNER ROTATOR -->


            <!-- FEATURED -->
            <div class="mb-60">

              <h2 class="owl-featured">FEATURED</h2>
              <div class="owl-carousel featured owl-theme owl-carousel-init" data-plugin-options="{&quot;singleItem&quot;: true, &quot;stopOnHover&quot;:false, &quot;autoPlay&quot;:false, &quot;autoHeight&quot;: false, &quot;navigation&quot;: true, &quot;pagination&quot;: false}" style="opacity: 1; display: block;">

                <div class="owl-wrapper-outer"><div class="owl-wrapper" style="width: 1052px; left: 0px; display: block;"><div class="owl-item" style="width: 263px;"><div><!-- SLIDE 1 -->
                  <ul class="list-unstyled m-0 p-0 text-left">

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p10.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-12" href="#">Long Grey Dress - Special</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$132.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p2.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-1" href="#">Black Fashion Hat</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$65.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p13.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-1" href="#">Cotton 100% - Pink Dress</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$77.00</div>
                    </li><!-- /item -->

                  </ul>
                </div></div><div class="owl-item" style="width: 263px;"><div><!-- SLIDE 2 -->
                  <ul class="list-unstyled m-0 p-0 text-left">

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p12.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-12" href="#">Long Grey Dress - Special</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$132.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p6.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-1" href="#">Black Fashion Hat</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$65.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix float-left">
                        <a href="#">
                          <img src="demo_files/images/shop/products/100x100/p14.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block fs-1" href="#">Cotton 100% - Pink Dress</a>
                      <div class="rating rating-4 fs-13 fw-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="fs-18 text-left">$77.00</div>
                    </li><!-- /item -->

                  </ul>
                </div></div></div></div><!-- /SLIDE 1 -->

                <!-- /SLIDE 2 -->

                <div class="owl-controls clickable"><div class="owl-buttons"><div class="owl-prev"><i class="fa fa-angle-left"></i></div><div class="owl-next"><i class="fa fa-angle-right"></i></div></div></div></div>

            </div>
            <!-- /FEATURED -->


            <!-- HTML BLOCK -->
            <div class="mb-60">
              <h4>HTML BLOCK</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus eunit.</p>

              <form action="#" method="post">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                  <input type="email" id="kiremail" name="email" class="form-control required" placeholder="Enter your Email">
                  <span class="input-group-btn">
											<button class="btn btn-success" type="submit"><i class="glyphicon glyphicon-send"></i></button>
										</span>
                </div>
              </form>

            </div>
            <!-- /HTML BLOCK -->

          </div>

          <div id="portfolio" class="portfolio-gutter portfolio-title-over col-md-9">

            <ul class="nav nav-pills mix-filter mb-60">
              <li data-filter="all" class="filter active"><a href="#">All</a></li>
              <li data-filter="development" class="filter"><a href="#">Development</a></li>
              <li data-filter="photography" class="filter"><a href="#">Photography</a></li>
              <li data-filter="design" class="filter"><a href="#">Design</a></li>
            </ul>


            <div class="row mix-grid" >


              <div class="col-md-6 col-sm-6 mix development mix_all " v-for="field in fields" style="display: block;  opacity: 1;"><!-- item -->

                <div class="item-box">
                  <figure>
										<span class="item-hover">
											<span class="overlay dark-5"></span>
											<span class="inner">


                        <!-- details -->
												<router-link class="ico-rounded" v-bind:to="'/fields/' + field.id">
													<span class="glyphicon glyphicon-option-horizontal fs-20"></span>
												</router-link>

											</span>
										</span>

                    <!-- overlay title -->
                    <div class="item-box-overlay-title">
                      <h3>Street Photography</h3>
                      <ul class="list-inline categories m-0">
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Design</a></li>
                      </ul>
                    </div><!-- /overlay title -->

                    <img class="img-fluid" src="/static/assets/images/demo/mockups/600x399/20-min.jpg" width="600" height="399" alt="">
                  </figure>
                </div>

              </div><!-- /item -->

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
