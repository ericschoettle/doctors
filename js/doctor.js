var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue, displayDoctors, center) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=' + center.lat + '%2C' + center.lon + '%2C%205&user_location=' + center.lat + '%2C' + center.lon + '&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    displayDoctors(result.data, center);
  })
  .fail(function(error){
    console.log("Try again!");
  });
};

exports.locationSuccess = function(position) {
  var coords = {lat: position.coords.latitude, lon: position.coords.latitude};
}

exports.locationError = function(err) {
  alert("Error in geolocation - defaulting to a search of Seattle, because it's the best.");
  var coords = {lat: 47.6080514, lon: -122.3334927};
};
// Is the below code needed with exports?
// exports.getDoctorsModule = getDoctors;
