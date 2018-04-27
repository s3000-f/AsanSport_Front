<template>
  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>

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
      <section class="page-header page-header-xlg parallax parallax-3">
        <div class="overlay dark-5"><!-- dark overlay [1 to 9 opacity] --></div>

        <div class="container">

          <h1>ABOUT US</h1>

          <!-- breadcrumbs -->
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li class="active">About Us</li>
          </ol><!-- /breadcrumbs -->

        </div>
      </section>
      <!-- /PAGE HEADER -->

      <!-- 3 Cols -->
      <section>
        <div class="container">
          <div class="row">

            <div class="col-md-4">

              <div class="heading-title heading-border-bottom heading-color">
                <h3>Passion</h3>
              </div>

              <p>Fabulas definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii propriae
                philosophia cu mea. Utinam ipsum everti necessitatibus at fuisset splendide.</p>

            </div>

            <div class="col-md-4">
              <div class="heading-title heading-border-bottom heading-color">
                <h3>Precision</h3>
              </div>
              <p>Fabulas definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii propriae
                philosophia cu mea. Utinam ipsum everti necessitatibus at fuisset splendide.</p>

            </div>

            <div class="col-md-4">
              <div class="heading-title heading-border-bottom heading-color">
                <h3>Simplicity</h3>
              </div>
              <p>Fabulas definitiones ei pri per recteque hendrerit scriptorem in errem scribentur mel fastidii propriae
                philosophia cu mea. Utinam ipsum everti necessitatibus at fuisset splendide.</p>

            </div>

          </div>

        </div>
        <div class="container">گروه تخصصی "آسان اسپرت" در سال 1393 با هدف فعاليت در زمينه ارائه کلیه خدمات و محصولات ورزشی از طریق فضای مجازی شروع به فعالیت نمود. ما نیز همانند بسیاری از شما مراجعه کنندگان به فضای مجازی و مشتریان سنتی که به دنبال سریعترین، ساده ترین و ارزانترین راه دریافت خدمات و محصولات ورزشی بودید، همواره دچار سختی ها و پیچیدگی های مراحل خرید یا فروش در شکل سنتی و مجازی بوده ایم و به خوبی می دانیم که یافتن بهترین گزینه ی ممکن برای خرید و فروش خدمات و محصولات ورزشی در بازار شلوغ کنونی، کاری بس پر دغدغه، زمان بر، و گیج کننده است.
          از این رو گروه آسان اسپرت به عنوان جامعه متخصصین ورزش کشور و مسلط به مقوله ورزش و تحولات گوناگون این صنعت بر آن شد که ضمن بررسی علمی و دقیق نیاز ها، محدودیت ها، فرصت ها و تهدیدهای موجود بازار فعلی ورزش کشور ، به ایجاد و راه اندازی پایگاهی مجازی بپردازد.
          اگرچه نهایت سعی خود را نموده ایم که حداکثر سادگی را در فرآیند ارائه خدمات و محصولات داشته باشیم، لیکن همواره مشتاق دریافت نظرات و پیشنهادات سازنده شما برای هرچه بهتر و کارآمدتر کردن این فرآیند هستیم. در صورتی که علاقمند به در میان گذاشتن نظرات خود با ما هستید، آنها را به آدرسinfo@asansport.com ارسال نمائید.
          آسان اسپرت با ساده سازی و روشن¬ سازی فرآیند خرید و فروش انواع خدمات و محصولات ورزشی، شما را یاری می کند تا با کمترین دردسر و در کمترین زمان "بیابید" یا "بسپارید".
        </div>

      </section>
      <!-- /3 Cols -->

      <!-- Counters -->
      <section class="padding-xs">
        <div class="container">

          <div class="row countTo-sm text-center">

            <div class="col-xs-6 col-sm-3 col-xs-6">
              <i class="ico-lg ico-transparent et-megaphone"></i>
              <div class="block size-40" style="color: #3498db;">
                <strong class="countTo size-40" data-speed="3000">1303</strong>
              </div>
              <h3 class="size-15 margin-top-10 margin-bottom-0">LINES OF CODE</h3>
            </div>

            <div class="col-xs-6 col-sm-3 col-xs-6">
              <i class="ico-lg ico-transparent et-chat"></i>
              <div class="block size-40" style="color: #e74c3c;">
                <strong class="countTo size-40" data-speed="3000">100</strong> %
              </div>
              <h3 class="size-15 margin-top-10 margin-bottom-0">SUPPORT</h3>
            </div>

            <div class="col-xs-6 col-sm-3 col-xs-6">
              <i class="ico-lg ico-transparent et-flag"></i>
              <div class="block size-40" style="color: #16a085;">
                <strong class="countTo size-40" data-speed="3000">77</strong> %
              </div>
              <h3 class="size-15 margin-top-10 margin-bottom-0">CUSTOMER CARE</h3>
            </div>

            <div class="col-xs-6 col-sm-3 col-xs-6">
              <i class="ico-lg ico-transparent et-puzzle"></i>
              <div class="block size-40" style="color: #9b59b6;">
                <strong class="countTo size-40" data-speed="3000">9877</strong>
              </div>
              <h3 class="size-15 margin-top-10 margin-bottom-0">DELIVERY</h3>
            </div>

          </div>

        </div>
      </section>
      <!-- /Counters -->

      <!-- FOOTER -->
      <footer>
        <footers></footers>
      </footer>    <!-- /FOOTER -->

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
  </div>
</template>

<script>
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    data: function () {
      return {
        name: 'About'
      }
    },
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    }
  }
</script>
