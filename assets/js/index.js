$(function () {
  $('.slider').slick({
    arrows: false,
    infinite: true,
    adaptiveHeight: true,
    autoplay: true,
    dots: false,
    autoplaySpeed: 8000,
    fade: false,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false
  });
});


const slider = document.querySelector('.slider');


loadHeader();

function loadHeader() {
  let out = '';

  for (key in rooms) {
    if (key <= 4) {
      out += '<article class=slider__item>';
      out += '<div class="imgBlock">'
      out += '<img src="./content/images/' + rooms[key].image + '" alt="bgimg" class="bgImg">';
      out += '</div>';
      out += '<div class="textBlock">';
      out += '<h2>' + rooms[key].name + '</h2>';
      out += '<p>' + rooms[key].description + '</p>';
      out += '<a href="./rooms.html" class="slider_link btn" data-id="' + key +'">Подробнее</a>';
      out += '</div></article>';
    }
  }
  document.querySelector('.slider').innerHTML = out;
}

loadRooms();

function loadRooms() {
  let out = '';

  for (key in rooms) {
    out += '<div class="room">';
    out += '<div class="roomImg">';
    out += '<img src="./content/images/' + rooms[key].image + '" alt="roomImg">';
    out += '</div>';
    out += '<div class="roomText">';
    out += '<a href="./outdoor.html" class="roomTitle">' + rooms[key].name + '</a>';
    out += '<p>' + rooms[key].description + '</p>';
    out += '<a href="./booking.html" data-id="' + key + '" class="room_link btn">Бронировать</a>';
    out += '</div></div>';
  }
  document.querySelector('.rooms').innerHTML = out;
}


let slider_img = document.querySelectorAll('.slider__item img');



let linkToBook = document.querySelectorAll('.room_link');

for (var i = 0; i < linkToBook.length; i++) {
  linkToBook[i].onclick = function (e) {
    var ID = e.target.getAttribute('data-id');
    sessionStorage.setItem('roomID', ID);
  }
}