var apiKey = require('./../.env').apiKey;

var coords = {}

exports.getDoctors = function(medicalIssue, displayDoctors, center) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=' + center.lat + '%2C' + center.lon +  '&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    displayDoctors(result.data, center);
  })
  .fail(function(error){
    console.log("Try again!");
  });
};

exports.locationSuccess = function(position) {
  debugger
  coords = {lat: position.coords.latitude, lon: position.coords.latitude};
}

exports.locationError = function(err) {
  debugger
  alert("Error in geolocation - defaulting to a search of Seattle, because it's the best.");
  coords = {lat: 47.6080514, lon: -122.3334927};
};

exports.coords = coords
