<template xmlns:>

  <div class="smoothscroll enable-animation">

    <!-- SLIDE TOP -->
    <slide-top></slide-top>    <!-- /SLIDE TOP -->


    <!-- wrapper -->
    <div id="wrapper">

      <header1></header1>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>


        <div class="container">

          <div class="col-lg-3 col-md-3 order-md-1 order-lg-1">

            <!-- CATEGORIES -->
            <div class="side-nav mb-60">

              <div class="side-nav-head">
                <button class="fa fa-bars"></button>
                <h4>دسته بندی</h4>
              </div>

              <ul class="list-group list-group-bordered list-group-noicon uppercase">
                <li class="list-group-item active">
                  <a class="dropdown-toggle" href="#">زمین های ورزشی</a>
                  <ul>
                    <li @click="setCategory(1)"><a href="#"><span class="fs-11 text-muted float-right"></span> سالن چند
                      منظوره(فوتسال و والیبال و
                      بسکتبال)
                      و ...) </a>
                    </li>
                    <li @click="setCategory(2)"><a href="#"><span class="fs-11 text-muted float-right"></span>
                      زمین تنیس </a>
                    </li>
                    <li @click="setCategory(3)"><a href="#"><span class="fs-11 text-muted float-right"></span>
                      زمین چمن </a>
                    </li>
                    <li @click="setCategory(4)"><a href="#"><span class="fs-11 text-muted float-right"></span>
                      زمین پینت بال </a>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
            <!-- /CATEGORIES -->
            <div class="mb-60">
              <h4 class="margin-bottom-50">حداکثر قیمت</h4>
              <div @click="getFields">
                <vue-slider ref="slider" v-model="attr.max_price" v-bind="options"></vue-slider>
              </div>

              <hr>
            </div>

            <div class="side-nav mb-60">
              <ul class="list-group list-group-bordered list-group-noicon uppercase">
                <li class="list-group-item active">
                  <a class="dropdown-toggle" href="#">امکانات</a>
                  <ul>
                    <li>

                      <!--<input type="checkbox" class="size-100" id="1" value="1" v-model="attr.facilities"/>-->
                      <label @click="getFields">
                        <checkbox value="1" :color="'#8ab933'" v-model="attr.facilities"><span
                          class="margin-right-8 text-muted float-right">پارکینگ</span></checkbox>
                      </label>

                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="2" :color="'#8ab933'" value="2" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">بوفه</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="3" :color="'#8ab933'" value="3" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">سرویس بهداشتی</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="4" :color="'#8ab933'" value="4" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">رختکن</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="5" :color="'#8ab933'" value="5" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">جایگاه تماشاچیان</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="6" :color="'#8ab933'" value="6" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">فروشگاه</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="7" :color="'#8ab933'" value="7" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">اجاره توپ</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="8" :color="'#8ab933'" value="8" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">تهویه هوا</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="9" :color="'#8ab933'" value="9" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">فضای سبز</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="10" :color="'#8ab933'" value="10" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">دوش</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="11" :color="'#8ab933'" value="11" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">کمد</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="12" :color="'#8ab933'" value="12" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">ماساژ</span>
                        </checkbox>
                      </label>
                    </li>
                    <li>
                      <label @click="getFields">
                        <checkbox id="13" :color="'#8ab933'" value="13" v-model="attr.facilities">
                          <span class="margin-right-8 text-muted float-right">مربی</span>
                        </checkbox>
                      </label>
                    </li>


                  </ul>
                </li>

              </ul>
            </div>


            <!-- SIZE -->

            <!-- /SIZE -->


            <!-- COLOR -->
            <div class="mb-60">
              <h4>انتخاب شهر</h4>

              <!--<dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>-->
              <div class="fancy-form fancy-form-select" @onclick="getFields">
                <select class="form-control" v-model="attr.state_id" @onclick="getFields">
                  <option value="">انتخاب کنید</option>
                  <option value="1">تهران</option>
                  <option value="2">اصفهان</option>
                  <option value="3">شیراز</option>
                </select>

                <!--
                      .fancy-arrow
                      .fancy-arrow-double
                  -->
                <i class="fancy-arrow"></i>
              </div>
              <hr>
            </div>
            <!-- /COLOR -->


            <!-- BRANDS -->
            <!-- BRANDS -->

            <!-- HTML BLOCK -->
            <!-- /HTML BLOCK -->

          </div>

          <div id="portfolio" class="portfolio-gutter portfolio-title-over col-md-9">

            <ul class="nav nav-pills mix-filter mb-60">
              <li class="filter"><a>مرتب سازی بر اساس: </a></li>
              <li class="filter" @click="setSortBy('rating')"><a href="#">امتیاز</a></li>
              <li class="filter" @click="setSortBy('price_asc')"><a href="#">قیمت:صعودی</a></li>
              <li class="filter" @click="setSortBy('price_desc')"><a href="#">قیمت:نزولی</a></li>
              <li class="filter" @click="setSortBy('newest')"><a href="#">جدید ترین</a></li>
            </ul>


            <div class="row mix-grid">


              <div class="col-md-6 col-sm-6 mix development mix_all " v-for="field in fields"
                   style="display: block;  opacity: 1;"><!-- item -->

                <div class="item-box">
                  <figure>
										<span class="item-hover">
											<span class="overlay dark-5"></span>
											<span class="inner">


                        <!-- details -->
												<router-link class="ico-rounded" v-bind:to="'/fields/' + field.id + '/' + field.name">
													<span class="glyphicon glyphicon-option-horizontal fs-20"></span>
												</router-link>

											</span>
										</span>

                    <!-- overlay title -->
                    <div class="item-box-overlay-title">
                      <h3>{{field.name}}</h3>
                      <ul class="list-inline categories m-0">
                        <li> قیمت: {{toPersianNumber(field.price)}} تومان</li>
                      </ul>
                    </div><!-- /overlay title -->

                    <img class="img-fluid" v-bind:src="field.image" width="600"
                         height="399" alt="">
                  </figure>
                </div>

              </div><!-- /item -->

            </div>

          </div>

        </div>

      </section>
      <!-- / -->


      <!-- FOOTER -->
      <footers></footers>      <!-- /FOOTER -->

    </div>
    <!-- /wrapper -->


    <!-- SCROLL TO TOP -->
    <a href="#" id="toTop"></a>


    <!--//PRELOADER -->
    <!--<div id="preloader">-->
    <!--<div class="inner">-->
    <!--<span class="loader"></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--//PRELOADER -->

  </div>

