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

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a cirle to the map circle()
/*L.circle([34.0522, -118.2437], {
  radius: 100
}).addTo(map);*/

// SKILL DRILL 13.4.1 circle()
/*L.circle([34.0522, -118.2437], {
  color: 'black',
  fillColor:'#ffffa1',
  radius: 300
}).addTo(map)*/


// Add a cirlce to the map circleMarker()
//L.circleMarker([34.0522, -118.2437]).addTo(map);
// - Default radius is 10 pixels

// SKILL DRILL 13.4.1 circleMarker()
L.circleMarker([34.0522, -118.2437], {
  radius: 300,
  color: 'black',
  fillColor: '#ffffa1'
}).addTo(map);

// Add tile layer to Map for background
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Add 'graymap' tile layer to the map
streets.addTo(map);

