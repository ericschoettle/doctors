var mapApiKey = require('./../.env').mapApiKey;

$(function(){
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + mapApiKey;
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  document.getElementsByTagName('head')[0].appendChild(apiScript);
});

exports.getMaps = function(locations, center) {
  var map, infoWindow;
  debugger;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: parseFloat(center.lat), lng: parseFloat(center.lon)},
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
};
