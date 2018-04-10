<template>
  <div id="calendar"></div>
</template>

<script2 src="/static/assets/js/calendar.js" type="text/javascript"></script2>

<script>
  export default {
    data: function () {
      return {
        name: 'FieldCalendar'
      }
    },
      mounted() {
          var calendar = $('#calendar').fullCalendar({
              header: {
                  left: 'next,prev today',
                  right: 'title'
//                    right: 'month,agendaWeek,agendaDay'
              },
              buttonIcons: {
                  prev: 'right-single-arrow',
                  next: 'left-single-arrow',
                  prevYear: 'left-double-arrow',
                  nextYear: 'right-double-arrow'
              },
              isJalaali: true,
              isRTL: true,
              navlinks: false,
              lang: 'fa',
              eventLimit: false, // allow "more" link when too many events
              defaultView: 'agendaWeek',
              height: 550,
              allDaySlot: false,
              eventDurationEditable: false,
              eventOverlap: false,
              slotDuration: '00:30:00',
              slotLabelFormat: 'hh:mm',
              loading: function (bool) {
                  $('#loading').toggle(bool);
              },
              editable: false,
              droppable: true, // this allows things to be dropped onto the calendar
              //drop: eventMoved,
              eventReceive: function(event) {
                  droppedEvent = event;
                  var loggedIn = true;
                  if(!loggedIn)
                      $('#calendar').fullCalendar('removeEvents', droppedEvent._id);
              },
//            eventDrop: eventMoved,
              events: {
                  url: `./schedule`,
                  method: "post",
                  error: function () {
                      $('#loadingError').show();
                  }
              }
          });
      }
  }
</script>

<style src="../assets/css/fullcalendar.min.css"></style>