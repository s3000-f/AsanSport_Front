<template>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "ProfileUserCredit"
    ,

    data() {
      return {

      }

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
        axios.get('http://api.shahbandegan.ir/v1/profile/bookings', config)

          .then(response => {

            // prevs = response.data.data;
            // console.log(prevs + "   ======================================================================== ");

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
