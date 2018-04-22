<template>
  <div id="footer">
    <div class="container">

      <div class="row margin-top-60 margin-bottom-40 size-13">

        <!-- col #1 -->
        <div class="col-md-4">
          <!-- Footer Logo -->
          <router-link class="logo " to="/">
            <img class="img-responsive" src="http://new.asansport.com/img/logo.png" alt=""/>
          </router-link>
          <h2></h2>

        </div>
        <div class="col-md-4">
          <h4>آسان اسپرت</h4>
          <ul class="list-unstyled footer-list half-paddings noborder">
            <li><router-link class="block" to="/about"><i class="fa fa-angle-left"> </i> درباره ما</router-link></li>
            <li><router-link class="block" to="/how-it-works"><i class="fa fa-angle-left"> </i> چگونه کار می کند؟</router-link></li>
            <li><router-link class="block" to="lottery"><i class="fa fa-angle-left"> </i> قرعه کشی</router-link></li>
            <li><router-link class="block" to="/terms"><i class="fa fa-angle-left"> </i> قوانین و مقررات </router-link></li>
            <li><router-link class="block" to="/faq"><i class="fa fa-angle-left"> </i> سوالات متداول </router-link></li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-6 col-xs-6 text-center"><img style="background: white; width: 100%; height: 100%; border-radius: 10px; padding: 8px;" src="../assets/images/enamad.png" /></div>
            <div class="col-md-6 col-xs-6 text-center"><img style="background: white; width: 100%; height: 100%; border-radius: 10px; padding: 15px 8px;" src="../assets/images/samandehi.png" /></div>
          </div>
          <!--<img id='fukzjxlzoeuknbqejzpe' style='cursor:pointer' onclick='window.open("https://logo.samandehi.ir/Verify.aspx?id=61827&p=gvkarfthmcsiuiwkjyoe", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")' alt='logo-samandehi' src='https://logo.samandehi.ir/logo.aspx?id=61827&p=wlbqnbpdaqgwodrfyndt'/>-->
          <!--<img id='drftsguibrgwlbrhrgvl' style='cursor:pointer' onclick='window.open("https://trustseal.enamad.ir/Verify.aspx?id=10675&p=nbpddrfshwmbqgwlyncr", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")' alt='' src='https://trustseal.enamad.ir/logo.aspx?id=10675&p=lznbgthvkzoepeukfujy'/>-->
        </div>
        <!-- /col #1 -->

      </div>

    </div>

    <div class="copyright">
      <div class="container">
        <div class="pull-right nomargin mobile-block">
          <!-- Social Icons -->
          <div class="clearfix pull-right">

            <a href="#" class="social-icon social-icon-sm social-icon-border social-facebook pull-left"
               data-toggle="tooltip" data-placement="top" title="Facebook">
              <i class="icon-facebook"></i>
              <i class="icon-facebook"></i>
            </a>

            <a href="#" class="social-icon social-icon-sm social-icon-border social-twitter pull-left"
               data-toggle="tooltip" data-placement="top" title="Twitter">
              <i class="icon-twitter"></i>
              <i class="icon-twitter"></i>
            </a>

            <a href="#" class="social-icon social-icon-sm social-icon-border social-gplus pull-left"
               data-toggle="tooltip" data-placement="top" title="Google plus">
              <i class="icon-gplus"></i>
              <i class="icon-gplus"></i>
            </a>

            <a href="#" class="social-icon social-icon-sm social-icon-border social-linkedin pull-left"
               data-toggle="tooltip" data-placement="top" title="Linkedin">
              <i class="icon-linkedin"></i>
              <i class="icon-linkedin"></i>
            </a>

            <a href="#" class="social-icon social-icon-sm social-icon-border social-rss pull-left"
               data-toggle="tooltip" data-placement="top" title="Rss">
              <i class="icon-rss"></i>
              <i class="icon-rss"></i>
            </a>

          </div>
          <!-- /Social Icons -->
        </div>

        تمامی حقوق متعلق به آسان اسپرت می باشد.
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>
