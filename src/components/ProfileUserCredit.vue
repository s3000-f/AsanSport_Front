<template>
  <div class="col-lg-9 col-md-9 col-sm-8">


    <div class="box-light"><!-- .box-light OR .box-dark -->

      <div class="row">
        <div class="col-md-6 col-sm-6">
          اعتبار فعلی شما : {{toPersianNumber(user.credit)}} تومان می باشد
        </div>
        <div class="col-md-6 col-sm-6">
          <button class="btn-success padding-6 radius-6 pull-right">افزایش اعتبار</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapGetters} from 'vuex';

  export default {
    name: "ProfileUserCredit"
    ,

    data() {
      return {}

    }
    ,
    created() {
      // this.getBookings()
    },
    methods: {
      getBookings() {
        let config = {
          headers: {
            Authorization: 'Bearer ' + this.$store.state.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        };
        axios.get('https://api.asansport.com/v1/profile/bookings', config)

          .then(response => {

            // prevs = response.data.data;
            // console.log(prevs + "   ======================================================================== ");

          })
          .catch(e => {
            // this.notif('خطا', e, 'error');
            console.log(e)
          })

      }
    },
    computed: {
      ...mapGetters({
        isLogged: 'isLogged',
        getToken: 'getToken',
        getErrors: 'getErrors',
        user: 'getUser'
      })
    },
  }
</script>

<style scoped>

</style>
