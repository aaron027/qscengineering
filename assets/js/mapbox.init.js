mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWVuMDI3IiwiYSI6ImNrdGg3amE2ODAzdnYybnBkMGdyOTN3bnEifQ.JASRwL5w_Qwdz-qEyRJJzQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [151.00426719438266,-33.818100821970944], // starting position
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Queensland'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([151.00426719438266,-33.818100821970944])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');