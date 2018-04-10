<template>

  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
<slide-top></slide-top>    <!-- /SLIDE TOP -->


    <!-- wrapper -->
    <div id="wrapper">

      <!-- Top Bar -->
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
      <section class="page-header page-header-xs">
        <div class="container">

          <h1>{{fieldData.name}}</h1>

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

            <!-- IMAGE -->
            <div class="col-lg-6 col-sm-4">

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
                  <a class="lightbox bottom-right" href="/static/assets/images/demo/shop/products/1000x1500/p5.jpg"
                     data-plugin-options='{"type":"image"}'><i class="glyphicon glyphicon-search"></i></a>

                  <!--
                                        image

                                        Extra: add .image-bw class to force black and white!
                                    -->
                  <img class="img-responsive" src="/static/assets/images/demo/1200x800/3-min.jpg"
                       width="1200" height="1500" alt="This is the product title"/>
                </figure>

              </div>

              <!-- Thumbnails (required height:100px) -->
              <div data-for="zoom-primary" class="zoom-more owl-carousel owl-padding-3 featured"
                   data-plugin-options='{"singleItem": false, "autoPlay": false, "navigation": true, "pagination": false}'>
                <a class="thumbnail active" href="/static/assets/images/demo/shop/products/1000x1500/p5.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p5.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p6.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p6.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p7.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p7.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p8.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p8.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p9.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p9.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p10.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p10.jpg" height="100" alt=""/>
                </a>
                <a class="thumbnail" href="/static/assets/images/demo/shop/products/1000x1500/p11.jpg">
                  <img src="/static/assets/images/demo/shop/products/100x100/p11.jpg" height="100" alt=""/>
                </a>
              </div>
              <!-- /Thumbnails -->

            </div>
            <!-- /IMAGE -->

            <!-- ITEM DESC -->
            <div class="col-lg-5 col-sm-8">

              <!-- buttons -->
              <div class="pull-right">
                <!-- replace data-item-id width the real item ID - used by js/view/demo.shop.js -->
                <a class="btn btn-default add-wishlist" href="#" data-item-id="1" data-toggle="tooltip"
                   title="Add To Wishlist"><i class="fa fa-heart nopadding"></i></a>
                <a class="btn btn-default add-compare" href="#" data-item-id="1" data-toggle="tooltip"
                   title="Add To Compare"><i class="fa fa-bar-chart-o nopadding" data-toggle="tooltip"></i></a>
              </div>
              <!-- /buttons -->

              <!-- price -->
              <div class="shop-item-price">{{fieldData.price}}
                قیمت هر سانس:
              </div>
              <!-- /price -->

              <hr/>

              <div class="clearfix margin-bottom-30">
                <span class="pull-right text-success"><i class="fa fa-check"></i> In Stock</span>
                <!--
                                <span class="pull-right text-danger"><i class="glyphicon glyphicon-remove"></i> Out of Stock</span>
                                -->

              </div>


              <!-- short description -->
              <p>{{fieldData.address}}</p>
              <!-- /short description -->


              <hr/>
                <button class="btn btn-primary pull-left product-add-cart noradius">ADD TO CART</button>
              <hr/>
              <!-- Share -->
              <div class="pull-right">

                <a href="#" class="social-icon social-icon-sm social-icon-transparent social-facebook pull-left"
                   data-toggle="tooltip" data-placement="top" title="Facebook">
                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon social-icon-sm social-icon-transparent social-twitter pull-left"
                   data-toggle="tooltip" data-placement="top" title="Twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon social-icon-sm social-icon-transparent social-gplus pull-left"
                   data-toggle="tooltip" data-placement="top" title="Google plus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a href="#" class="social-icon social-icon-sm social-icon-transparent social-linkedin pull-left"
                   data-toggle="tooltip" data-placement="top" title="Linkedin">
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

            <!-- INFO -->
            <div class="col-sm-4 col-md-3">

                <!--<h5  v-if="fieldData.facilities.parking" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.buffet" >buffet : yes</h5><h5 v-else >buffet : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.wc" >wc : yes</h5><h5 v-else >wc : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.changing-room" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.spectator" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.shop" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.ball_rent" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.shower" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.air_conditioning" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.garden" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.locker" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.massage" >parking : yes</h5><h5 v-else >parking : no</h5>-->
                <!--<h5  v-if="fieldData.facilities.trainer" >parking : yes</h5><h5 v-else >parking : no</h5>-->
            </div>
            <!-- /INFO -->

          </div>


          <ul id="myTab" class="nav nav-tabs nav-top-border margin-top-80" role="tablist">
            <li role="presentation" class="active"><a href="#description" role="tab" data-toggle="tab">Description</a>
            </li>
            <li role="presentation"><a href="#specs" role="tab" data-toggle="tab">Specifications</a></li>
            <li role="presentation"><a href="#reviews" role="tab" data-toggle="tab">Reviews (2)</a></li>
          </ul>


          <div class="tab-content padding-top-20">

            <!-- DESCRIPTION -->
            <div role="tabpanel" class="tab-pane fade in active" id="description">
              {{fieldData.description}}
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
									<img class="pull-left media-object" src="/static/assets/images/avatar2.jpg" width="64" height="64"
                       alt="">
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
                    Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci
                    porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.
                    Nam et lacus neque.
                  </p>

                </div>

              </div>
              <!-- /REVIEW ITEM -->

              <!-- REVIEW ITEM -->
              <div class="block margin-bottom-60">

								<span class="user-avatar"><!-- user-avatar -->
									<img class="pull-left media-object" src="/static/assets/images/avatar2.jpg" width="64" height="64"
                       alt="">
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
                    Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci
                    porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc.
                    Nam et lacus neque.
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
                    <input type="text" name="name" id="name" class="form-control" placeholder="Name *" maxlength="100"
                           required="">
                  </div>

                  <div class="col-md-6">
                    <!-- Email -->
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email *"
                           maxlength="100" required="">
                  </div>

                </div>

                <!-- Comment -->
                <div class="margin-bottom-30">
                  <textarea name="text" id="text" class="form-control" rows="6" placeholder="Comment"
                            maxlength="1000"></textarea>
                </div>

                <!-- Stars -->
                <div class="product-star-vote clearfix">

                  <label class="radio pull-left">
                    <input type="radio" name="product-review-vote" value="1"/>
                    <i></i> 1 Star
                  </label>

                  <label class="radio pull-left">
                    <input type="radio" name="product-review-vote" value="2"/>
                    <i></i> 2 Stars
                  </label>

                  <label class="radio pull-left">
                    <input type="radio" name="product-review-vote" value="3"/>
                    <i></i> 3 Stars
                  </label>

                  <label class="radio pull-left">
                    <input type="radio" name="product-review-vote" value="4"/>
                    <i></i> 4 Stars
                  </label>

                  <label class="radio pull-left">
                    <input type="radio" name="product-review-vote" value="5"/>
                    <i></i> 5 Stars
                  </label>

                </div>

                <!-- Send Button -->
                <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> Send Review</button>

              </form>
              <!-- /REVIEW FORM -->

            </div>
          </div>


          <hr class="margin-top-80 margin-bottom-80"/>


          <!-- RELATED -->
          <h2 class="owl-featured"><strong>Related</strong> products:</h2>
          <div class="owl-carousel featured nomargin owl-padding-10"
               data-plugin-options='{"singleItem": false, "items": "5", "stopOnHover":false, "autoPlay":4500, "autoHeight": false, "navigation": true, "pagination": false}'>

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

            <!-- /item -->

          </div>
          <!-- /RELATED -->

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


    <!--&lt;!&ndash; PRELOADER &ndash;&gt;-->
    <!--<div id="preloader">-->
      <!--<div class="inner">-->
        <!--<span class="loader"></span>-->
      <!--</div>-->
    <!--</div>&lt;!&ndash; /PRELOADER &ndash;&gt;-->


    <!-- JAVASCRIPT FILES -->
    <!--<script type="text/javascript">var plugin_path = 'assets/plugins/';</script>-->
    <!--<script type="text/javascript" src="assets/plugins/jquery/jquery-2.1.4.min.js"></script>-->

    <!--<script type="text/javascript" src="assets/js/scripts.js"></script>-->

    <!--&lt;!&ndash; STYLESWITCHER - REMOVE &ndash;&gt;-->
    <!--<script async type="text/javascript" src="assets/plugins/styleswitcher/styleswitcher.js"></script>-->

    <!--&lt;!&ndash; PAGE LEVEL SCRIPTS &ndash;&gt;-->
    <!--<script type="text/javascript" src="assets/js/view/demo.shop.js"></script>-->
  </div>


</template>

<script>
  import axios from 'axios'
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'
  export default {
    name: "Field",
    data() {
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
    components: {
      SlideTop,
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    },

    methods: {
      fetchData() {
        axios.get('http://api.shahbandegan.ir/v1/fields/' + this.$route.params.id )
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
