var mapApiKey = require('./../.env').mapApiKey;

$(function(){
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + mapApiKey;
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  document.getElementsByTagName('head')[0].appendChild(apiScript);
});

exports.getMaps = function(locations, center) {
  var map, infoWindow;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: locations[0].lat, lng: locations[0].lon},
    // center: {lat: -34.397, lng: 150.644}
    mapTypeId: 'terrain'
  });

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.lon},
      map: map
    });
    var infoWindow = new google.maps.InfoWindow({
      content: '<p>' + location.name + '</p>'
    });
  });
}
