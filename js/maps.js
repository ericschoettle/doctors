var mapApiKey = require('./../.env').mapApiKey;

$(function(){
  debugger;
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + mapApiKey;
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  document.getElementsByTagName('head')[0].appendChild(apiScript);
});

exports.getMaps = function(locations) {

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

  debugger
  // google.maps.event.addListener(marker, 'click', function() {
  //   infowindow.open(map, marker);
  // });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.open(map);
      map.setCenter(pos);
    });
  }
};


// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     };
//
//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Location found.');
//     infoWindow.open(map);
//     map.setCenter(pos);
//   }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//   });
// } else {
//   // Browser doesn't support Geolocation
//   handleLocationError(false, infoWindow, map.getCenter());
// }
