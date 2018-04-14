<template>
  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>
    <div id="wrapper">
      <header1></header1>

      <section class="page-header">
        <div class="container">

          <h1>ورود مدیران</h1>

          <!--&lt;!&ndash; breadcrumbs &ndash;&gt;-->
          <!--<ol class="breadcrumb">-->
            <!--<li><a href="#">Home</a></li>-->
            <!--<li><a href="#">Pages</a></li>-->
            <!--<li class="active">Login</li>-->
          <!--</ol>&lt;!&ndash; /breadcrumbs &ndash;&gt;-->

        </div>
      </section>
      <!-- /PAGE HEADER -->




      <!-- -->
      <section>
        <div class="container">

          <div class="row">

            <!-- LEFT TEXT -->
            <div class="col-md-5 col-md-offset-1">

              <h2 class="size-16">توجه</h2>
              <p class="text-muted">این بخش مخصوص مدیران ورزشگاه میباشد و صرفا قابلیت مدیریت باشگاه ورزشی را در اختیار شما قرار میدهد.</p>
              <p class="text-muted">در صورتی که مدیر ورزشگاه نیستید و یا نیاز به رزرو سالن دارید از صفحه <router-link to="/login-register">ورود / ثبت نام </router-link> وارد شوید. </p>

            </div>
            <!-- /LEFT TEXT -->


            <!-- LOGIN -->
            <div class="col-md-4">

              <h2 class="size-16">ورود</h2>

              <!-- login form -->
              <form method="post" action="#" autocomplete="off">
                <div class="clearfix">

                  <!-- Email -->
                  <div class="form-group">
                    <input type="text" name="email" class="form-control" placeholder="تلفن همراه" required="">
                  </div>

                  <!-- Password -->
                  <div class="form-group">
                    <input type="password" name="password" class="form-control" placeholder="رمز عبور" required="">
                  </div>

                </div>

                <div class="row">

                  <div class="col-md-6 col-sm-6 col-xs-6">

                    <!-- Inform Tip -->
                    <div class="form-tip pt-20">
                      <a class="no-text-decoration size-13 margin-top-10 block" href="#">رمزعبور خود را فراموش کرده اید؟</a>
                    </div>

                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-6 text-right">

                    <button class="btn btn-primary">ورود</button>

                  </div>

                </div>

              </form>
              <!-- /login form -->

              <!-- ALERT -->
              <!--<div class="alert alert-mini alert-danger margin-bottom-30">-->
                <!--<strong>Oh snap!</strong> Login Incorrect!-->
              <!--</div>&lt;!&ndash; /ALERT &ndash;&gt;-->

            </div>
            <!-- /LOGIN -->

          </div>


        </div>
      </section>


      <footer>
        <footers></footers>
      </footer>
    </div>
  </div>
</template>

<script>
  import Header from './header'
  import SlideTop from './slideTop'
  import Footer from './Footer'

  export default {
    name: "ManagerLogin",
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    }
  }
</script>

<style scoped>

</style>
