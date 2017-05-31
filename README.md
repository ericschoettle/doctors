# _Doctors_

#### _Website to look up doctors in your area 5/30/17_

#### By _**Eric Schoettle**_

## Description

_The Doctors app allows you to search for doctors in your area using that can treat a medical issue you are dealing with. It uses HTML5 geolocation to search for doctors in your area, or defaults to Seattle, because Seattle is awesome. Results are listed and displayed as pins in a google map centered on your location_

## Setup/Installation instructions

_Doctors requires installation of Node.js. Instructions can be found at https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js. It also requires two API keys, one for google maps and one for BetterDoctor. These can be found at and https://developer.betterdoctor.com/, respectively._

_In order to use the API keys, clone the github repository ("git clone https://github.com/ericschoettle/doctors"), and add a file to the top of the directory called ".env". This file should contain the following, with your API key inserted_

* _exports.mapApiKey = "INSERT-GOOGLE-MAPS-API-KEY-HERE";_
* _exports.apiKey = "INSERT-BETTER-DOCTOR-API-KEY-HERE";_


_Once you have completed Node installation, components can be downloaded and installed from the terminal window (mac only) The commands are:_

* _"NPM install" - installs Node Package Manager_
* _"Bower install" - installs Bower_
* _"gulp serve" - builds the application, initializes a server, and opens a web-browser tab containing the app_

## Support and contact details

_I'd be glad to offer support if you find yourself using this app, but much less glad to share my email address. Sorry, the latter wins_

## Known Bugs

_There are no known bugs at this time_

## Technologies Used

_The guts of doctor contain a host of packages that have been gulped down_

### License

*Doctor is licensed under the MIT license*

Copyright (c) 2017 **_Eric Schoettle_**
