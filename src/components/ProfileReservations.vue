<template>
  <div class="col-lg-9 col-md-9 col-sm-8">


    <div class="box-light"><!-- .box-light OR .box-dark -->
      <div class="box-inner">

        <!-- PROJECT CAROUSEL -->
        <div class="owl-carousel buttons-autohide controlls-over nomargin"
             data-plugin-options='{"singleItem": false, "items":"1", "autoPlay": 3500, "navigation": true, "pagination": false}'>

          <!-- item -->
          <div class="img-hover" v-for="upcoming in upcomings">
            <!--TODO fix the link-->
            <h2 class="text-right margin-top-20 bold size-16 elipsis"><a href="blog-single-default.html">{{upcoming.title}}</a>
            </h2>
            <p class="text-right">{{upcoming.description}}</p>
            <ul class="text-right size-12 list-inline list-separator nomargin">
              <li>
                <i class="fa fa-calendar"></i>
                {{upcoming.date}}
              </li>
            </ul>
          </div>
          <!-- /item -->
        </div>
        <!-- /PROJECT CAROUSEL -->

      </div>


      <!-- PROJECT LIS -->
      <div class="row">

        <!-- item -->
        <div class="col-md-6 col-sm-6" v-for="prev in prevs">
          <div class="box-inner margin-top-30">

            <h3 class="text-right margin-top-20 bold size-16 elipsis"><a href="#">{{prev.title}}</a>
            </h3>
            <p class="text-right">{{prev.decimal}}</p>
            <ul class="text-right size-12 list-inline list-separator nomargin">
              <li>
                <i class="fa fa-calendar"></i>
                {{prev.date}}
              </li>
            </ul>

          </div>
        </div>
        <!-- /item -->

      </div>
      <!-- /PROJECTS LIS -->

    </div>

  </div>

</template>

<script>

  export default {
    name: "ProfileReservations",
    data() {
      return {
        upcomings: [
          {
            title: 'Upcoming 1',
            description: 'some long fucking description for this shit 1',
            date: '12th Dec 1992',
          },
          {
            title: 'Upcoming 2',
            description: 'some long fucking description for this shit 2',
            date: '12th Dec 1993',
          },
          {
            title: 'Upcoming 1',
            description: 'some long fucking description for this shit 3',
            date: '12th Dec 1994',
          }

        ],
        prevs: [
          {
            title: 'Previous Reservation 1',
            description: 'some other long shit for this fuck as a description 1',
            date: '12th Dec 1812',
          },
          {
            title: 'Previous Reservation 2',
            description: 'some other long shit for this fuck as a description 2',
            date: '12th Dec 1813',
          },
          {
            title: 'Previous Reservation 3',
            description: 'some other long shit for this fuck as a description 3',
            date: '12th Dec 1814',
          },
          {
            title: 'Previous Reservation 4',
            description: 'some other long shit for this fuck as a description 4',
            date: '12th Dec 1815',
          }
        ]
      }

    }
  }
</script>

<style scoped>

</style>
