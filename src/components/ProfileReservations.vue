<template>
  <div>
    <sweet-modal ref="userBookingModal">
      <h3>جزییات سالن رزرو شده</h3>
      <div class="table-responsive">
        <table class="table table-hover text-right">
          <tbody>
          <tr>
            <td>کد پیگیری</td>
            <td>{{selectedBooking.id}}</td>
          </tr>
          <tr>
            <td>نام سالن</td>
            <td>{{selectedBooking.field.name}}</td>
          </tr>
          <tr>
            <td>وضعیت پرداخت</td>
            <td v-if="selectedBooking.transaction.status == 1">پرداخت شده به مبلغ: {{selectedBooking.transaction.amount}}</td>
            <td v-else>پرداخت نشده</td>
          </tr>
          <tr>
            <td>تاریخ و ساعت شروع سانس</td>
            <td>{{selectedBooking.start}}</td>
          </tr>
          <tr>
            <td>تاریخ و ساعت پایان سانس</td>
            <td>{{selectedBooking.end}}</td>
          </tr>
          <tr>
            <td>وضعیت</td>
            <td v-if="selectedBooking.status == 0">تایید نشده</td>
            <td v-if="selectedBooking.status == 1">تایید شده</td>
            <td v-if="selectedBooking.status == 2">لغو شده</td>
          </tr>
          <tr v-if="selectedBooking.notes">
            <td>توضیحات</td>
            <td>{{selectedBooking.notes}}</td>
          </tr>
          <tr>
            <td>تاریخ ثبت</td>
            <td>{{selectedBooking.created_at}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </sweet-modal>
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
        <div class="col-md-6 col-sm-6" v-if="prevs.length>0" v-for="prev in prevs">
          <div class="box-inner margin-top-30" v-on:click="showBooking(prev.id)">

            <h3 class="text-right margin-top-20 bold size-16 elipsis"><a href="#">{{prev.field_name}}</a>
            </h3>
            <p class="text-right">کد پیگیری: {{prev.id}}</p>
            <ul class="text-right size-12 list-inline list-separator nomargin">
              <li>
                <i class="fa fa-calendar"></i>
                {{prev.start}}
              </li>
            </ul>

          </div>
        </div>
        <div  class="col-md-6 col-sm-6" v-if="prevs.length===0">
          هنوز هیچ رزروی انجام نشده است
        </div>
        <!-- /item -->

      </div>
      <!-- /PROJECTS LIS -->

    </div>

  </div>
</div>

</template>

<script>
import axios from 'axios'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'


  export default {
    name: "ProfileReservations",
    data() {
      return {
        upcomings:'',
        prevs:'',
        selectedBooking: {
            "id": "YxA7rw",
            "field": {
                "id": "yjJKxX",
                "name": "quidem-blanditiis-magni-a-sit-doloremque-dignissimos"
            },
            "transaction": {
                "method": 0,
                "status": 1,
                "amount": 210000
            },
            "start": "پنجشنبه، 23 فروردین 1397 12:00",
            "end": "پنجشنبه، 23 فروردین 1397 13:00",
            "status": 1,
            "notes": "",
            "created_at": "شنبه، 25 فروردین 1397 19:52"
        }
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
        axios.get('https://api.asansport.com/v1/profile/bookings', config)

          .then(response => {

          this.prevs = (response.data.data);
          console.log(this.prevs);

        })
          .catch(e => {
            // this.notif('خطا', e, 'error');
            console.log(e)
          })

      },
      showBooking(id){
        let config = {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.get('https://api.asansport.com/v1/bookings/' + id, config)

          .then(response => {

          this.selectedBooking = response.data.data;
          this.$refs.userBookingModal.open();

        })
          .catch(e => {
            // this.notif('خطا', e, 'error');
            console.log(e)
          })

      }
    },
      components: {
          SweetModal,
          SweetModalTab
      }

  }
</script>

<style scoped>

</style>
