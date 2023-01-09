loadHeader(1);


function loadHeader(id) {
  let out = '';

  for(key in rooms) {
    if (key == id) {
      out = '<a href="./booking.html" data-id="' + key + '" class="room_link btn">Бронировать</a>';

      document.querySelector('.header_title').innerHTML = rooms[key].name;
      document.querySelector('.header_text').innerHTML = '<p>' + rooms[key].description + '</p>' + out;
    }
  }
}

document.querySelector('.next_btn').addEventListener('click', function(){
  let id = document.querySelector('.header_text a').getAttribute('data-id');

  if (id < Object.keys(rooms).length) {
    id++;
  } else {
    id = 1;
  }
  
  loadHeader(id);
})

document.querySelector('.prev_btn').addEventListener('click', function(){
  let id = document.querySelector('.header_text a').getAttribute('data-id');

  if (id > 1) {
    id--;
  } else {
    id = Object.keys(rooms).length;
  }
  loadHeader(id);
})



loadRooms();

function loadRooms() {
  let out = '';

  for (key in rooms) {
    out += '<div class="room">';
    out += '<div class="roomImg">';
    out += '<img src="./content/images/' + rooms[key].image + '" alt="roomImg">';
    out += '</div>';
    out += '<div class="roomText">';
    out += '<a href="./indoor.html" class="roomTitle" data-id="'+ key +'">' + rooms[key].name + '</a>';
    out += '<p>' + rooms[key].description + '</p>';
    out += '<a href="./booking.html" data-id="' + key + '" class="room_link btn_link">Бронировать</a>';
    out += '</div></div>';
  }
  document.querySelector('.rooms').innerHTML = out;
}



document.addEventListener('click', function(e){
  if(e.target.classList.contains('room_link')){
    var ID = e.target.getAttribute('data-id');
    sessionStorage.setItem('roomID', ID);

    sessionStorage.setItem('adultCount', adultCount);
    sessionStorage.setItem('childCount', childCount);
    sessionStorage.setItem('checkOut', document.querySelector('#return').value);
    sessionStorage.setItem('checkIn', document.querySelector('#depart').value);
  } else if (e.target.classList.contains('roomTitle')) {
    var ID = e.target.getAttribute('data-id');
    sessionStorage.setItem('room', ID);
  }
})
