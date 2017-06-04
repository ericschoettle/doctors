var apiKey = require('./../.env').apiKey;

var coords = {};

exports.getDoctors = function(medicalIssue, displayDoctors, center) {
  var url = 'https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue +'&location=' + center.lat + '%2C' + center.lon + ',20&skip=0&limit=20&user_key=' + apiKey;
  $.get(url)
  .then(function(result) {
    displayDoctors(result.data, center);
  })
  .fail(function(error){
    console.log("Try again!");
  });
};
