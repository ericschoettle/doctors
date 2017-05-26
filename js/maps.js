var mapApiKey = require('./../.env').mapApiKey;

$(function(){
  debugger
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + mapApiKey
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  document.getElementsByTagName('head')[0].appendChild(apiScript);
});

exports.getMaps = function(center, locations) {
  var map, infoWindow;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(2.8,-187.3),
    // center: {lat: -34.397, lng: 150.644}
    mapTypeId: 'terrain'
  });
  infoWindow = new google.maps.InfoWindow();
  debugger
  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position = {lat: location.lat, lng: location.lon};
      map: map
    })
  })
}
