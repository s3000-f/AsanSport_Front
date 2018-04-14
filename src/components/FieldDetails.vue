<template>

  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <slide-top></slide-top>    <!-- /SLIDE TOP -->


    <!-- wrapper -->
    <div id="wrapper">

      <!-- Top Bar -->
      <header1></header1>
      <section class="page-header page-header-xs">
        <div class="container">

          <h1>{{fieldData.name}}</h1>

          <!-- breadcrumbs -->
          <ol class="breadcrumb">
            <li><a href="#">خانه</a></li>
            <li><a href="#">سالن های ورزشی</a></li>
            <li class="active">{{fieldData.name}}</li>
          </ol><!-- /breadcrumbs -->

        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div class="row">

            <!-- IMAGE -->
            <div class="col-md-7">

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
                  <a class="lightbox bottom-right" :href="fieldData.images[0]"
                     data-plugin-options='{"type":"image"}'><i class="glyphicon glyphicon-search"></i></a>

                  <!--
                                        image

                                        Extra: add .image-bw class to force black and white!
                                    -->
                  <img class="img-responsive" :src="fieldData.images[0]"
                       width="1200" height="1500" alt="This is the product title"/>
                </figure>

              </div>

              <!-- Thumbnails (required height:100px) -->
              <div data-for="zoom-primary" class="zoom-more owl-carousel owl-padding-3 featured"
                   data-plugin-options='{"singleItem": false, "autoPlay": false, "navigation": true, "pagination": false}'>
                <a v-for="image in fieldData.images" class="thumbnail active" :href="image">
                  <img :src="image" height="100" alt=""/>
                </a>
              </div>
              <!-- /Thumbnails -->

            </div>
            <!-- /IMAGE -->

            <!-- ITEM DESC -->
            <div class="col-md-5">

              <!-- buttons -->
              <div class="pull-right">
                <!-- replace data-item-id width the real item ID - used by js/view/demo.shop.js -->
                <a class="btn btn-default add-wishlist" href="#" data-item-id="1" data-toggle="tooltip"
                   title="Add To Wishlist"><i class="fa fa-heart nopadding"></i></a>
                <a class="btn btn-default add-compare" href="#" data-item-id="1" data-toggle="tooltip"
                   title="Add To Compare"><i class="fa fa-bar-chart-o nopadding" data-toggle="tooltip"></i></a>
              </div>
              <!-- /buttons -->

              <div class="shop-item-price">
                <div class="rating rating-4 size-20 margin-top-10 width-200"></div>
              </div>

              <table class="table margin-top-30">
                <tbody>
                <tr>
                  <td>قیمت هر سانس</td>
                  <td>{{fieldData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}} تومان</td>
                </tr>
                <tr>
                  <td>زمان هر سانس</td>
                  <td>{{fieldData.duration}} دقیقه</td>
                </tr>
                <tr>
                  <td>آدرس</td>
                  <td>{{fieldData.address}}</td>
                </tr>
                <tr>
                  <td>تلفن</td>
                  <td>{{fieldData.phone}}</td>
                </tr>
                <tr>
                  <td>مساحت</td>
                  <td style="direction: ltr; text-align: right">{{fieldData.size}}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- /ITEM DESC -->

          </div>


          <ul id="myTab" class="nav nav-tabs nav-top-border margin-top-80" role="tablist">
            <li role="presentation" class="active"><a href="#calendar" role="tab" data-toggle="tab">تقویم</a></li>
            <li role="presentation"><a href="#description" role="tab" data-toggle="tab">معرفی</a></li>
            <li role="presentation"><a href="#specs" role="tab" data-toggle="tab">امکانات</a></li>
            <li role="presentation"><a href="#reviews" role="tab" data-toggle="tab">نظرات</a></li>
          </ul>


          <div class="tab-content padding-top-20">

            <!-- CALENDAR -->
            <div role="tabpanel" class="tab-pane fade in active" id="calendar">
              <field-calendar></field-calendar>
            </div>

            <!-- DESCRIPTION -->
            <div role="tabpanel" class="tab-pane fade in" id="description">
              {{fieldData.description}}
            </div>

            <!-- SPECIFICATIONS -->
            <div role="tabpanel" class="tab-pane fade" id="specs">
              <div class="table-responsive">
                <table class="table table-hover">
                  <tbody>
                  <tr>
                    <td>پارکینگ</td>
                    <td>
                      <span v-if="fieldData.facilities.parking"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.parking"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>بوفه</td>
                    <td>
                      <span v-if="fieldData.facilities.buffet"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.buffet"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>سرویس بهداشتی</td>
                    <td>
                      <span v-if="fieldData.facilities.wc"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.wc"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>رختکن</td>
                    <td>
                      <span v-if="fieldData.facilities.changing_room"><i
                        class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.changing_room"><i
                        class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>داور</td>
                    <td>
                      <span v-if="fieldData.facilities.spectator"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.spectator"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>فروشگاه</td>
                    <td>
                      <span v-if="fieldData.facilities.shop"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.shop"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>اجاره توپ</td>
                    <td>
                      <span v-if="fieldData.facilities.ball_rent"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.ball_rent"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>تهویه هوا</td>
                    <td>
                      <span v-if="fieldData.facilities.air_conditioning"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.air_conditioning"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>فضای سبز</td>
                    <td>
                      <span v-if="fieldData.facilities.garden"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.garden"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>دوش حمام</td>
                    <td>
                      <span v-if="fieldData.facilities.shower"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.shower"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>کمد</td>
                    <td>
                      <span v-if="fieldData.facilities.locker"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.locker"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>ماساژ</td>
                    <td>
                      <span v-if="fieldData.facilities.massage"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.massage"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  <tr>
                    <td>مربی</td>
                    <td>
                      <span v-if="fieldData.facilities.trainer"><i class="fa fa-check text-success"> </i> دارد</span>
                      <span v-if="!fieldData.facilities.trainer"><i class="fa fa-remove text-danger"></i> ندارد</span>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- REVIEWS -->
            <div role="tabpanel" class="tab-pane fade" id="reviews">
              <!-- REVIEW ITEM -->
              <div class="block margin-top-30" v-for="comment in comments" style="border-bottom: solid 1px #333333">

								<!--<span class="user-avatar">&lt;!&ndash; user-avatar &ndash;&gt;-->
									<!--<img class="pull-left media-object" src="/static/assets/images/avatar2.jpg" width="64" height="64"-->
                       <!--alt="">-->
								<!--</span>-->

                <div class="media-body">
                  <h4 class="media-heading size-14">
                    {{comment.user_name}} &ndash;
                    <span class="text-muted">{{comment.created_at}}</span> &ndash;
                    <!-- stars -->
                      <span class="size-14 text-muted" v-if="comment.rating == 5">
                        <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
                      </span>

                      <span class="size-14 text-muted" v-else-if="comment.rating == 4">
                        <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star-o"></i>
                      </span>

                      <span class="size-14 text-muted" v-else-if="comment.rating == 3">
                        <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
                      </span>

                      <span class="size-14 text-muted" v-else-if="comment.rating == 2">
                        <i class="fa fa-star"></i>
											  <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
                      </span>

                      <span class="size-14 text-muted" v-else-if="comment.rating == 1">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                      </span>

                      <span class="size-14 text-muted" v-else-if="comment.rating == 0">
                        <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
											  <i class="fa fa-star-o"></i>
                      </span>
                  </h4>

                  <p class="margin-top-10">
                    {{comment.comment}}
                  </p>

                </div>

              </div>
              <!-- /REVIEW ITEM -->

              <!-- REVIEW FORM -->
              <h4 class="page-header margin-bottom-40" >ارسال نظر جدید</h4>
              <div id="form" v-if="$store.state.isLoggedin">
                <!-- Comment -->
                <div class="margin-bottom-30">
                  <label>نظر شما</label>
                  <textarea name="text" id="text" class="form-control margin-bottom-10" rows="6" placeholder="نظر"
                            maxlength="1000" v-model="comment" ></textarea>
                  <label>امتیاز شما</label>
                  <star-rating :star-size="20" :show-rating="false" active-color="#8ab933" v-model="rating"></star-rating>

                </div>

                <!-- Send Button -->
                <button class="btn btn-primary" @click="sendComment"><i class="fa fa-check"></i> ارسال نظر</button>

              </div>
              <div v-else>
                <h5> برای ارسال نظر جدید باید وارد شوید. (<router-link to="/login-register" class="text-warning">ورود / ثبت نام</router-link>) </h5>
              </div>
              <!-- /REVIEW FORM -->

            </div>
          </div>


          <!--<hr class="margin-top-80 margin-bottom-80"/>-->


          <!--RELATED -->
          <!--          <h2 class="owl-featured"><strong>Related</strong> products:</h2>
                    <div class="owl-carousel featured nomargin owl-padding-10"
                         data-plugin-options='{"singleItem": false, "items": "5", "stopOnHover":false, "autoPlay":4500, "autoHeight": false, "navigation": true, "pagination": false}'>

                       item
                      <div class="shop-item nomargin">

                        <div class="thumbnail">
                           product image(s)
                          <a class="shop-item-image" href="shop-single-left.html">
                            <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p13.jpg"
                                 alt="shop first image"/>
                            <img class="img-responsive" src="/static/assets/images/demo/shop/products/300x450/p14.jpg"
                                 alt="shop hover image"/>
                          </a>
                           /product image(s)

                           product more info
                          <div class="shop-item-info">
                            <span class="label label-success">NEW</span>
                            <span class="label label-danger">SALE</span>
                          </div>
                           /product more info
                        </div>

                        <div class="shop-item-summary text-center">
                          <h2>Cotton 100% - Pink Shirt</h2>

                           rating
                          <div class="shop-item-rating-line">
                            <div class="rating rating-4 size-13"> rating-0 ... rating-5 </div>
                          </div>
                           /rating

                           price
                          <div class="shop-item-price">
                            <span class="line-through">$98.00</span>
                            $78.00
                          </div>
                           /price
                        </div>

                         buttons
                        <div class="shop-item-buttons text-center">
                          <a class="btn btn-default" href="shop-cart.html"><i class="fa fa-cart-plus"></i> Add to Cart</a>
                        </div>
                         /buttons
                      </div>
                       /item

                       /item

                    </div>-->
          <!--/RELATED -->

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
  import StarRating from 'vue-star-rating'

  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'
  import FieldCalendar from './FieldCalendar'

  export default {
    name: "Field",
    data() {
      return {
        fieldData: {},
        comments: {},
        rating: -1,
        comment: ''
      }
    },
    created() {
      this.fetchData();
      this.fetchComments();
    },
    watch: {
      '$route': 'fetchData'
    },
    components: {
      FieldCalendar,
      SlideTop,
      StarRating,
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    },

    methods: {
      fetchData() {
        axios.get('http://api.shahbandegan.ir/v1/fields/' + this.$route.params.id)
          .then((resp) => {
            this.fieldData = resp.data.data;

            console.log(resp + "  ===========================")
          })
          .catch((err) => {
            console.log(err + "  ===========================")
          })
      },
      fetchComments() {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.get('http://api.shahbandegan.ir/v1/fields/' + this.$route.params.id + '/comments', config).then(response => {
          if (response.status < 300) {
            this.comments = response.data['data'];
          }
          else {
            console.log(response.data['message']);
            this.notif('خطا', 'خطا در برقراری ارتباط', 'error')
          }
        }).catch(e => {
          this.notif('خطا', 'خطا در برقراری ارتباط', 'error');
          console.log(e)
        })
      },
      sendComment(){
        if (this.rating === -1){
          this.notif('توجه','امتیاز نمیتواند ۰ باشد','warn');

          return;
        }
        this.notif('توجه','لطفا صبر کنید','');
        let dat = (this.comment !== '')?{
          rating: this.rating,
          comment: this.comment
        }: {rating:this.rating};
        let config = {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.post('http://api.shahbandegan.ir/v1/fields/'+ this.$route.params.id +'/comments', dat, config)
          .then(response => {
            if (response.status < 300){
              this.notif('توجه','نظر شما با موفقیت ثبت شد','success')
            }else {
              this.notif('خطا','خطای داخلی، لطفا بعدا تلاش کنید','error');
            }
          })
          .catch(e => {
            console.log(e);
            this.notif('خطا','خطا در برقراری ارتباط','error');
          })
        this.rating = -1;
        this.comment = '';
      },
      notif(title, text, type) {
        this.$notify({
          text: text,
          type: type,
          title: title
        })
      }
    }
  }
</script>

<style scoped>

</style>
