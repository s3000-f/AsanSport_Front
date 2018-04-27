<template>

</template>

<script>
  import axios from 'axios'
  export default {
    name: "ProfileUserCredit"
    ,

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
        prevs: ''
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
