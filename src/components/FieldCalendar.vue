<template>
  <div>
    <full-calendar ref="calendar" :event-sources="eventSources" @event-selected="eventSelected"
                   @event-created="eventCreated" :config="config"></full-calendar>
      <sweet-modal ref="book">
          <h3>رزرو سالن</h3>
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="row">
              <div class="col-md-12">
                <div class="fancy-form fancy-form-select">
                  <select class="form-control">
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
                <input type="text" id="discount_code" name="discount_code" class="form-control required" placeholder="کد تخفیف">
                <span class="input-group-btn">
                    <button class="btn btn-info" type="submit">بررسی</button>
                </span>
              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="fancy-form">
              <textarea rows="5" class="form-control" placeholder="اگر پیشنهاد یا توضیحاتی دارید در اینجا بنویسید."></textarea>
              <i class="fa fa-sticky-note"></i>
            </div>
          </div>
        </div>
          <div class="divider"></div>
          <div class="row">
            <div class="col-md-12 text-right">
              <span><strong>تاریخ و ساعت: </strong></span><span id="time"></span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 text-right">
              <span><strong>قابل پرداخت: </strong></span><span id="price">0</span><span> تومان</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 col-md-offset-1">
              <button class="btn btn-block btn-success">ثبت سفارش</button>
            </div>
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
  //           url: `http://api.shahbandegan.ir/v1/fields/y6NZ6Q/schedule`,
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

  export default {
    name: 'FieldCalendar',
    data() {
      return {
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
          dayClick: (event) => {
              console.log('asd');
              console.log(event.utc().format('D-M-Y H:mm'));
              this.$refs.book.open();

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
          height: 500,
          allDaySlot: false,
          eventDurationEditable: false,
          eventOverlap: false,
          slotDuration: '00:' + this.$parent.fieldData.duration + ':00',
          slotLabelFormat: 'HH:mm',
            editable:false,

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
    },

    computed: {
      eventSources() {
        const self = this;
        const http = this.$http;
        return [
          {
            events(start, end, timezone, callback) {
              setTimeout(() => {
                  console.log("================" + http)
                callback(self.events.filter(() => Math.random() > 0.5));
              }, 1000);
            },
              overlap: "false",
              rendering: "background",
              color: "#ff9f89"
          },
        ];
      },
    },
      components: {
          SweetModal,
          SweetModalTab
      }
  };
</script>

<style src="../assets/css/fullcalendar.min.css"></style>
