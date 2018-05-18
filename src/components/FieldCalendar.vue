<template>
  <div>
    <full-calendar ref="calendar" :event-sources="eventSources" @event-selected="eventSelected"
                   @event-created="eventCreated" :config="config"></full-calendar>
      <sweet-modal ref="book">
          <h3>رزرو سالن</h3>
        <div v-if="$store.state.isLoggedin">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="row">
              <div class="col-md-12">
                <div class="fancy-form fancy-form-select">
                  <select v-model="repeats" class="form-control">
                    <option value="1">1 جلسه</option>
                    <option value="4">4 جلسه</option>
                    <option value="8">8 جلسه</option>
                    <option value="12">12 جلسه</option>
                    <option value="16">16 جلسه</option>
                    <option value="20">20 جلسه</option>
                    <option value="24">24 جلسه</option>
                    <option value="28">28 جلسه</option>
                    <option value="32">32 جلسه</option>
                    <option value="36">36 جلسه</option>
                    <option value="40">40 جلسه</option>
                    <option value="44">44 جلسه</option>
                    <option value="48">48 جلسه</option>
                    <option value="52">52 جلسه</option>
                  </select>
                  <i class="fancy-arrow"></i>
                </div>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-12">
                <div class="input-group">
                <input v-model="discount_code" type="text" id="discount_code" name="discount_code" class="form-control required" placeholder="کد تخفیف">
                <span class="input-group-btn">
                    <button class="btn btn-info" type="submit" @click="discount">بررسی</button>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="fancy-form">
              <textarea v-model="notes" rows="5" class="form-control" placeholder="اگر پیشنهاد یا توضیحاتی دارید در اینجا بنویسید."></textarea>
              <i class="fa fa-sticky-note"></i>
            </div>
          </div>
        </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col-md-12 text-right">
              <span><strong>تاریخ: </strong></span><span>{{`${toPersianNumber(this.start.jYear())}/${toPersianNumber(this.start.jMonth()+1)}/${toPersianNumber(this.start.jDate())}`}}</span>
            </div>
            <div class="col-md-12 text-right">
              <span><strong>ساعت: </strong></span>
              <span>{{toPersianNumber(this.start.format('HH:mm'))}}</span> الی
              <span>{{toPersianNumber(this.start.clone().add(this.$parent.fieldData.duration, 'minutes').format('HH:mm'))}}</span>
            </div>
            <div class="col-md-12 text-right">
              <span><strong>قابل پرداخت: </strong></span><span>{{toPersianNumber(this.price)}}</span><span> تومان</span>
            </div>
          </div>
          <div class="row">

            <div v-if="$store.state.user.credit > this.price" class="alert alert-success">مبلغ از اعتبار شما کم می شود.</div>
            <div v-else class="alert alert-danger">اعتبار شما برای رزرو این سالن کافی نیست
            <a class="btn btn-info" :href="`https://api.asansport.com/profile/credit/add/`">افزایش اعتبار</a>
            </div>

            <div class="col-md-10 col-md-offset-1">
              <button class="btn btn-block btn-success margin-top-20" @click="book">ثبت سفارش</button>
            </div>
          </div>
        </div>
        <div v-else>
                <div class="alert alert-warning"> برای رزرو سالن باید وارد شوید. (<router-link to="/login-register" class="text-warning">ورود / ثبت نام</router-link>) </div>
        </div>
      </sweet-modal>
  </div>

</template>


