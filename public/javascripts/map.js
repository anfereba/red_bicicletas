var mymap = L.map('main_map').setView([4.611815, -74.075003], 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',

}).addTo(mymap);
L.marker([4.610505, -74.075075]).addTo(map);