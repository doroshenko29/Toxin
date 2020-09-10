$(function() {
  $('#result').hide();
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('#arival, #departure').datepicker({mode: 'range',
      inline: true,firstDay: 1,
 showOtherMonths: true,dayNamesMin: ['ВС', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dateFormat: "dd.mm.yy",prevText: "",nextText: "",showButtonPanel: true,currentText: "Очистить",closeText: "Применить",
        

      
        
 beforeShowDay: function(date) {
           var startDate = $('#arival').datepicker("getDate");   
          var endDate = $('#departure').datepicker("getDate");
         return [true, startDate && ((date.getTime() == startDate.getTime())) ? "dp-highlight-start" :(endDate && date.getTime() == endDate.getTime())? "dp-highlight-end": startDate &&((date.getTime() == startDate.getTime()) || (endDate && date >= startDate && date <= endDate)) ? "dp-highlight" : ""];
        },

        onSelect: function(date, datepicker) {



            if (datepicker.id == "arival") {
                $('#departure').datepicker("setDate", date)
                    .datepicker("enable").datepicker("option", "minDate", date)
            }
            if (datepicker.id == "departure") {
                $('#departure').datepicker("setDate", date)
               
            }
            
            if (!$('#departure').datepicker("isDisabled")) {
                var startDate = $('#arival').datepicker("getDate");
                var endDate = $('#departure').datepicker("getDate");
                var diff = endDate.getDate() - startDate.getDate();
                $('#dayCount').text(diff).parent().show();
            }
           
        }
    }).filter("#departure").datepicker("disable");
});