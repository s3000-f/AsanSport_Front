<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/home">Home</router-link>
    <router-link to="/login-register">Login/Register</router-link>
    <router-link to="/fields/1">FEILD</router-link>
    <router-link to="/search-results">Lvbnnnnr</router-link>
    <router-link to="/check-out">CheckOut</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return{
      dat: ['/coins/'+'1', '/coins/2', '/coins/3', '/coins/4']
    }
  },
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
