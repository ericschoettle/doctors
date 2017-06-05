var mapApiKey = require('./../.env').mapApiKey;

$(function(){
  var apiLink = "https://maps.googleapis.com/maps/api/js?key=" + mapApiKey;
  var apiScript = document.createElement('script');
  apiScript.src = apiLink;
  document.getElementsByTagName('head')[0].appendChild(apiScript);
});

exports.getMaps = function(doctors, center) {
  var map, infoWindow;
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: parseFloat(center.lat), lng: parseFloat(center.lon)},
    mapTypeId: 'terrain'
  });

  doctors.forEach(function(doctor) {
    var location = doctor.practices[0]

    var marker = new google.maps.Marker({
      position: {lat: location.lat, lng: location.lon},
      map: map
    });

    var phone = location.phones[0].number;
    var phoneString = "(" + phone.slice(0,3) + ") " + phone.slice(3,6) + "-" + phone.slice(6);

    var address = location.visit_address
    debugger
    var addressString = location.name + "<br><br>" + address.street + "<br>"
    if (address.street2) {
      addressString += address.street2 + "<br>"
    }
    addressString += address.city + ", " + address.state + "<br>" + address.zip + "<br>"


    var text = "<b>Dr. " + doctor.profile.first_name + " " + doctor.profile.last_name + " " +  doctor.profile.title + ",</b><br><br>" +
      "Practices " + doctor.specialties[0].name + " at: <br>" +
      addressString + "<br>" +
      "Phone: " + phoneString + "<br>";

    var infoWindow = new google.maps.InfoWindow({
      content: text
    });

    marker.addListener('click', function() {
      map.setZoom(14);
      map.setCenter(marker.getPosition());
      infoWindow.open(map, marker);
    })

  });
};
