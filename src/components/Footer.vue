<template>
  <div id="footer">
    <div class="container">

      <div class="row margin-top-60 margin-bottom-40 size-13">

        <!-- col #1 -->
        <div class="col-md-3 col-sm-3">

          <!-- Footer Logo -->
          <router-link class="logo " to="/">
            <img src="http://new.asansport.com/img/logo.png" alt=""/>
          </router-link>


          <h2></h2>

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
        <!-- /col #1 -->

        <!-- col #2 -->
        <div class="col-md-7 col-sm-7 pull-right">

          <div class="row">

            <div class="col-md-3 hidden-sm hidden-xs">
              <h4 class="letter-spacing-1">آسان اسپرت</h4>
              <ul class="list-unstyled footer-list half-paddings noborder">
                <li><router-link class="block" to="/about"><i class="fa fa-angle-right"></i> درباره ما</router-link></li>
                <li><router-link class="block" to="/how-it-works"><i class="fa fa-angle-right"></i> چگونه کار می کند؟</router-link></li>
                <li><router-link class="block" to="lottery"><i class="fa fa-angle-right"></i> قرعه کشی</router-link>
                </li>
                <li><router-link class="block" to="/terms"><i class="fa fa-angle-right"></i> قوانین و مقررات </router-link></li>
                <li><router-link class="block" to="/faq"><i class="fa fa-angle-right"></i> سوالات متداول </router-link></li>
              </ul>
            </div>

            <div class="col-md-4">
                <img id="fukzjxlzoeuknbqejzpe" style="cursor:pointer"  alt="logo-samandehi" src="https://logo.samandehi.ir/logo.aspx?id=61827&amp;p=wlbqnbpdaqgwodrfyndt">
                <img id="drftsguibrgwlbrhrgvl" style="cursor:pointer" alt="" src="https://trustseal.enamad.ir/logo.aspx?id=10675&amp;p=lznbgthvkzoepeukfujy">

            </div>

          </div>

        </div>
        <!-- /col #2 -->

      </div>

    </div>

    <div class="copyright">
      <div class="container">
        <ul class="pull-right nomargin list-inline mobile-block">
          <li><a href="#">Terms &amp; Conditions</a></li>
          <li>&bull;</li>
          <li><a href="#">Privacy</a></li>
        </ul>

        &copy; All Rights Reserved, Company LTD
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
