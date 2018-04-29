<template xmlns="http://www.w3.org/1999/html">
  <div class="smoothscroll enable-animation">
  <slide-top></slide-top>    <!-- /SLIDE TOP -->
  <div id="wrapper">
    <header1></header1>
    <section>
      <div class="container">

        <p class="lead">آسان اسپورت چگونه کار می کند؟
          دسترسی آسان، مطمئن و سریع به اماکن ورزشی اعم از سالن های چند منظوره ، باشگاه های ورزشی جهت اجاره سانس به صورت
          حقیقی یا حقوقی از طریق سایت
        </p>

        <div class="divider divider-center divider-color nomargin-top margin-bottom-80"><!-- divider -->
          <i class="fa fa-chevron-down"></i>
        </div>

        <div class="columnize-2">

          <h2 class="size-20">آیا فقط سالن های موجود در سایت قابل رزرو هستند؟</h2>
          <p>
            فعلا این سالن ها تحت پوشش گروه آسان اسپرت قرار دارند، ولی بزودی سالن های سطح شهر و حتی کشور به آسان اسپرت
            اضافه خواهد شد، بنابراین به منظور جلوگیری از هدر رفت وقت شما بهتر است کاربران در صفحه اصلی سایت در قسمت ثبت
            سفارشات، سفارش خود را بطور کامل ثبت نموده تا به محض ورود اطلاعات سالن های دیگر و مطابقت نیاز کاربران با سالن
            اضافه شده، با کاربر تماس گرفته شود یا اینکه وارد کانال تلگرام آسان اسپرت شده و از ورود اطلاعات جدید آگاهی
            پیدا کنید.
          </p>
          <h2 class="size-20">رزرو مجموعه ها به چه صورت می باشد؟</h2>
          <p>
            پس از یافتن سانس مد نظر خود در جدول مربوط به هر مجموعه، ثبت نام خود را در سایت تکمیل کرده و سپس وارد سایت
            شده، روی سانس مد نظر کلیک نموده و هزینه سانس پرداخت را نمایید، پس از آن مابقی هماهنگی ها توسط سایت انجام می
            شود و فقط شما لازم است در ساعت رزرو شده در مجموعه حضور داشته باشید. </p>
          <h2 class="size-20">آیا پس از رزرو سالن یا مجموعه ورزشی نیاز به هماهنگی دوباره وجود دارد؟</h2>
          <p>
            برخی از مجموعه های ورزشی کاملا بصورت آنلاین فعالیت نموده که در قسمت توضیحات هر مجموعه، مشخص شده است، در این
            مجموعه ها پس از رزرو آنلاین نیازی به هماهنگی دوباره نیست و پس از رزرو در ساعت مد نظر در مجموعه حضور داشته
            باشید، اما برخی مجموعه ها حتما قبل از رزرو آنلاین میبایست هماهنگی تلفنی انجام شود و پس از آن، سانس مد نظر
            رزرو شود.
          </p>
          <h2 class="size-20">آیا سانس های جدول هر مجموعه ورزشی آپدیت می باشد؟
          </h2>
          <p>
            تقریبا در تمامی مجموعه های ورزشی داخل سایت سانس های جدول آپدیت می باشد اما ممکن است در برخی مجموعه هایی که
            رزرو آنها نیاز به هماهنگی تلفنی است برخی سانس ها آپدیت نباشد و کاربر باید از طریق تماس از خالی بودن سانس مد
            نظر مطمئن شود.
          </p>

          <h2 class="size-20">تخفیف برای رزرو بلند مدت سانس ها چقدر است ؟</h2>
          <p>
            تخفیف برای رزروهای بلند مدت از 1 ماه تا 1 سال متفاوت است و از سانسی 5 هزار تومان تا سانسی 25 هزار تومان در
            مجموعه های مختلف و با توجه به نحوه پرداخت متغییر است.
          </p>


        </div>

        <!-- CALLOUT -->
        <!--<div class="callout alert alert-border margin-top-60 margin-bottom-60">-->

        <!--<div class="row">-->

        <!--<div class="col-md-9 col-sm-12">&lt;!&ndash; left text &ndash;&gt;-->
        <!--<h4>Call now at <strong>+800-565-2390</strong><strong> and get 15% discount!</strong></h4>-->
        <!--<p class="font-lato size-17">-->
        <!--We truly care about our users and our product.-->
        <!--</p>-->
        <!--</div>&lt;!&ndash; /left text &ndash;&gt;-->


        <!--<div class="col-md-3 col-sm-12 text-right">&lt;!&ndash; right btn &ndash;&gt;-->
        <!--<a href="#" class="btn btn-default btn-lg">CONTACT US</a>-->
        <!--</div>&lt;!&ndash; /right btn &ndash;&gt;-->

        <!--</div>-->

        <!--</div>-->
        <!-- /CALLOUT -->


      </div>
    </section>
    <footers></footers>
  </div>
  </div>
</template>

<script>
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "Faq"
    ,
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop,
    },
  }
</script>

<style scoped>

</style>
