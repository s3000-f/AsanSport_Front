<template>
  <div class="smoothscroll enable-animation">
    <slide-top></slide-top>
    <div id="wrapper">
      <header1></header1>

      <!-- -->
      <section class="padding-xlg">
        <div class="container">

          <h2>متاسفانه، صفحه مورد نظر یافت نشد!</h2>
          <router-link class="size-20 font-lato" to="/"><i
            class="glyphicon glyphicon-menu-left margin-right-10 size-16"></i> بازگشت به صفحه اصلی!</router-link>

        </div>
      </section>
      <!-- / -->

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
    name: "404",
    components: {
      'header1': Header,
      'footers': Footer,
      'slide-top': SlideTop
    }
  }
</script>

<style scoped>

</style>
