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
                    <input type="text" name="src" placeholder="Search" class="form-control" />
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
    <section class="page-header">
      <div class="container">

        <h1>SEARCH RESULT</h1>

        <!-- breadcrumbs -->
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li class="active">Search Result</li>
        </ol><!-- /breadcrumbs -->

      </div>
    </section>
    <!-- /PAGE HEADER -->




    <!-- -->
    <section>
      <div class="container">
        <div class="row">

          <!-- LEFT COLUMNS -->
          <div class="col-md-9 col-sm-9 col-md-push-3 col-sm-push-3">

            <!-- SEARCH RESULTS -->
            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-success">www.stepofweb.com/</small>
              <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-danger">Dashboard / About</small>
              <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="page-gallery.html">Gallery &ndash; Search Result</a></h4>
              <small class="text-muted">Dashboard / Gallery</small>
              <img src="assets/images/demo/people/300x300/1-min.jpg" alt="" height="60" />
              <p>June 29, 2015- Uploaded by Melisa Doe</p>
              <a href="#" class="text-warning fsize12">View Gallery</a>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="shop-page-full-product.html">Shop Product &ndash; Search Result</a></h4>
              <small class="text-muted">Shop / Shirts</small>
              <img src="assets/images/demo/shop/products/100x100/p5.jpg" alt="" height="60" />
              <p><span class="line-through">$67.00</span> <strong class="text-danger">$32.00</strong></p>
              <a href="#" class="text-success fsize12">View Product</a>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-success">www.stepofweb.com/</small>
              <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-success">Home / About Us</small>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-success">www.stepofweb.com/</small>
              <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            </div><!-- /item -->

            <div class="clearfix search-result"><!-- item -->
              <h4 class="margin-bottom-0"><a href="#">Smarty Multipurpose &ndash; fully responsive template</a></h4>
              <small class="text-success">Home / About Me</small>
              <p>Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa.</p>
            </div><!-- /item -->
            <!-- /SEARCH RESULTS -->

            <!-- PAGINATION -->
            <div class="text-center margin-top-60">
              <ul class="pagination">
                <li class="disabled"><a href="#">Previous</a></li>
                <li class="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </div>
            <!-- /PAGINATION -->

          </div>
          <!-- /LEFT COLUMNS -->

          <!-- RIGHT COLUMNS -->
          <div class="col-md-3 col-sm-3 col-md-pull-9 col-sm-pull-9">
            <h4>FILTERS</h4>

            <form action="page-search-result-1.html" method="get">
              <input type="text" value="" class="form-control" placeholder="Keywords" />

              <label class="size-12 margin-top-10">Language</label>
              <select class="form-control">
                <option value="">English</option>
                <option value="">German</option>
                <option value="">Italian</option>
              </select>

              <label class="size-12 margin-top-10">Category</label>
              <select class="form-control">
                <option value="">All</option>
                <option value="">Ebook</option>
                <option value="">Games</option>
                <option value="">Books</option>
                <option value="">Toys</option>
                <option value="">Flowers</option>
              </select>

              <label class="size-12 margin-top-10">Availability</label>
              <select class="form-control">
                <option value="">All</option>
                <option value="">In Stock</option>
                <option value="">Not in stock</option>
              </select>

            </form>


            <hr />


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
            <div class="owl-carousel buttons-autohide controlls-over margin-bottom-60 text-center" data-plugin-options='{"singleItem": true, "autoPlay": 4000, "navigation": true, "pagination": false, "transitionStyle":"goDown"}'>
              <a href="#">
                <img class="img-responsive" src="assets/images/demo/shop/banners/off_2.png" width="270" height="350" alt="">
              </a>
              <a href="#">
                <img class="img-responsive" src="assets/images/demo/shop/banners/off_1.png" width="270" height="350" alt="">
              </a>
            </div>
            <!-- /BANNER ROTATOR -->


          </div>
          <!-- /RIGHT COLUMNS -->

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
            <img class="footer-logo" src="assets/images/logo-footer.png" alt="" />

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

            <form class="validate" action="php/newsletter.php" method="post" data-success="Subscribed! Thank you!" data-toastr-position="bottom-right">
              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input type="email" id="email" name="email" class="form-control required" placeholder="Enter your Email">
                <span class="input-group-btn">
										<button class="btn btn-success" type="submit">Subscribe</button>
									</span>
              </div>
            </form>
            <!-- /Newsletter Form -->

            <!-- Social Icons -->
            <div class="margin-top-20">
              <a href="#" class="social-icon social-icon-border social-facebook pull-left" data-toggle="tooltip" data-placement="top" title="Facebook">

                <i class="icon-facebook"></i>
                <i class="icon-facebook"></i>
              </a>

              <a href="#" class="social-icon social-icon-border social-twitter pull-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                <i class="icon-twitter"></i>
                <i class="icon-twitter"></i>
              </a>

              <a href="#" class="social-icon social-icon-border social-gplus pull-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                <i class="icon-gplus"></i>
                <i class="icon-gplus"></i>
              </a>

              <a href="#" class="social-icon social-icon-border social-linkedin pull-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                <i class="icon-linkedin"></i>
                <i class="icon-linkedin"></i>
              </a>

              <a href="#" class="social-icon social-icon-border social-rss pull-left" data-toggle="tooltip" data-placement="top" title="Rss">
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


  <!-- JAVASCRIPT FILES -->
  <!--<script type="text/javascript">var plugin_path = 'assets/plugins/';</script>-->
  <!--<script type="text/javascript" src="assets/plugins/jquery/jquery-2.1.4.min.js"></script>-->

  <!--<script type="text/javascript" src="assets/js/scripts.js"></script>-->

  <!-- STYLESWITCHER - REMOVE -->
  <!--<script async type="text/javascript" src="assets/plugins/styleswitcher/styleswitcher.js"></script>-->
  </div>

</template>

<script>
    export default {
        name: "search-results"
    }
</script>

<style scoped>

</style>
