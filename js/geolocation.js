exports.success = function(position) {
  debugger
  coords = {lat: position.coords.latitude.toFixed(3)), lon: position.coords.latitude.toFixed(3)};
}

exports.error = function(err) {
  debugger
  alert("Error in geolocation - defaulting to a search of Seattle, because it's the best.");
  coords = {lat: 47.608, lon: -122.333};
};

// exports.coords = coords
