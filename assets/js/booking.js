checkRoom();
function checkRoom() {
  var selectRoom = document.querySelector('.selectRoom');
  var roomID = sessionStorage.getItem('roomID');

  if (roomID == null || roomID == 'null') {
    selectRoom.innerHTML = '<h3>Вы не выбрали номер, <input type="checkbox" name="yourRoom" id="checkbox"><label for="checkbox">сделать это за вас?</label><a href="rooms.html" class="btn"> Выбрать номер</a></h3>';
  } else {
    var out = '';

    out += '<div class="img_box"><img src="./content/images/' + rooms[roomID].image + '" alt="imgRoom"></div>';
    out += '<div class="text_box">';
    out += '<h4>' + rooms[roomID].name + '</h4>';
    out += '<p>' + rooms[roomID].description + '</p>';
    out += '<ul>';
    for (var i = 0; i < rooms[roomID].list.length; i++) {
      out += '<li>' + rooms[roomID].list[i] + '</li>';
    }
    out += '</ul>';
    function dateparser(date_string) {
      var m, y, d;
      m = date_string.substr(3, 2);
      y = date_string.substr(6, 4);
      d = date_string.substr(0, 2);
      var result = y + '-' + m + '-' + d;
      var parts = result.split('-');
      var res_date = new Date(parts[0], parts[1] - 1, parts[2]);
      return res_date;
    }

    var date1 = dateparser(sessionStorage.getItem('checkIn'));
    var date2 = dateparser(sessionStorage.getItem('checkOut'));

    var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)) || 1;

    out += '<h5>Итого: <span>' + rooms[roomID].price * daysLag + '$</span> за ' + daysLag + 'д</h5></div>';
    selectRoom.innerHTML = out;
  }
}


var minDate = new Date();
$("#depart").datepicker({
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  firstDay: 1,
  showAnim: 'drop',
  numberOfMonth: 1,
  minDate: minDate,
  dateFormat: 'dd|mm|yy',
  onClose: function (selectedDate) {
    $('#return').datepicker('option', 'minDate', selectedDate);
    sessionStorage.setItem('checkIn', document.querySelector('#depart').value);
    showDate();
    checkRoom();
  }
});

$("#return").datepicker({
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
    'Октябрь', 'Ноябрь', 'Декабрь'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  firstDay: 1,
  showAnim: 'drop',
  numberOfMonth: 1,
  minDate: minDate,
  dateFormat: 'dd|mm|yy',
  onClose: function (selectedDate) {
    $('#depart').datepicker('option', selectedDate);
    sessionStorage.setItem('checkOut', document.querySelector('#return').value);
    showDate();
    checkRoom();
  }
});