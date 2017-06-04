var getDoctors = require('./../js/doctor.js').getDoctors;
// var success = require('./../js/geolocation.js').locationSuccess;
// var error = require('./../js/geolocation.js').locationError;
// var coords = require('./../js/geolocation.js').coords;
var getMaps = require('./../js/maps.js').getMaps;

var displayDoctors = function(doctors, center) {
  debugger;
  var locations = [];
  doctors.forEach(function(doctor) {
    var text = "<br>Dr. " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " +
    doctor.profile.title + " practices " + doctor.specialties[0].name + " at: <br>" +
    doctor.practices[0].name + " at " + doctor.practices[0].lat + ", " +  doctor.practices[0].lon + "<br>";
    $('#showDoctors').append(text);

    locations.push(doctor.practices[0]);
  });
  getMaps(locations, center);
};

$(function() {
  coords = {};
  var options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };

  var success = function(position) {
    coords = {lat: position.coords.latitude.toFixed(6), lon: position.coords.longitude.toFixed(6)};
  };

  var error = function(err) {
    alert("Error in geolocation - defaulting to a search of Seattle, because it's the best.");
    coords = {lat: 47.6080514, lon: -122.3334927};
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    alert("please turn on geolocation for your browser");
  }

  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    getDoctors(medicalIssue, displayDoctors, coords);
  });
});
