var id = sessionStorage.getItem('room') || 1;

document.querySelector('.room_title').innerHTML = rooms[id].name;
document.querySelector('.data_info').innerHTML = rooms[id].description;
		
for (var i = 0; i < rooms[id].list.length; i++) {
	document.querySelector('.data_list').innerHTML += rooms[id].list[i];
}