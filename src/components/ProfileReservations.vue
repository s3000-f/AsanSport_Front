<template>
  <div class="col-lg-9 col-md-9 col-sm-8">


    <div class="box-light"><!-- .box-light OR .box-dark -->
      <!--<div class="box-inner">-->

        <!--&lt;!&ndash; PROJECT CAROUSEL &ndash;&gt;-->
        <!--&lt;!&ndash;<div class="owl-carousel buttons-autohide controlls-over nomargin"&ndash;&gt;-->
             <!--&lt;!&ndash;data-plugin-options='{"singleItem": false, "items":"1", "autoPlay": 3500, "navigation": true, "pagination": false}'>&ndash;&gt;-->

          <!--&lt;!&ndash;&lt;!&ndash; item &ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="img-hover" v-for="upcoming in upcomings">&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;TODO fix the link&ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<h2 class="text-right margin-top-20 bold size-16 elipsis"><a href="blog-single-default.html">{{upcoming.title}}</a>&ndash;&gt;-->
            <!--&lt;!&ndash;</h2>&ndash;&gt;-->
            <!--&lt;!&ndash;<p class="text-right">{{upcoming.description}}</p>&ndash;&gt;-->
            <!--&lt;!&ndash;<ul class="text-right size-12 list-inline list-separator nomargin">&ndash;&gt;-->
              <!--&lt;!&ndash;<li>&ndash;&gt;-->
                <!--&lt;!&ndash;<i class="fa fa-calendar"></i>&ndash;&gt;-->
                <!--&lt;!&ndash;{{upcoming.date}}&ndash;&gt;-->
              <!--&lt;!&ndash;</li>&ndash;&gt;-->
            <!--&lt;!&ndash;</ul>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;&lt;!&ndash; /item &ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!---->
        <!--&lt;!&ndash; /PROJECT CAROUSEL &ndash;&gt;-->

      <!--</div>-->

      <!-- PROJECT LIS -->
      <div class="row">

        <!-- item -->
        <div class="col-md-6 col-sm-6" v-if="prevs.length()!=0" v-for="prev in prevs">
          <div class="box-inner margin-top-30">

            <h3 class="text-right margin-top-20 bold size-16 elipsis"><a href="#">{{prev.booker_name}}</a>
            </h3>
            <p class="text-right">{{prev_id}}</p>
            <ul class="text-right size-12 list-inline list-separator nomargin">
              <li>
                <i class="fa fa-calendar"></i>
                {{prev.start}}
              </li>
            </ul>

          </div>
        </div>
        <div  class="col-md-6 col-sm-6" v-else>
          <h1>هنوز هیچ رزروی انجام نشده است</h1>
        </div>
        <!-- /item -->

      </div>
      <!-- /PROJECTS LIS -->

    </div>

  </div>

</template>

<script>
import axios from 'axios'

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
        prevs:''
      }

    }
    ,
    created() {
      this.getBookings()
    },
    methods:{
      getBookings(){
        let config = {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.get('http://api.shahbandegan.ir/v1/profile/bookings', config)

          .then(response => {

          this.prevs = response.data.data;
          console.log(this.prevs);

        })
          .catch(e => {
            // this.notif('خطا', e, 'error');
            console.log(e)
          })

      }
    }

  }
</script>

<style scoped>

</style>
