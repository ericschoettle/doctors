var getDoctors = require('./../js/doctor.js').getDoctors;

var displayDoctors = function(doctors) {
  debugger
  $('#showDoctors').append(doctors)
}

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault()
    var medicalIssue = $('#medicalIssue').val()
    getDoctors(medicalIssue, displayDoctors)
  });
});
