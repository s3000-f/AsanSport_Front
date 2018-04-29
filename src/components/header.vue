<template>
  <div>
    <div id="topBar" class="dark">
      <div class="container">

        <!-- right -->
        <ul class="top-links list-inline pull-right">
          <li v-if="$store.state.isLoggedin" class="text-welcome hidden-xs"><strong>{{$store.state.user.fname}}</strong>
            ، به آسان اسپرت خوش آمدی
          </li>
          <li v-if="$store.state.isLoggedin">
            <a class="dropdown-toggle no-text-underline" data-toggle="dropdown"><i
              class="fa fa-user hidden-xs"></i>
              <!--<router-link to="/Manager" v-if="$store.state.user.isManager">حساب شما</router-link>-->
              <router-link to="/profile">حساب شما</router-link>
            </a>
          <li class="divider"></li>
          <li v-if="$store.state.isLoggedin">
            <a href="#" v-on:click="logout()"><i class="glyphicon glyphicon-off"></i>
              خروج
            </a>
          </li>
          <li v-if="!$store.state.isLoggedin">
            <a href="https://manager.asansport.com/"><i class="glyphicon glyphicon-off"></i> ورود مدیر سالن</a>
          </li>
          <li v-if="!$store.state.isLoggedin">
            <router-link to="/login-register"><i class="glyphicon glyphicon-off"></i> ورود/ثبت نام</router-link>
          </li>
        </ul>
        <!-- left -->

      </div>
    </div>
    <!-- /Top Bar -->

    <div id="header" class="sticky clearfix">

      <!-- SEARCH HEADER -->
      <div class="search-box over-header">
        <a id="closeSearch" href="#" class="glyphicon glyphicon-remove"></a>

        <form :action="this.$router.resolve({path: '/fields'}).href" method="get">
          <input type="text" name="q" class="form-control" placeholder="جست و جو"/>
        </form>
      </div>
      <!-- /SEARCH HEADER -->


      <!-- TOP NAV -->
      <header id="topNav">
        <div class="container">

          <!-- Mobile Menu Button -->
          <button class="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
            <i class="fa fa-bars"></i>
          </button>

          <!-- BUTTONS -->
          <ul class="pull-right nav nav-pills nav-second-main">

            <!-- SEARCH -->
            <li class="search">
              <a href="javascript2:;">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <!-- /SEARCH -->

          </ul>
          <!-- /BUTTONS -->

          <!-- Logo -->
          <router-link class="logo pull-left" to="/">
            <img src="http://new.asansport.com/img/logo.png" alt=""/>
          </router-link>
          <div class="navbar-collapse pull-right nav-main-collapse collapse">
            <nav class="nav-main">
              <ul id="topMain" class="nav nav-pills nav-main">
                <li class=""><!-- HOME -->
                  <router-link to="/">خانه</router-link>
                </li>
                <li class="dropdown">
                  <a class="dropdown-toggle" href="#">سالن های ورزشی</a>
                  <ul class="dropdown-menu has-topBar">
                    <li><router-link to="/fields/category-sports-complex">سالن چند منظوره</router-link></li>
                    <li><router-link to="/fields/category-small-stadium">چمن مصنوعی سایز کوچک</router-link></li>
                    <li><router-link to="/fields/category-large-stadium">چمن مصنوعی سایز بزرگ</router-link></li>
                    <li><router-link to="/fields/category-stadium">چمن طبیعی</router-link></li>
                    <li><router-link to="/fields/category-tennis">زمین تنیس</router-link></li>
                    <li><router-link to="/fields/category-aerobic-martial">سالن ایروبیک و رزمی</router-link></li>
                    <li><router-link to="/fields/category-pool">استخر</router-link></li>
                    <li><router-link to="/fields/category-paintball">زمین پینت بال</router-link></li>
                    <li><router-link to="/fields/category-etc">سایر مجموعه ها</router-link></li>
                  </ul>
                </li>
                <li>
                  <router-link to="/about">درباره ما</router-link>
                </li>
                <li>
                  <router-link to="/blog">بلاگ</router-link>
                </li>
                <li>
                  <a href="https://www.instagram.com/asansport.official/" target="_blank"><i
                    class="fa fa-instagram size-20"></i></a>
                </li>
                <li>
                  <a href="https://tlgrm.me/asansportchannel" target="_blank"><i class="fa fa-paper-plane size-20"></i></a>
                </li>
              </ul>

            </nav>
          </div>

        </div>
      </header>
      <!-- /Top Nav -->

    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "header",
    methods: {
      ...mapActions({
        logout: 'logout',
      }),
    },
    created() {
      if (this.$store.state.reload) {
        this.$store.dispatch('reload', false);
        location.reload();
      } else {
        this.$store.dispatch('reload', true);
      }

    }
  }
</script>

<style scoped>
  @font-face {
    font-family: iransans;
    font-weight: 200;
    src: url(../assets/fonts/iransans/iransans_ultralight.woff) format("woff")
  }

  @font-face {
    font-family: iransans;
    font-weight: 500;
    src: url(../assets/fonts/iransans/iransans_medium.woff) format("woff")
  }

  @font-face {
    font-family: iransans;
    font-weight: 700;
    src: url(../assets/fonts/iransans/iransans_bold.woff) format("woff")
  }

  body {
    font-family: iransans !important;
    line-height: 2;
  }
</style>
