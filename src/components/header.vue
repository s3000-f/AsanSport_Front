<template>
  <div>  <div id="topBar" class="dark">
    <div class="container">

      <!-- right -->
      <ul class="top-links list-inline pull-right">
        <li class="text-welcome hidden-xs" v-if="$store.state.isLoggedin" >به آسان اسپرت خوش آمدی , <strong>{{state.user.fname}}</strong></li>
        <li>
          <a class="dropdown-toggle no-text-underline" data-toggle="dropdown" href="#"><i
            class="fa fa-user hidden-xs"></i>
            <router-link v-if="$store.state.isLoggedin" to="/profile">Your Account</router-link>
          </a>
        <li class="divider"></li>
        <li>
          <a v-if="$store.state.isLoggedin" href="#" v-on:click="logout()"><i class="glyphicon glyphicon-off"></i> خروج
          </a>
          <router-link v-else to="/login-register"><i class="glyphicon glyphicon-off"></i> ورود/ثبت نام
          </router-link>
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

      <form action="page-search-result-1.html" method="get">
        <input type="text" class="form-control" placeholder="SEARCH"/>
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

        <!--
            Top Nav

            AVAILABLE CLASSES:
            submenu-dark = dark sub menu
        -->
        <div class="navbar-collapse pull-right nav-main-collapse collapse">
          <nav class="nav-main">

            <!--
                NOTE

                For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
                Direct Link Example:

                <li>
                    <a href="#">HOME</a>
                </li>
            -->
            <ul id="topMain" class="nav nav-pills nav-main">
              <li class="dropdown active"><!-- HOME -->
                <router-link to="/home">خانه</router-link>
              </li>
              <li class="dropdown"><!-- BLOG -->
                <router-link to="/about">بلاگ</router-link>
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
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
