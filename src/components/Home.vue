<template>
  <div>
    <div class="smoothscroll enable-animation">
      <!-- /SLIDE TOP -->
      <slide-top></slide-top>
      <!-- wrapper -->
      <div id="wrapper">

        <!-- Top Bar -->
        <header1></header1>

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
              <li data-transition="random" data-slotamount="1" data-masterspeed="1500" data-delay="5000"
                  data-saveperformance="off" data-title="Slide" v-for="slide in slides">

                <img src="assets/images/1x1.png" v-bind:data-lazyload="slide.image" alt="" data-bgfit="cover"
                     data-bgposition="center top" data-bgrepeat="no-repeat"/>

                <div class="tp-dottedoverlay twoxtwo"><!-- dotted overlay --></div>
                <div class="overlay dark-3"><!-- dark overlay [1 to 9 opacity] --></div>


                <div class="tp-caption customin ltl tp-resizeme large_bold_white"
                     data-x="center"
                     data-y="155"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="800"
                     data-start="1200"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn" style="z-index: 10;">
                  {{slide.title}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme small_light_white font-lato size-20"
                     data-x="center"
                     data-y="245"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="800"
                     data-start="1400"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn"
                     style="z-index: 10; width: 100%; max-width: 750px; white-space: normal; text-align:center;">
                  {{slide.subtitle}}
                </div>

                <div class="tp-caption customin ltl tp-resizeme"
                     data-x="center"
                     data-y="413"
                     data-customin="x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;opacity:0;transformPerspective:200;transformOrigin:50% 0%;"
                     data-speed="800"
                     data-start="1550"
                     data-easing="easeOutQuad"
                     data-splitin="none"
                     data-splitout="none"
                     data-elementdelay="0.01"
                     data-endelementdelay="0.1"
                     data-endspeed="1000"
                     data-endeasing="Power4.easeIn" style="z-index: 10;">
                  <a v-bind:href="slide.action" class="btn btn-default btn-lg">
                    <span>Go</span>
                  </a>
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

              <div class="col-sm-4 text-center">
                <router-link to="/">
                <i class="glyphicon glyphicon-briefcase"></i>
                <h3>همکاری با ما</h3>
                <p>مالک باشگاه یا اماکن ورزشی هستید؟<br>در صورتی که مایل به همکاری با آسان اسپرت هستید اینجا را کلیک
                  کنید</p>
                </router-link>
              </div>

              <div class="col-sm-4 text-center" v-if="$store.state.isLoggedin">
                <router-link to="/profile">
                <i class="glyphicon glyphicon-user"></i>
                <h3>حساب کاربری</h3>
                <p>{{$store.state.user.fname + " " + $store.state.user.lname}}</p>
                </router-link>
              </div>
              <div class="col-sm-4 text-center" v-else>
                <router-link to="/login-register">
                <i class="glyphicon glyphicon-user"></i>
                <h3>ورود / ثبت نام</h3>
                <p>برای بهره گیری هرچه بهتر از خدمات آسان اسپرت</p>
                </router-link>
              </div>


              <div class="col-sm-4 text-center">
                <i class="glyphicon glyphicon-list-alt"></i>
                <h3>ثبت سفارشات</h3>
                <p>ثبت سفارشات کلیه افراد، ادارات ، ارگان ها و سازمان ها جهت اجاره اماکن...</p>
              </div>

            </div>

          </div>
        </section>
        <!-- /INFO BAR -->

        <!-- FEATURED -->
        <section>
          <div class="container">

            <h2 class="owl-featured noborder"><strong>پیشنهادات ویژه</strong></h2>
            <div class="owl-carousel featured nomargin owl-padding-10"
                 data-plugin-options='{"loop":true,"singleItem": false, "items": "4", "stopOnHover":false, "autoPlay":4000, "autoHeight": false, "navigation": true, "pagination": false}'>

              <!-- item -->
              <div class="shop-item nomargin" v-for="feature in featured">

                <div class="thumbnail">
                  <!-- product image(s) -->
                  <!--<div class="owl-carousel owl-padding-0 nomargin"-->
                       <!--data-plugin-options='{"singleItem": true, "autoPlay": 3000, "navigation": false, "pagination": false, "transitionStyle":"fadeUp"}'>-->
                    <img class="img-responsive" v-for="src in feature.srcs" v-bind:src="src"
                         alt="">
                  <!--</div>-->
                  <!-- /product image(s) -->

                </div>

                <div class="shop-item-summary text-center">
                  <h2>{{feature.title}}</h2>

                  <!-- rating -->
                  <div class="shop-item-rating-line">
                    <div v-bind:class="'rating ' + feature.rating + ' size-13'"><!-- rating-0 ... rating-5 --></div>
                  </div>
                  <!-- /rating -->

                  <!-- price -->
                  <div class="shop-item-info">
                    <!--<span class="line-through">${{feature.price}}</span>-->
                    {{feature.state}}
                  </div>
                  <!-- /price -->
                </div>

                <!-- buttons -->
                <div class="shop-item-buttons text-center">
                  <router-link class="btn btn-default" v-bind:to="'/fields/'+feature.id"><i class="fa fa-cart-plus"></i>
                    رزرو
                  </router-link>
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
                 data-plugin-options='{"singleItem": true, "autoPlay": 5000, "navigation": false, "pagination": true}'>

              <div class="text-center">
                <h3 class="nomargin">اطمینان از انتخاب</h3>
                <p class="weight-300 lead nomargin-top">تمامی خدمات ارائه شده در آسان اسپرت توسط کارشناسان متخصص مورد بررسی قرار گرفته شده است</p>
              </div>

              <div class="text-center">
                <h3 class="nomargin">تنوع خدمات</h3>
                <p class="weight-300 lead nomargin-top">با آسان اسپرت تمامی نیاز های ورزشی خود را به راحتی رفع کنید</p>
              </div>

            </div>


          </div>

        </section>
        <!-- /PARALLAX -->

        <!-- NEW PRODUCTS -->
        <section>
          <div class="container">

            <div class="heading-title heading-dotted">
              <h2 class="size-20">برترین ها</h2>
            </div>

            <ul class="shop-item-list row list-inline nomargin">

              <!-- ITEM -->
              <li class="col-lg-2 col-sm-4" v-for="top in tops">

                <div class="shop-item">

                  <div class="thumbnail noborder nopadding">
                    <!-- product image(s) -->
                    <router-link class="shop-item-image" v-bind:to="'/fields/'+ top.id">
                      <img class="img-responsive" v-bind:src="top.src"
                           alt=""/>
                    </router-link>
                    <!-- /product image(s) -->
                  </div>

                  <div class="shop-item-summary text-center">
                    <h2 class="size-14">{{top.title}}</h2>

                    <!-- rating -->
                    <div class="shop-item-rating-line">
                      <div v-bind:class="'rating '+ top.rating + ' size-11'"><!-- rating-0 ... rating-5 --></div>
                    </div>
                    <!-- /rating -->

                    <!-- price -->
                    <div class="shop-item-info">
                    <!--<span class="line-through">${{top.price}}</span>-->
                    {{top.state}}
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

        <!-- Blog -->
        <section>
          <div class="container">
            <div class="heading-title heading-dotted">
              <h2 class="size-20">تازه های بلاگ</h2>
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
        <!-- Blog -->

        <!-- BRANDS -->
        <section class="padding-xxs">
          <div class="container">

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
        <footer>
          <footers></footers>
        </footer>
        <!-- /FOOTER -->

      </div>
      <!-- /wrapper -->

      <!-- SCROLL TO TOP -->
      <a href="#" id="toTop"></a>


      <div id="preloader" v-if="(slideLoading || featuredLoading || topLoading)">
        <div class="inner">
          <span class="loader"></span>
        </div>
      </div><!-- /PRELOADER -->

    </div>


  </div>
</template>

<script>
  import axios from 'axios'
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "home",
    data() {
      return {
        slides: [
          {
            image: 'https://images.bubbleroom.eu/data/product/676x980/brazilian-crochet-pantie.jpg',
            title: 'Some Fucking Title 1',
            subtitle: 'Some Subtitle Shit 1',
            action: 'asdf'
          },
          {
            image: 'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg',
            title: 'Some Fucking Title 2',
            subtitle: 'Some Subtitle Shit 2',
            action: 'asdf2'
          },
          {
            image: 'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg',
            title: 'Some Fucking Title 3',
            subtitle: 'Some Subtitle Shit 3',
            action: 'asdf3',
          }
        ],
        featured: [
          {
            srcs: [
              'https://images.bubbleroom.eu/data/product/676x980/brazilian-crochet-pantie.jpg',
              'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg'
            ],
            title: 'featured1',
            rating: 'rating-4',
            id: 'asdf'
          },
          {
            srcs: [
              'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg',
              'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg'
            ],
            title: 'featured2',
            rating: 'rating-3',
            id: 'asdf'
          },
          {
            srcs: [
              'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg',
              'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg'
            ],
            title: 'featured3',
            rating: 'rating-5',
            id: 'asdf'
          },
          {
            srcs: [
              'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg',
              'https://images.bubbleroom.eu/data/product/676x980/579557-0001x579553-0001_368.jpg'
            ],
            title: 'featured4',
            rating: 'rating-2',
            id: 'asdf'
          },
          {
            srcs: [
              'https://images.bubbleroom.eu/data/product/676x980/599341-0001_083.jpg',
              'https://images.bubbleroom.eu/data/product/676x980/brazilian-crochet-pantie.jpg',
            ],
            title: 'featured5',
            rating: 'rating-1',
            id: 'asdf'
          }
        ],
        tops: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB1jVfMOXXXXXcxXFXXq6xXFXXXQ_600x@2x.png?v=1505883150',
            title: 'Title1',
            rating: 'rating-3',
            id: 'asdf1'
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB19HzGOXXXXXayXVXXq6xXFXXXa_600x@2x.png?v=1505883150',
            title: 'Title2',
            rating: 'rating-5',
            id: 'asdf2'
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB1mdfIOXXXXXasXVXXq6xXFXXXb_600x@2x.png?v=1505883150',
            title: 'Title3',
            rating: 'rating-3',
            id: 'asdf3'
          },
          {
            src: 'https://ae01.alicdn.com/kf/HTB1wJhPMXXXXXaPXFXXq6xXFXXXd/2016-Hot-Sexy-Cross-Halter-Neck-Women-1-2-cup-Deep-U-Bra-One-Piece-Seamless.jpg',
            title: 'Title4',
            rating: 'rating-3',
            id: 'asdf4'
          },
          {
            src: 'https://ae01.alicdn.com/kf/HTB1Xmt0MXXXXXcMXXXXq6xXFXXXl/2016-Hot-Sexy-Cross-Halter-Neck-Women-1-2-cup-Deep-U-Bra-One-Piece-Seamless.jpg',
            title: 'Title5',
            rating: 'rating-4',
            id: 'asdf5'
          },
          {
            src: 'https://img2.momoshop.com.tw/goodsimg/0004/494/950/4494950_R.jpg?t=1519346881',
            title: 'Title6',
            rating: 'rating-1',
            id: 'asdf6'
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB1jVfMOXXXXXcxXFXXq6xXFXXXQ_600x@2x.png?v=1505883150',
            title: 'Title7',
            rating: 'rating-3',
            id: 'asdf7'
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB19HzGOXXXXXayXVXXq6xXFXXXa_600x@2x.png?v=1505883150',
            title: 'Title8',
            rating: 'rating-5',
            id: 'asdf8'
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/0954/5630/products/HTB1mdfIOXXXXXasXVXXq6xXFXXXb_600x@2x.png?v=1505883150',
            title: 'Title9',
            rating: 'rating-3',
            id: 'asdf9'
          },
          {
            src: 'https://ae01.alicdn.com/kf/HTB1wJhPMXXXXXaPXFXXq6xXFXXXd/2016-Hot-Sexy-Cross-Halter-Neck-Women-1-2-cup-Deep-U-Bra-One-Piece-Seamless.jpg',
            title: 'Title10',
            rating: 'rating-3',
            id: 'asdf10'
          },
          {
            src: 'https://ae01.alicdn.com/kf/HTB1Xmt0MXXXXXcMXXXXq6xXFXXXl/2016-Hot-Sexy-Cross-Halter-Neck-Women-1-2-cup-Deep-U-Bra-One-Piece-Seamless.jpg',
            title: 'Title11',
            rating: 'rating-4',
            id: 'asdf11'
          },
          {
            src: 'https://img2.momoshop.com.tw/goodsimg/0004/494/950/4494950_R.jpg?t=1519346881',
            title: 'Title12',
            rating: 'rating-1',
            id: 'asdf12'
          }
        ],
        slideLoading: false,
        featuredLoading: false,
        topLoading: false
      }
    },
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    },
    methods: {
      getSlides() {
        this.slideLoading = true;
        axios.get('http://api.shahbandegan.ir/v1/slides')
          .then(response => {
            this.slides = response.data['data'];
            console.log(this.slides);
            this.slideLoading = false;
          })
          .catch(e => {
            console.log(e);
            this.slideLoading = false;
          })

      },
      getTops() {
        this.topLoading = true;
        axios.get('http://api.shahbandegan.ir/v1/fields')
          .then(response => {
            let dat = response.data['data'].slice(0, 12);
            let ret = [];
            dat.forEach(value => {
              let t1 = {
                src: value.image,
                title: value.name,
                rating: 'rating-' + value.rating,
                state: value.state,
                id: value.id + '/' + value.name
              };
              ret.push(t1);
            });
            this.tops = ret;
            this.topLoading = false;
          })
          .catch(e => {
            console.log(e);
            this.topLoading = false;
          })
      },
      getFeatured(){
        this.featuredLoading = true;
        axios.get('http://api.shahbandegan.ir/v1/fields?featured')
          .then(response => {
            let dat = response.data['data'];
            let ret = [];
            dat.forEach(value => {
              let t1 = {
                srcs: [value.image],
                title: value.name,
                rating: 'rating-' + value.rating,
                state: value.state,
                id: value.id + '/' + value.name
              };
              ret.push(t1);
            });
            this.featured = ret;
            this.featuredLoading = false;
          })
          .catch(e => {
            console.log(e);
            this.featuredLoading = false;
          })
      }
    },
    created() {
      this.getSlides();
      this.getTops();
      this.getFeatured();
      // this.loading = false;
      // ('#preloader').hide();
    }
  }
</script>

<style scoped>

</style>
