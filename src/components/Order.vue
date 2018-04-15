<template>
  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>

    <!-- wrapper -->
    <div id="wrapper">
      <header1></header1>


      <section class="page-header">
        <div class="container">

          <h1>ثبت سفارشات</h1>

        </div>
      </section>
      <!-- /PAGE HEADER -->

      <section>
        <div class="container">

          <div class="row">

            <!-- FORM -->
            <div class="col-md-8 col-sm-8">

              <h3>جهت ثبت سفارش، فرم زیر را تکمیل کنید</h3>


              <div>
                <fieldset>
                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-4">
                        <label>نام</label>
                        <input required type="text" class="form-control" v-model="name">
                      </div>
                      <div class="col-md-4">
                        <label>ایمیل</label>
                        <input required type="email" class="form-control" v-model="email">
                      </div>
                      <div class="col-md-4">
                        <label>تلفن همراه</label>
                        <input type="tel" class="form-control" v-model="mobile">
                      </div>
                    </div>
                  </div>
                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-4">
                        <label>نام سازمان/اداره/ارگان</label>
                        <input required type="text" class="form-control" v-model="org_name">
                      </div>
                      <div class="col-md-4">
                        <label>مکان ورزشی مورد نیاز</label>
                        <input required type="text" class="form-control" v-model="event_type">
                      </div>
                      <div class="col-md-4">
                        <label>تلفن</label>
                        <input type="tel" class="form-control" v-model="phone">
                      </div>
                    </div>
                  </div>
                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-2">
                        <label>از ساعت</label>
                        <input type="text" class="form-control masked" data-format="99:99" data-placeholder="_"
                               placeholder="00:00" v-model="from_time">
                      </div>
                      <div class="col-md-2">
                        <label>تا ساعت</label>
                        <input type="text" class="form-control masked" data-format="99:99" data-placeholder="_"
                               placeholder="00:00" v-model="to_time">
                      </div>
                      <div class="col-md-2">
                        <label>جلسات هفته </label>
                        <select class="form-control pointer" v-model="no_in_week">
                          <option value="0">انتخاب کنید</option>
                          <option value="1">۱</option>
                          <option value="2">۲</option>
                          <option value="3">۳</option>
                          <option value="4">۴</option>
                          <option value="5">۵</option>
                          <option value="6">۶</option>
                          <option value="7">۷</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <label>مدت اجاره (ماه)</label>
                        <input type="number" class="form-control" v-model="time_month">
                      </div>
                      <div class="col-md-2">
                        <label>تعداد افراد</label>
                        <input type="number" class="form-control" v-model="no_people">
                      </div>
                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        <label>
                          <input type="checkbox" id="checkbox" class="size-25" v-model="trainer">
                          <span class="size-16">نیازمند مربی</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>روز هفته</label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="1" value="1" v-model="days">
                          <span class="size-16">شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="2" value="2" v-model="days">
                          <span class="size-16">یک شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="3" value="3" v-model="days">
                          <span class="size-16">دو شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="4" value="4" v-model="days">
                          <span class="size-16">سه شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="5" value="5" v-model="days">
                          <span class="size-16">چهار شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="6" value="6" v-model="days">
                          <span class="size-16">پنج شنبه</span>
                        </label>
                        <label class="checkbox-inline">
                          <input type="checkbox" class="size-25" id="7" value="7" v-model="days">
                          <span class="size-16">جمعه</span>
                        </label>

                      </div>

                    </div>
                  </div>
                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-3">
                        <label>محدوده منطقه</label>
                        <input required type="text" class="form-control" v-model="area">
                      </div>
                      <div class="col-md-2 text-left">
                        <label>محدوده قیمت</label>
                        از
                      </div>

                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        <input required type="number" class="form-control" v-model="price_low">
                      </div>
                      <div class="col-md-1 text-center">
                        <label>&nbsp;</label>
                        تا
                      </div>
                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        <input required type="number" class="form-control" v-model="price_high">
                      </div>
                      <div class="col-md-2">
                        <label>&nbsp;</label>
                        هزار تومان
                      </div>

                    </div>
                  </div>

                  <div class="row margin-bottom-10">
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>توضیحات</label>
                        <textarea required maxlength="10000" rows="8" class="form-control" v-model="description">
                        </textarea>
                      </div>
                    </div>
                  </div>

                </fieldset>

                <div class="row">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> ثبت اطلاعات </button>
                  </div>
                </div>
              </div>

            </div>
            <!-- /FORM -->

            <hr/>
            <hr/>
            <!-- INFO -->
            <div class="col-md-4 col-sm-4">


              <p>
                در این قسمت شما می توانید سفارشات خود را ثبت کنید و مدیر سایت پس از بررسی سفارشات شما،بهترین موقعیت
                متناسب با سفارش شما را انتخاب و به شما اطلاع رسانی خواهند کرد
              </p>


              <hr/>

              <p>
                <span class="block"><strong><i class="fa fa-map-marker"></i> آدرس:</strong>  تهران- کوی فردوس شرق - مالکی جنوبی - پلاک ۳</span>
                <span class="block"><strong><i class="fa fa-phone"></i> شماره همراه:</strong> <a href="tel:09124215404">۰۹۱۲۴۲۱۵۴۰۴</a></span>
                <span class="block"><strong><i class="fa fa-envelope"></i> ایمیل:</strong> <a
                  href="mailto:info@asansport.com">info@asansport.com</a></span>
              </p>

            </div>
            <!-- /INFO -->

          </div>

        </div>
      </section>


      <footer>
        <footers></footers>
      </footer>

    </div>
    <!-- /wrapper -->


    <!-- SCROLL TO TOP -->
    <a href="#" id="toTop"></a>


    <!-- PRELOADER -->
    <div id="preloader">
      <div class="inner">
        <span class="loader"></span>
      </div>
    </div><!-- /PRELOADER -->


    <!-- JAVASCRIPT FILES -->
  </div>
</template>

<script>
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "Order",
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    },
    data() {
      return {
        name: this.$store.state.user.fname + ' ' + this.$store.state.user.lname,
        email: this.$store.state.user.email,
        mobile: this.$store.state.user.mobile,
        event_type: '',
        org_name: '',
        phone: '',
        from_time: '',
        to_time: '',
        time_month: 0,
        no_people: 0,
        no_in_week: 0,
        trainer: false,
        days: [],
        area: '',
        description: '',
        price_low: 0,
        price_high: 0,

      }
    }
  }
</script>

<style scoped>

</style>
