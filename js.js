var map = L.map('mapid').setView([32.5433984, -117.0387697], 19);


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
