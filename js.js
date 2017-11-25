var map = L.map('mapid').setView([32.5433984, -117.0387697], 19);


var greenIcon = L.icon({
  iconUrl: './bathroom.png',
  iconSize:     [40, 42], // size of the icon
  iconAnchor:   [20, 27], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -26] // point from which the popup should open relative to the iconAnchor
});


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 25,
  id: 'mapbox.satellite',
  accessToken: 'pk.eyJ1IjoiamFrZWJveWxlcyIsImEiOiJNcGJpWXhJIn0.ONDjoScLnbU4_VVfXmeIAA'
}).addTo(map);

var imageUrl = './image.png';

var	bounds = new L.LatLngBounds(
  // BOTTOM LEFT
  new L.LatLng(32.542233, -117.039202),
  // TOP RIGHT
  new L.LatLng(32.543899, -117.036499));
map.fitBounds(bounds);
var overlay = new L.ImageOverlay("./image.png", bounds, {
  opacity: 1,
  interactive: true,
  attribution: '&copy; A.B.B Corp.'
});
map.addLayer(overlay);

L.marker([32.543213, -117.037664], {icon: greenIcon}).addTo(map).bindPopup("Bathroom is in the back of the arcade");

L.marker([32.543313, -117.03799], {icon: greenIcon}).addTo(map).bindPopup("Bathroom is located in shoe lounge.");

L.marker([32.543113, -117.03842], {icon: greenIcon}).addTo(map).bindPopup("Located next to Asiacs.");


