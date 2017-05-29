var getDoctors = require('./../js/doctor.js').getDoctors;
var locationSuccess = require('./../js/doctor.js').locationSuccess;
var locationError = require('./../js/doctor.js').locationError;
var getMaps = require('./../js/maps.js').getMaps;


var displayDoctors = function(doctors, center) {
  var locations = []
  doctors.forEach(function(doctor) {
    var text = "<br>Dr. " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " +
    doctor.profile.title + " practices " + doctor.specialties[0].name + " at: <br>" +
    doctor.practices[0].name + " at " + doctor.practices[0].lat + ", " +  doctor.practices[0].lon + "<br>"
    $('#showDoctors').append(text)

    locations.push(doctor.practices[0])
  })
  getMaps(locations, center)
}

$(function() {
  var options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options)
  } else {
    alert("please turn on geolocation for your browser")
  }
  debugger
  $('#doctorSearch').submit(function(event) {
    event.preventDefault()
    var medicalIssue = $('#medicalIssue').val()
    debugger
    getDoctors(medicalIssue, displayDoctors, coords)
  });
});
