let menu = document.querySelector('.menu');
let main = document.querySelector('main');

document.addEventListener('click', function(e){
  if (e.target.classList.contains('menu_btn')){
    menu.classList.toggle('menu_show');
    main.classList.toggle('hide_page')
  } else if (e.target.classList.contains('menu_close_btn')) {
    menu.classList.remove('menu_show');
    main.classList.remove('hide_page');
  }
})



//show date in toBook Block
var today = new Date();
var tomorrow;
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
showDate()
function showDate() {
  today = dd + '|' + mm + '|' + yyyy;
  tomorrow = +dd + 1 + '|' + mm + '|' + yyyy;
  if (sessionStorage.getItem('checkIn') != null) {
    document.querySelector('#depart').value = sessionStorage.getItem('checkIn');
    document.querySelector('.checkIn p span').innerHTML = sessionStorage.getItem('checkIn');
  } else {
    document.querySelector('.checkIn p span').innerHTML = today;
    document.querySelector('#depart').value = today;
  }
  if (sessionStorage.getItem('checkOut') != null) {
    document.querySelector('#return').value = sessionStorage.getItem('checkOut');
    document.querySelector('.checkOut p span').innerHTML = sessionStorage.getItem('checkOut');
  } else {
    document.querySelector('.checkOut p span').innerHTML = tomorrow;
    document.querySelector('#return').value = tomorrow;
  }
}

$(document).ready(function () {
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
    }
  });
});


var adultCount = sessionStorage.getItem('adultCount') || 2;
var childCount = sessionStorage.getItem('childCount') || 0;
showPeopleCount()
function showPeopleCount() {
  document.querySelector('.adultCount').value = adultCount;
  document.querySelector('.childCount').value = childCount;
}

document.querySelector('.toBook').addEventListener('click', function (e) {
  if (e.target.classList.contains('minusAdult')) {
    if (adultCount >= 1) {
      adultCount--;
    }
  }
  else if (e.target.classList.contains('minusChild')) {
    if (childCount >= 1) {
      childCount--;
    }
  }
  else if (e.target.classList.contains('plusAdult')) {
    adultCount++;
  }
  else if (e.target.classList.contains('plusChild')) {
    childCount++;
  }
  sessionStorage.setItem('adultCount', adultCount);
  sessionStorage.setItem('childCount', childCount);
  sessionStorage.setItem('checkOut', document.querySelector('#return').value);
  sessionStorage.setItem('checkIn', document.querySelector('#depart').value);
  
  showPeopleCount()
});









window.addEventListener('load', function(){
  setTimeout(function(){
    document.querySelector('.preloader').classList.add('preloader_hide');
  }, 1000)
})

