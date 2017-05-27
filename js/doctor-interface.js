var getDoctors = require('./../js/doctor.js').getDoctors;
var getMaps = require('./../js/maps.js').getMaps;


var displayDoctors = function(doctors) {
  var locations = []
  doctors.forEach(function(doctor) {
    var text = "<br>Dr. " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " +
    doctor.profile.title + " practices " + doctor.specialties[0].name + " at: <br>" +
    doctor.practices[0].name + " at " + doctor.practices[0].lat + ", " +  doctor.practices[0].lon + "<br>"
    $('#showDoctors').append(text)

    locations.push(doctor.practices[0])
  })
  getMaps(locations)
}


$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault()
    var medicalIssue = $('#medicalIssue').val()
    getDoctors(medicalIssue, displayDoctors)
  });
});