<script>
  //   export default {
  //     mounted() {
  //       var calendar = $('#calendar').fullCalendar({
  //         header: {
  //           left: 'next,prev today',
  //           right: 'title'
  //         },
  //         buttonIcons: {
  //           prev: 'right-single-arrow',
  //           next: 'left-single-arrow',
  //           prevYear: 'left-double-arrow',
  //           nextYear: 'right-double-arrow'
  //         },
  //         isJalaali: true,
  //         isRTL: true,
  //         navlinks: false,
  //         lang: 'fa',
  //         eventLimit: false, // allow "more" link when too many events
  //         defaultView: 'agendaWeek',
  //         height: 550,
  //         allDaySlot: false,
  //         eventDurationEditable: false,
  //         eventOverlap: false,
  //         slotDuration: '00:30:00',
  //         slotLabelFormat: 'hh:mm',
  //         loading: function (bool) {
  //           $('#loading').toggle(bool);
  //         },
  //         editable: false,
  // //            eventDrop: eventMoved,
  //         events: {
  //           url: `https://api.asansport.com/v1/fields/y6NZ6Q/schedule`,
  //           method: "post",
  //           error: function () {
  //             $('#loadingError').show();
  //           }
  //         }
  //       });
  //     }
  //   }

  import moment from 'moment';
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  import axios from 'axios'
  import jMoment from 'moment-jalaali'

  export default {
    name: 'FieldCalendar',
    data() {
      return {
          repeats: 1,
          discount_code: null,
          notes: null,
          start: jMoment(),
          discount_percent: 0,
          duration: this.$parent.fieldData.duration,

        events: [
          {
            id: 1,
            title: 'event1',
            start: moment().hours(12).minutes(0),
          },
          {
            id: 2,
            title: 'event2',
            start: moment().add(-1, 'days'),
            end: moment().add(1, 'days'),
            allDay: true,
          },
          {
            id: 3,
            title: 'event3',
            start: moment().add(2, 'days'),
            end: moment().add(2, 'days').add(6, 'hours'),
            allDay: false,
          },
        ],

        config: {
          eventClick: (event) => {
            this.selected = event;
          },
          select: (start, end) => {
              // console.log(jMoment(start));
              this.start = jMoment(start.utc()); // (start.utc().format('D-M-Y H:mm'));
              this.$refs.book.open();

          },
            selectAllow: (selectInfo) => {
                var duration = moment.duration(selectInfo.end.diff(selectInfo.start));
                return duration.asMinutes() == this.duration;
            },
            header: {
                left: '',//'next,prev today',
                right: 'title',
                center: ''
//                    right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: {
                prev: 'right-single-arrow',
                next: 'left-single-arrow',
                prevYear: 'left-double-arrow',
                nextYear: 'right-double-arrow'
            },
          locale: 'fa',
          isJalaali: true,
          isRTL: true,
          lang: 'fa',
          eventLimit: false, // allow "more" link when too many events
          defaultView: 'agendaWeek',
          height: 'auto',
          allDaySlot: false,
          eventDurationEditable: false,
          eventOverlap: false,
          slotDuration: { minutes: this.$parent.fieldData.duration },
          slotLabelFormat: 'HH:mm',
          editable:false,
            overlap: false,
            selectOverlap: false,
            displayEventTime: false,
            // minTime: "06:00:00",
            // maxTime: "24:00:00",
            // slotDuration: "00:60:00"
            minTime: '7:30',
            // maxTime: '28:30',
            // displayEventEnd: true,
            // viewSubSlotLabel : true, //essential , default : false
            // slotLabelInterval : '00:30:00', // essential

        },

        selected: {},
      };
    },

    methods: {
      refreshEvents() {
        this.$refs.calendar.$emit('refetch-events');
      },

      removeEvent() {
        this.$refs.calendar.$emit('remove-event', this.selected);
        this.selected = {};
      },

      eventSelected(event) {
        this.selected = event;
      },

      eventCreated(...test) {
        console.log(test);
      },

      book() {

            console.log(this.repeats);
            console.log(this.notes);
            console.log(this.discount_code);
            console.log(this.start);

            let dat = {
                start: this.toEnglishNumber(this.start.format('D-M-Y H:mm')),
                repeats: this.repeats
            };
            if(this.notes != null && this.notes !== undefined)
                dat.notes = this.notes;
            if(this.discount_code != null && this.discount_code !== undefined)
                dat.discount_code = this.discount_code;

            let config = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.state.token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            axios.post('https://api.asansport.com/v1/fields/'+ this.$route.params.id +'/book', dat, config)
                .then(response => {
                    if (response.status == 201){
                        this.notif('توجه','رزرو سالن شما با موفقیت ثبت شد','success')
                        this.$refs.book.close();
                    }else {
                        this.notif('خطا', response.data.message,'error');
                    }
                })
                .catch(e => {
                    console.log(e);
                    this.notif('خطا','خطا در برقراری ارتباط','error');
                });
            this.repeats = 1;
            this.notes = null;
            this.discount_code = null;
            // this.price = this.$parent.fieldData.price;
            this.refreshEvents();
        },

      discount() {
          let config = {
              headers: {
                  Authorization: 'Bearer ' + this.$store.state.token,
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          };
          axios.get('https://api.asansport.com/v1/discounts/' + this.discount_code, config)
              .then(response => {
                  if (response.status == 200){
                      if(response.data.available) {
                          this.notif('توجه', response.data.percent * 100 + ' درصد از فاکتور شما کم شد.', 'success')
                          this.discount_percent = response.data.percent;
                      }
                      else
                          this.notif('توجه', response.data.message, 'error')
                  }else {
                      this.notif('خطا','خطای داخلی، لطفا بعدا تلاش کنید','error');
                  }
              })
              .catch(e => {
                  console.log(e);
                  this.notif('خطا','خطا در برقراری ارتباط','error');
              });
      },

      slotAvailable() {
          return true;
      },

      notif(title, text, type) {
            this.$notify({
                text: text,
                type: type,
                title: title
            })
        }
    },

    computed: {
      eventSources() {
        const self = this;
        return [
          {
            events(start, end, timezone, callback) {
              setTimeout(() => {
                  axios.get('https://api.asansport.com/v1/fields/'+ self.$route.params.id
                      + `/schedule?start=${start}&end=${end}`)
                      .then(response => {
                          if (response.status < 300){
                              console.log(response.data)
                              callback(response.data)
                          }else {
                              this.notif('خطا','خطای داخلی، لطفا بعدا تلاش کنید','error');
                          }
                      })
                      .catch(e => {
                          console.log(e);
                          this.notif('خطا','خطا در برقراری ارتباط','error');
                      });
              }, 1000);
            },
              overlap: "false",
              // rendering: "background",
              color: "#F01515",
              selectable: false
          },
        ];
      },
        price() {
          return this.$parent.fieldData.price * this.repeats * (1-this.discount_percent);
        }
    },
      components: {
          SweetModal,
          SweetModalTab
      }
  };
</script>

<style src="../assets/css/fullcalendar.min.css"></style>
