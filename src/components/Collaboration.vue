<template>

  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>

    <!-- wrapper -->
    <div id="wrapper">
      <header1></header1>


      <section class="page-header">
        <div class="container">

          <h1>همکاری با ما</h1>

        </div>
      </section>
      <!-- /PAGE HEADER -->


      <!-- -->
      <section>
        <div class="container">

          <div class="row">

            <!-- FORM -->
            <div class="col-md-8 col-sm-8">

              <h3>جهت همکاری با ما فرم زیر را تکمیل کنید</h3>


              <div>
                <fieldset>
                  <div class="row">
                    <div class="form-group">
                      <div class="col-md-6">
                        <label>نام *</label>
                        <input required type="text" class="form-control" v-model="name">
                      </div>
                      <div class="col-md-6">
                        <label>ایمیل *</label>
                        <input required type="email" class="form-control" v-model="email">
                      </div>

                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group">
                      <div class="col-md-6">
                        <label>تلفن همراه *</label>
                        <input type="tel" class="form-control" v-model="mobile">
                      </div>
                      <div class="col-md-6">
                        <label>نوع همکاری *</label>
                        <select class="form-control pointer" v-model="selection">
                          <option value="">- انتخاب کنید -</option>
                          <option value="manager">مدیران مجموعه های ورزشی</option>
                          <option value="consultant">مشاوران</option>
                          <option value="trainer">مربیان</option>
                          <option value="store">فروشنده تجهیزات ورزشی</option>
                          <option value="other">سایر</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group">
                      <div class="col-md-12">
                        <label>توضیحات</label>
                        <textarea maxlength="10000" rows="8" class="form-control" v-model="description">
                        </textarea>
                      </div>
                    </div>
                  </div>

                </fieldset>

                <div class="row">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-check"></i> ثبت اطلاعات</button>
                  </div>
                </div>
              </div>

            </div>
            <!-- /FORM -->


            <!-- INFO -->
            <div class="col-md-4 col-sm-4">

              <!--<h2>Visit Us</h2>-->

              <p>
                <strong>گروه تخصصی آسان اسپرت </strong>
                از تمامی صاحبان اماکن ورزشی تفریحی، باشگاه داران، مربیان کلاس های ورزشی ، داوران رشته های مختلف ورزشی ،
                مشاورین امر ورزش و کلیه مشاغل مرتبط با ورزش جهت همکاری دعوت به عمل می آورد...
                <hr/>
                درخواست ثبت همکاری شما مورد بررسی قرار گرفته و در اسرع وقت با شما تماس حاصل می گردد.
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
      <!-- / -->
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
    name: "Collaboration",
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
        selection: '',
        description: '',
      }
    }
  }
</script>

<style scoped>

</style>
