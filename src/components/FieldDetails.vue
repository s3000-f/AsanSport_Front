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
          <li class="hidden-xs"><a href="page-login-1.html">LOGIN</a></li>
          <li class="hidden-xs"><a href="page-register-1.html">REGISTER</a></li>
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

        <h1>This is the product title</h1>

        <!-- breadcrumbs -->
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li class="active">Single</li>
        </ol><!-- /breadcrumbs -->

      </div>
    </section>
    <!-- /PAGE HEADER -->




    <!-- -->
    <section>
      <div class="container">

        <div class="row">

          <!-- RIGHT -->
          <div class="col-lg-9 col-md-9 col-sm-9 col-lg-push-3 col-md-push-3 col-sm-push-3">

            <div class="row">

              <!-- IMAGE -->
              <div class="col-lg-6 col-sm-6">

                <div class="thumbnail relative margin-bottom-3">

                  <!--
                                          IMAGE ZOOM

                                          data-mode="mouseover|grab|click|toggle"
                                      -->
                  <figure id="zoom-primary" class="zoom" data-mode="mouseover">
                    <!--
                                              zoom buttton

                                              positions available:
                                                  .bottom-right
                                                  .bottom-left
                                                  .top-right
                                                  .top-left
                                          -->
                    <a class="lightbox bottom-right" href="assets/images/demo/shop/products/1000x1500/p5.jpg" data-plugin-options='{"type":"image"}'><i class="glyphicon glyphicon-search"></i></a>

                    <!--
                                              image

                                              Extra: add .image-bw class to force black and white!
                                          -->
                    <img class="img-responsive" src="assets/images/demo/shop/products/1000x1500/p5.jpg" width="1200" height="1500" alt="This is the product title" />
                  </figure>

                </div>

                <!-- Thumbnails (required height:100px) -->
                <div data-for="zoom-primary" class="zoom-more owl-carousel owl-padding-3 featured" data-plugin-options='{"singleItem": false, "autoPlay": false, "navigation": true, "pagination": false}'>
                  <a class="thumbnail active" href="assets/images/demo/shop/products/1000x1500/p5.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p5.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p6.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p6.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p7.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p7.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p8.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p8.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p9.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p9.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p10.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p10.jpg" height="100" alt="" />
                  </a>
                  <a class="thumbnail" href="assets/images/demo/shop/products/1000x1500/p11.jpg">
                    <img src="assets/images/demo/shop/products/100x100/p11.jpg" height="100" alt="" />
                  </a>
                </div>
                <!-- /Thumbnails -->

              </div>
              <!-- /IMAGE -->

              <!-- ITEM DESC -->
              <div class="col-lg-6 col-sm-6">

                <!-- buttons -->
                <div class="pull-right">
                  <!-- replace data-item-id width the real item ID - used by js/view/demo.shop.js -->
                  <a class="btn btn-default add-wishlist" href="#" data-item-id="1" data-toggle="tooltip" title="Add To Wishlist"><i class="fa fa-heart nopadding"></i></a>
                  <a class="btn btn-default add-compare" href="#" data-item-id="1" data-toggle="tooltip" title="Add To Compare"><i class="fa fa-bar-chart-o nopadding" data-toggle="tooltip"></i></a>
                </div>
                <!-- /buttons -->

                <!-- price -->
                <div class="shop-item-price">
                  <span class="line-through nopadding-left">$98.00</span>
                  $78.00
                </div>
                <!-- /price -->

                <hr />

                <div class="clearfix margin-bottom-30">
                  <span class="pull-right text-success"><i class="fa fa-check"></i> In Stock</span>
                  <!--
                                      <span class="pull-right text-danger"><i class="glyphicon glyphicon-remove"></i> Out of Stock</span>
                                      -->

                  <strong>SKU:</strong> UY7321987
                </div>


                <!-- short description -->
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <!-- /short description -->


                <!-- countdown -->
                <div class="text-center">
                  <h5>Limited Offer</h5>
                  <div class="countdown" data-from="January 31, 2018 15:03:26" data-labels="years,months,weeks,days,hour,min,sec"><!-- Example Date From: December 31, 2018 15:03:26 --></div>
                </div>
                <!-- /countdown -->


                <hr />

                <!-- FORM -->
                <form class="clearfix form-inline nomargin" method="get" action="shop-cart.html">
                  <input type="hidden" name="product_id" value="1" />

                  <!-- see assets/js/view/demo.shop.js -->
                  <input type="hidden" id="color" name="color" value="yellow" />
                  <input type="hidden" id="qty" name="qty" value="1" />
                  <input type="hidden" id="size" name="size" value="5" />
                  <!-- see assets/js/view/demo.shop.js -->

                  <div class="btn-group pull-left product-opt-color">
                    <button type="button" class="btn btn-default dropdown-toggle product-color-dd noradius" data-toggle="dropdown">&nbsp;
                      <span class="caret"></span>
                      <span id="product-selected-color" class="tag shop-color" style="background-color:#F0E68C"></span>
                    </button>

                    <!--
                                              href = required to be hex color starting with: #
                                              data-val = color name or color id from the database
                                          -->
                    <ul id="product-color-dd" class="dropdown-menu clearfix" role="menu">
                      <li class="active"><a class="tag shop-color" data-val="purple" href="#800080" style="background-color:#800080"></a></li>
                      <li><a class="tag shop-color" data-val="red" href="#FF0000" style="background-color:#FF0000"></a></li>
                      <li><a class="tag shop-color" data-val="pink" href="#FF0080" style="background-color:#FF0080"></a></li>
                      <li><a class="tag shop-color" data-val="orange" href="#FF6600" style="background-color:#FF6600"></a></li>
                      <li><a class="tag shop-color" data-val="grey" href="#E0DCC8" style="background-color:#E0DCC8"></a></li>
                      <li><a class="tag shop-color" data-val="yellow" href="#F0E68C" style="background-color:#F0E68C"></a></li>
                      <li><a class="tag shop-color" data-val="light-yellow" href="#FFFFD0" style="background-color:#FFFFD0"></a></li>
                      <li><a class="tag shop-color" style="background-color:#4B0082"></a></li>
                      <li><a class="tag shop-color" data-val="dark-grey" href="#666666" style="background-color:#666666"></a></li>
                      <li><a class="tag shop-color" data-val="green" href="#00FF00" style="background-color:#00FF00"></a></li>
                    </ul>
                  </div><!-- /btn-group -->

                  <div class="btn-group pull-left product-opt-size">
                    <button type="button" class="btn btn-default dropdown-toggle product-size-dd noradius" data-toggle="dropdown">
                      <span class="caret"></span>
                      Size <small id="product-selected-size">(<span>5</span>)</small>
                    </button>

                    <!-- data-val = size value or size id -->
                    <ul id="product-size-dd" class="dropdown-menu" role="menu">
                      <li class="active"><a data-val="5" href="#">5</a></li>
                      <li><a data-val="5.5" href="#">5.5</a></li>
                      <li><a data-val="6" href="#">6</a></li>
                      <li><a data-val="6.5" href="#">6.5</a></li>
                      <li><a data-val="7" href="#">7</a></li>
                      <li><a data-val="7.5" href="#">7.7</a></li>
                      <li><a data-val="8" href="#">8</a></li>
                      <li><a data-val="8.5" href="#">8.5</a></li>
                      <li><a data-val="9" href="#">9</a></li>
                      <li><a data-val="9.5" href="#">9.5</a></li>
                      <li><a data-val="10" href="#">10</a></li>
                      <li><a data-val="10.5" href="#">10.5</a></li>
                      <li><a data-val="11" href="#">11</a></li>
                      <li><a data-val="11.5" href="#">11.5</a></li>
                      <li><a data-val="12" href="#">12</a></li>
                      <li><a data-val="13" href="#">13</a></li>
                      <li><a data-val="14" href="#">14</a></li>
                    </ul>
                  </div><!-- /btn-group -->

                  <div class="btn-group pull-left product-opt-qty">
                    <button type="button" class="btn btn-default dropdown-toggle product-qty-dd noradius" data-toggle="dropdown">
                      <span class="caret"></span>
                      Qty <small id="product-selected-qty">(<span>5</span>)</small>
                    </button>

                    <ul id="product-qty-dd" class="dropdown-menu clearfix" role="menu">
                      <li class="active"><a data-val="1" href="#">1</a></li>
                      <li><a data-val="2" href="#">2</a></li>
                      <li><a data-val="3" href="#">3</a></li>
                      <li><a data-val="4" href="#">4</a></li>
                      <li><a data-val="5" href="#">5</a></li>
                      <li><a data-val="6" href="#">6</a></li>
                      <li><a data-val="7" href="#">7</a></li>
                      <li><a data-val="8" href="#">8</a></li>
                      <li><a data-val="9" href="#">9</a></li>
                      <li><a data-val="10" href="#">10</a></li>
                    </ul>
                  </div><!-- /btn-group -->

                  <button class="btn btn-primary pull-left product-add-cart noradius">ADD TO CART</button>

                </form>
                <!-- /FORM -->


                <hr />

                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla,
                  commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim
                  massa, sodales tempor convallis et.
                </small>

                <hr />

                <!-- Share -->
                <div class="pull-right">

                  <a href="#" class="social-icon social-icon-sm social-icon-transparent social-facebook pull-left" data-toggle="tooltip" data-placement="top" title="Facebook">
                    <i class="icon-facebook"></i>
                    <i class="icon-facebook"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-transparent social-twitter pull-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                    <i class="icon-twitter"></i>
                    <i class="icon-twitter"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-transparent social-gplus pull-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                    <i class="icon-gplus"></i>
                    <i class="icon-gplus"></i>
                  </a>

                  <a href="#" class="social-icon social-icon-sm social-icon-transparent social-linkedin pull-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                    <i class="icon-linkedin"></i>
                    <i class="icon-linkedin"></i>
                  </a>

                </div>
                <!-- /Share -->


                <!-- rating -->
                <div class="rating rating-4 size-13 margin-top-10 width-100"><!-- rating-0 ... rating-5 --></div>
                <!-- /rating -->

              </div>
              <!-- /ITEM DESC -->

            </div>



            <ul id="myTab" class="nav nav-tabs nav-top-border margin-top-80" role="tablist">
              <li role="presentation" class="active"><a href="#description" role="tab" data-toggle="tab">Description</a></li>
              <li role="presentation"><a href="#specs" role="tab" data-toggle="tab">Specifications</a></li>
              <li role="presentation"><a href="#reviews" role="tab" data-toggle="tab">Reviews (2)</a></li>
            </ul>

            <div class="tab-content padding-top-20">
              <!-- DESCRIPTION -->
              <div role="tabpanel" class="tab-pane fade in active" id="description">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Aliquam fermentum commodo magna, id pretium nisi elementum at. Nulla molestie, ligula in fringilla rhoncus, risus leo dictum est, nec egestas nunc sem tincidunt turpis. Sed posuere consectetur est at lobortis.</p>
                <p>Donec blandit ultrices condimentum. Aliquam fermentum commodo magna, id pretium nisi elementum at. Nulla molestie, ligula in fringilla rhoncus, risus leo dictum est, nec egestas nunc sem tincidunt turpis. Sed posuere consectetur est at lobortis.</p>
              </div>

              <!-- SPECIFICATIONS -->
              <div role="tabpanel" class="tab-pane fade" id="specs">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                    <tr>
                      <th>Column name</th>
                      <th>Column name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Size</td>
                      <td>2XL</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Red</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>132lbs</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>74cm</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      <td><i class="fa fa-check text-success"></i> YES</td>
                    </tr>
                    <tr>
                      <td>Wi-Fi</td>
                      <td><i class="glyphicon glyphicon-remove text-danger"></i> NO</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- REVIEWS -->
              <div role="tabpanel" class="tab-pane fade" id="reviews">
                <!-- REVIEW ITEM -->
                <div class="block margin-bottom-60">

										<span class="user-avatar"><!-- user-avatar -->
											<img class="pull-left media-object" src="assets/images/avatar2.jpg" width="64" height="64" alt="">
										</span>

                  <div class="media-body">
                    <h4 class="media-heading size-14">
                      John Doe &ndash;
                      <span class="text-muted">June 29, 2014 - 11:23</span> &ndash;
                      <span class="size-14 text-muted"><!-- stars -->
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star-o"></i>
												</span>
                    </h4>

                    <p>
                      Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque.
                    </p>

                  </div>

                </div>
                <!-- /REVIEW ITEM -->

                <!-- REVIEW ITEM -->
                <div class="block margin-bottom-60">

										<span class="user-avatar"><!-- user-avatar -->
											<img class="pull-left media-object" src="assets/images/avatar2.jpg" width="64" height="64" alt="">
										</span>

                  <div class="media-body">
                    <h4 class="media-heading size-14">
                      John Doe &ndash;
                      <span class="text-muted">June 29, 2014 - 11:23</span> &ndash;
                      <span class="size-14 text-muted"><!-- stars -->
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star-o"></i>
													<i class="fa fa-star-o"></i>
												</span>
                    </h4>

                    <p>
                      Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque.
                    </p>

                  </div>

                </div>
                <!-- /REVIEW ITEM -->


                <!-- REVIEW FORM -->
                <h4 class="page-header margin-bottom-40">ADD A REVIEW</h4>
                <form method="post" action="#" id="form">

                  <div class="row margin-bottom-10">

                    <div class="col-md-6 margin-bottom-10">
                      <!-- Name -->
                      <input type="text" name="name" id="name" class="form-control" placeholder="Name *" maxlength="100" required="">
                    </div>

                    <div class="col-md-6">
                      <!-- Email -->
                      <input type="email" name="email" id="email" class="form-control" placeholder="Email *" maxlength="100" required="">
                    </div>

                  </div>

                  <!-- Comment -->
                  <div class="margin-bottom-30">
                    <textarea name="text" id="text" class="form-control" rows="6" placeholder="Comment" maxlength="1000"></textarea>
                  </div>

                  <!-- Stars -->
                  <div class="product-star-vote clearfix">

                    <label class="radio pull-left">
                      <input type="radio" name="product-review-vote" value="1" />
                      <i></i> 1 Star
                    </label>

                    <label class="radio pull-left">
                      <input type="radio" name="product-review-vote" value="2" />
                      <i></i> 2 Stars
                    </label>

                    <label class="radio pull-left">
                      <input type="radio" name="product-review-vote" value="3" />
                      <i></i> 3 Stars
                    </label>

                    <label class="radio pull-left">
                      <input type="radio" name="product-review-vote" value="4" />
                      <i></i> 4 Stars
                    </label>

                    <label class="radio pull-left">
                      <input type="radio" name="product-review-vote" value="5" />
                      <i></i> 5 Stars
                    </label>

                  </div>

                  <!-- Send Button -->
                  <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> Send Review</button>

                </form>
                <!-- /REVIEW FORM -->

              </div>
            </div>


            <hr class="margin-top-80 margin-bottom-80" />


            <h2 class="owl-featured"><strong>Related</strong> products:</h2>
            <div class="owl-carousel featured nomargin owl-padding-10" data-plugin-options='{"singleItem": false, "items": "4", "stopOnHover":false, "autoPlay":4500, "autoHeight": false, "navigation": true, "pagination": false}'>

              <!-- item -->
              <div class="shop-item nomargin">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <a class="shop-item-image" href="shop-single-left.html">
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p13.jpg" alt="shop first image" />
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p14.jpg" alt="shop hover image" />
                  </a>
                  <!-- /product image(s) -->

                  <!-- product more info -->
                  <div class="shop-item-info">
                    <span class="label label-success">NEW</span>
                    <span class="label label-danger">SALE</span>
                  </div>
                  <!-- /product more info -->
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
                    <div class="owl-carousel owl-padding-0 nomargin" data-plugin-options='{"singleItem": true, "autoPlay": 3000, "navigation": false, "pagination": false, "transitionStyle":"fadeUp"}'>
                      <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p5.jpg" alt="">
                      <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p1.jpg" alt="">
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
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p2.jpg" alt="shop first image" />
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p12.jpg" alt="shop hover image" />
                  </a>
                  <!-- /product image(s) -->

                  <!-- product more info -->
                  <div class="shop-item-info">
                    <span class="label label-success">NEW</span>
                    <span class="label label-danger">SALE</span>
                  </div>
                  <!-- /product more info -->
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
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p8.jpg" alt="shop first image" />
                  </a>
                  <!-- /product image(s) -->

                  <!-- countdown -->
                  <div class="shop-item-counter">
                    <div class="countdown" data-from="December 31, 2017 08:22:01" data-labels="years,months,weeks,days,hour,min,sec"><!-- Example Date From: December 31, 2018 15:03:26 --></div>
                  </div>
                  <!-- /countdown -->
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
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p7.jpg" alt="shop first image" />
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
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p6.jpg" alt="shop first image" />
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p14.jpg" alt="shop hover image" />
                  </a>
                  <!-- /product image(s) -->
                </div>

                <div class="shop-item-summary text-center">
                  <h2>Chick Lady Fashion</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div class="rating rating-4 size-13"><!-- rating-0 ... rating-5 --></div>
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
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p11.jpg" alt="shop hover image" />
                    <img class="img-responsive" src="assets/images/demo/shop/products/300x450/p3.jpg" alt="shop first image" />
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


          <!-- LEFT -->
          <div class="col-lg-3 col-md-3 col-sm-3 col-lg-pull-9 col-md-pull-9 col-sm-pull-9">

            <!-- CATEGORIES -->
            <div class="side-nav margin-bottom-60">

              <div class="side-nav-head">
                <button class="fa fa-bars"></button>
                <h4>CATEGORIES</h4>
              </div>

              <ul class="list-group list-group-bordered list-group-noicon uppercase">
                <li class="list-group-item active">
                  <a class="dropdown-toggle" href="#">WOMEN</a>
                  <ul>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(123)</span> Shoes &amp; Boots</a></li>
                    <li class="active"><a href="#"><span class="size-11 text-muted pull-right">(331)</span> Top &amp; Blouses</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(234)</span> Dresses &amp; Skirts</a></li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">MEN</a>
                  <ul>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(88)</span> Accessories</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(67)</span> Shoes &amp; Boots</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(32)</span> Dresses &amp; Skirts</a></li>
                    <li class="active"><a href="#"><span class="size-11 text-muted pull-right">(78)</span> Top &amp; Blouses</a></li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">JEWELLERY</a>
                  <ul>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(23)</span> Dresses &amp; Skirts</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(34)</span> Shoes &amp; Boots</a></li>
                    <li class="active"><a href="#"><span class="size-11 text-muted pull-right">(21)</span> Top &amp; Blouses</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(88)</span> Accessories</a></li>
                  </ul>
                </li>
                <li class="list-group-item">
                  <a class="dropdown-toggle" href="#">KIDS</a>
                  <ul>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(88)</span> Shoes &amp; Boots</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(22)</span> Dresses &amp; Skirts</a></li>
                    <li><a href="#"><span class="size-11 text-muted pull-right">(31)</span> Accessories</a></li>
                    <li class="active"><a href="#"><span class="size-11 text-muted pull-right">(18)</span> Top &amp; Blouses</a></li>
                  </ul>
                </li>
                <li class="list-group-item"><a href="#"><span class="size-11 text-muted pull-right">(189)</span> ACCESSORIES</a></li>
                <li class="list-group-item"><a href="#"><span class="size-11 text-muted pull-right">(61)</span> GLASSES</a></li>

              </ul>

            </div>
            <!-- /CATEGORIES -->


            <!-- BANNER ROTATOR -->
            <div class="owl-carousel buttons-autohide controlls-over margin-bottom-60 text-center" data-plugin-options='{"singleItem": true, "autoPlay": 4000, "navigation": true, "pagination": false, "transitionStyle":"fadeUp"}'>
              <a href="#">
                <img class="img-responsive" src="assets/images/demo/shop/banners/off_1.png" width="270" height="350" alt="">
              </a>
              <a href="#">
                <img class="img-responsive" src="assets/images/demo/shop/banners/off_2.png" width="270" height="350" alt="">
              </a>
            </div>
            <!-- /BANNER ROTATOR -->


            <!-- FEATURED -->
            <div class="margin-bottom-60">

              <h2 class="owl-featured">FEATURED</h2>
              <div class="owl-carousel featured" data-plugin-options='{"singleItem": true, "stopOnHover":false, "autoPlay":false, "autoHeight": false, "navigation": true, "pagination": false}'>

                <div><!-- SLIDE 1 -->
                  <ul class="list-unstyled nomargin nopadding text-left">

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p10.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-12" href="#">Long Grey Dress - Special</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$132.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p2.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-1" href="#">Black Fashion Hat</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$65.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p13.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-1" href="#">Cotton 100% - Pink Dress</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$77.00</div>
                    </li><!-- /item -->

                  </ul>
                </div><!-- /SLIDE 1 -->

                <div><!-- SLIDE 2 -->
                  <ul class="list-unstyled nomargin nopadding text-left">

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p12.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-12" href="#">Long Grey Dress - Special</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$132.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p6.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-1" href="#">Black Fashion Hat</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$65.00</div>
                    </li><!-- /item -->

                    <li class="clearfix"><!-- item -->
                      <div class="thumbnail featured clearfix pull-left">
                        <a href="#">
                          <img src="assets/images/demo/shop/products/100x100/p14.jpg" width="80" height="80" alt="featured item">
                        </a>
                      </div>

                      <a class="block size-1" href="#">Cotton 100% - Pink Dress</a>
                      <div class="rating rating-4 size-13 width-100 text-left"><!-- rating-0 ... rating-5 --></div>
                      <div class="size-18 text-left">$77.00</div>
                    </li><!-- /item -->

                  </ul>
                </div><!-- /SLIDE 2 -->

              </div>

            </div>
            <!-- /FEATURED -->


            <!-- HTML BLOCK -->
            <div class="margin-bottom-60">
              <h4>HTML BLOCK</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus eunit.</p>

              <form action="#" role="form" method="post">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                  <input type="email" name="email" class="form-control" placeholder="Enter your Email" required="required">
                  <span class="input-group-btn">
											<button class="btn btn-success" type="submit"><i class="glyphicon glyphicon-send"></i></button>
										</span>
                </div>
              </form>

            </div>
            <!-- /HTML BLOCK -->

          </div>

        </div>

      </div>
    </section>
    <!-- / -->




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
  <!--<div id="preloader">-->
    <!--<div class="inner">-->
      <!--<span class="loader"></span>-->
    <!--</div>-->
  <!--</div>&lt;!&ndash; /PRELOADER &ndash;&gt;-->


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
  import axios from 'axios'
    export default {
        name: "Field" ,
      data(){
          return {
            fieldData: {}
          }
      },
      created() {
        this.fetchData()
      },

      watch: {
        '$route': 'fetchData'
      },

      methods: {
        fetchData() {
          axios.get('http://api.shahbandegan.ir/v1/fields/'+this.$route.params.id+'/')
            .then((resp) => {
              this.fieldData = resp.data.data;

              console.log(resp + "  ===========================")
            })
            .catch((err) => {
              console.log(err + "  ===========================")
            })
        }
      }
    }
</script>

<style scoped>

</style>
