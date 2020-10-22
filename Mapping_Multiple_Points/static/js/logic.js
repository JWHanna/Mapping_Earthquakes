// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// - Assigning the variable map to the object L.map(), instantiate the object with the given string 'mapid'
// - mapid will reference the id tag in our <div> element on the index.html file
/* - setView() method sets the view of the map with a geographical center, where the first coordinate is 
     latitude (40.7) and the second is longitude (-94.5). Zoom level is set to “4” on a scale 0–18. */
     /* - Alternative to setView():
          let map = L.map("mapid", {
            center: [
                40.7, -94.5
            ],
            zoom: 4
           }); 
           - This method is useful when we need to add multiple tile layers, or a background image of our map(s) */

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city. 
/*cityData.forEach(function(city) {
	console.log(city)
  // marker()
  //L.marker(city.location)
  // circleMarker
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});*/

// SKILL DRILL 13.4.2
cityData.forEach(function(city) {
	console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000,
    color: 'orange',
    fillColor: 'orange'
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// Add tile layer to Map for background
/*let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  accessToken: API_KEY*/
//SKILL DRILL 13.4.2
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
  accessToken: API_KEY
});
// Add 'graymap' tile layer to the map
streets.addTo(map);

