showRooms();

function showRooms() {
  var out = '';
  for (var key in rooms) {
    out += '<div class="room">';
    out += '<div class="img_box"><img src="./content/images/' + rooms[key].image + '" alt="RoomImg"></div>';
    out += '<div class="info_box"><h4><a href="./indoor.html" data-id="'+ key +'" class="show_room">' + rooms[key].name + '</a></h4>';
    out += '<p>' + rooms[key].description + '</p>';
    out += '<ul>';
    for (var i = 0; i < rooms[key].list.length; i++) {
      out += '<li>' + rooms[key].list[i] + '</li>';
    }
    out += '</ul>';
    out += '<a href="booking.html" data-id="' + key + '" class="btn">Бронировать</a>';
    out += '<span>' + rooms[key].price + '$</span>';
    out += '</div>';
    out += '</div>';
    document.querySelector('.rooms').innerHTML = out;
  }
}


var linkToBook = document.querySelectorAll('.info_box .btn');

for (var i = 0; i < linkToBook.length; i++) {
  linkToBook[i].onclick = function (e) {
    var ID = e.target.getAttribute('data-id');
    sessionStorage.setItem('roomID', ID);

    sessionStorage.setItem('adultCount', adultCount);
    sessionStorage.setItem('childCount', childCount);
    sessionStorage.setItem('checkOut', document.querySelector('#return').value);
    sessionStorage.setItem('checkIn', document.querySelector('#depart').value);
  }
}


var linkToBook = document.querySelectorAll('.info_box .show_room');

for (var i = 0; i < linkToBook.length; i++) {
  linkToBook[i].onclick = function (e) {
    var ID = e.target.getAttribute('data-id');
    sessionStorage.setItem('room', ID);
  }
}