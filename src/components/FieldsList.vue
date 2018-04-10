<template>

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
                    <li><a href="#"><span class="fs-11 text-muted float-right"></span> سالن چند منظوره(فوتسال و والیبال
                      و ...) </a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right"></span> زمین تنیس </a></li>
                    <li><a href="#"><span class="fs-11 text-muted float-right"></span> زمین چمن </a>
                    </li>
                    <li><a href="#"><span class="fs-11 text-muted float-right"></span> زمین پینت بال </a></li>
                  </ul>
                </li>

              </ul>

            </div>
            <!-- /CATEGORIES -->

            <!-- SIZE -->
            <div class="mb-60">
              <h4>قیمت</h4>

              <input type="range" min="0" max="500000" step="10000">
              <hr>
            </div>
            <!-- /SIZE -->


            <!-- COLOR -->
            <div class="mb-60">
              <h4>انتخاب شهر</h4>
              <v-cascade
                filterable
                remote
                :data="remoteData"
                :remote-method="remoteMethod"
                :loading="remoteLoading"
                :autoFocus="false"
                v-model="remoteModal"
                :title="['远程搜索']"
                addClass="cascade-remote"
                @success="RemoteSuccess"
                @cancel="cancel"
              >

              </v-cascade>

              <hr>

            </div>
            <!-- /COLOR -->


            <!-- BRANDS -->
            <div class="side-nav mb-60">

              <div class="side-nav-head">
                <button class="fa fa-bars"></button>
                <h4>BRANDS</h4>
              </div>


              <div>
                <b-form-group label="Using <code>options</code> array:">
                  <b-form-checkbox-group id="checkboxes1" name="flavour1" v-model="selected" :options="options">
                  </b-form-checkbox-group>
                </b-form-group>

                <b-form-group label="Using sub-components:">
                  <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selected">
                    <b-form-checkbox value="orange">Orange</b-form-checkbox>
                    <b-form-checkbox value="apple">Apple</b-form-checkbox>
                    <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
                    <b-form-checkbox value="grape">Grape</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <hr>
                <div>Selected: <strong>{{ selected }}</strong></div>
              </div>
            </div>
            <!-- BRANDS -->


            <!-- BANNER ROTATOR -->
            <div class="owl-carousel buttons-autohide controlls-over mb-60 text-center owl-theme owl-carousel-init"
                 data-plugin-options="{&quot;singleItem&quot;: true, &quot;autoPlay&quot;: 4000, &quot;navigation&quot;: true, &quot;pagination&quot;: false, &quot;transitionStyle&quot;:&quot;goDown&quot;}"
                 style="opacity: 1; display: block;">
              <div class="owl-wrapper-outer">
                <div class="owl-wrapper"
                     style="width: 1052px; left: 0px; display: block; transition: all 0ms ease; transform: translate3d(0px, 0px, 0px); transform-origin: 131.5px center 0px; perspective-origin: 131.5px center;">
                  <div class="owl-item" style="width: 263px;"><a href="#">
                    <img class="img-fluid" src="demo_files/images/shop/banners/off_1.png" width="270" height="350"
                         alt="">
                  </a></div>
                  <div class="owl-item" style="width: 263px;"><a href="#">
                    <img class="img-fluid" src="demo_files/images/shop/banners/off_2.png" width="270" height="350"
                         alt="">
                  </a></div>
                </div>
              </div>

              <div class="owl-controls clickable">
                <div class="owl-buttons">
                  <div class="owl-prev"><i class="fa fa-angle-left"></i></div>
                  <div class="owl-next"><i class="fa fa-angle-right"></i></div>
                </div>
              </div>
            </div>
            <!-- /BANNER ROTATOR -->


            <!-- HTML BLOCK -->
            <div class="mb-60">
              <h4>HTML BLOCK</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non placerat mi. Etiam non tellus
                eunit.</p>

              <form action="#" method="post">
                <div class="input-group">
                  <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                  <input type="email" id="kiremail" name="email" class="form-control required"
                         placeholder="Enter your Email">
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
                        <li>{{field.price}}</li>
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

  export default {
    data: function () {
      return {
        name: 'FieldsList',
        fields: [],
        meta: '',
        attr: {
          state_id: '',
          district_id: '',
          sort_bye: '',
          query: '',
          lat: '',
          long: '',
          min_price: '',
          max_price: '',
          featured: '',
          category: '',
          facilities: '',
          remoteModal: false, //
          remoteLoading: false, //
          remoteData: [
            {
              'key': 'default_data_1',
              'label': 'default_data_1'
            },
            {
              'key': 'default_data_2',
              'label': 'default_data_2'
            },
            {
              'key': 'default_data_3',
              'label': 'default_data_3'
            },
            {
              'key': 'default_data_4',
              'label': 'default_data_4'
            },
            {
              'key': 'default_data_5',
              'label': 'default_data_5'
            },
            {
              'key': 'tip',
              'label': 'search U.S. states with input'
            }
          ]
        },
        search: ''
      }
    },
    watch: {
      '$route': 'getFields'
    },
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    },
    created() {
      this.getFields()
    },
    methods: {
      getFields() {
        axios.get("http://api.shahbandegan.ir/v1/fields/" + this.search)
          .then(response => {
            console.log(response.data.data);
            this.fields = response.data.data;
          })

      }
      ,

      RemoteSuccess(data) {
        console.log(data)
        // data: {
        //  path: ['Hawaii'],
        //  pathName: ['Hawaii']
        // }
      },
      cancel() {
        console.log('cancel')
      },
      remoteMethod(query) {
        let self = this;
        self.remoteLoading = true;
        // simulate api call
        setTimeout(function () {
          const remoteMockData = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia'];
          let remoteFormatData;
          self.remoteLoading = false;
          remoteFormatData = remoteMockData.map(item => {
            // format the data structure
            return {
              'key': item,
              'label': item
            }
          })
          self.remoteData = remoteFormatData.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
        }, 500)
      }
    }

  }
</script>

