<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="/home">Home</router-link>-->
    <!--<router-link to="/login-register">Login/Register</router-link>-->
    <!--<router-link to="/fields/1">FEILD</router-link>-->
    <!--<router-link to="/search-results">Lvbnnnnr</router-link>-->
    <!--<router-link to="/check-out">CheckOut</router-link>-->

    <router-view></router-view>
    <script2 type="text/javascript">var plugin_path = '/static/assets/plugins/';</script2>
    <!--<script2 type="text/javascript">-->
    <!--import '/static/assets/plugins/jquery/jquery-2.1.4.min.js'-->
    <!--</script2>-->
    <script2 type="text/javascript" src="/static/assets/plugins/jquery/jquery-2.1.4.min.js"></script2>
    <script2 type="text/javascript" src="/static/assets/js/scripts.js"></script2>
    <!-- REVOLUTION SLIDER -->
    <script2 type="text/javascript"
             src="/static/assets/plugins/slider.revolution/js/jquery.themepunch.tools.min.js"></script2>
    <script2 type="text/javascript"
             src="/static/assets/plugins/slider.revolution/js/jquery.themepunch.revolution.min.js"></script2>
    <script2 type="text/javascript" src="/static/assets/js/view/demo.revolution_slider.js"></script2>
    <!-- PAGE LEVEL script2S -->
    <script2 type="text/javascript" src="/static/assets/js/view/demo.shop.js"></script2>
    <notifications position="bottom right"/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