</template>

<script>
  import axios from 'axios'

  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'
  import qs from 'qs'
  import vueSlider from 'vue-slider-component';


  export default {
    data: function () {
      return {
        name: 'FieldsList',
        fields: [],
        sliderValue: 1000000,
        meta: '',
        options: {
          reverse: true,
          min: 0,
          max: 1000000,
          interval: 50000,
          tooltipStyle: {
            "backgroundColor": "#289900",
            "borderColor": "#386629"
          },
          processStyle: {
            "backgroundColor": "#8ab933"
          }

        },

        attr: {
          state_id: '',
          district_id: '',
          sort_by: '',
          query: '',
          lat: '',
          long: '',
          min_price: 0,
          max_price: 1000000,
          featured: '',
          category: '',
          facilities: [],
        },

      }
    },
    watch: {
      '$route': 'getFields',
    },
    computed: {
      attr2: function () {
        return {
          state_id: this.attr.state_id ? this.attr.state_id : null,
          district_id: this.attr.district_id ? this.attr.district_id : null,
          sort_by: this.attr.sort_by ? this.attr.sort_by : null,
          query: this.attr.query ? this.attr.query : null,
          lat: this.attr.lat ? this.attr.lat : null,
          long: this.attr.long ? this.attr.long : null,
          min_price: this.attr.min_price ? this.attr.min_price : null,
          max_price: this.attr.max_price ? this.attr.max_price : null,
          featured: this.attr.featured ? this.attr.featured : null,
          category: this.attr.category ? this.attr.category : null,
          facilities: this.attr.facilities.length !== 0 ? String(this.toString(this.attr.facilities)) : null
        }
      }
    },
    components: {
      vueSlider,
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop,
      'dropdown': dropdown
    },
    created() {
      this.getFields()
    },
    methods: {
      getFields() {

        console.log("    ======================     " + qs.stringify(this.attr2, {skipNulls: true, encode: false}));
        axios.get("http://api.shahbandegan.ir/v1/fields?" + qs.stringify(this.attr2, {skipNulls: true, encode: false}))
          .then(response => {
            console.log(response.data.data);
            this.fields = response.data.data;
          })

      },
      setCategory(n) {
        this.attr.category = n;
        this.getFields();
      },
      setSortBy(type) {
        this.attr.sort_by = type;
        this.getFields()
      }
      ,
      toString(array) {
        let qqq = '';
        for (let i = 0; i < array.length; i++) {
          if (i === array.length - 1)
            qqq += array[i];
          else
            qqq += array[i] + ',';
        }
        if (qqq === '')
          return null;
        else
          return qqq;

      },
    }

  }
</script>

