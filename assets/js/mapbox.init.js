mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaWVuMDI3IiwiYSI6ImNrdGg3amE2ODAzdnYybnBkMGdyOTN3bnEifQ.JASRwL5w_Qwdz-qEyRJJzQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [153.06266924152015,-27.57609152296754], // starting position
    //-27.57609152296754, 153.06266924152015
    zoom: 13 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    '242 Mains Rd, Sunnybank QLD 4109'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([153.06266924152015,-27.57609152296754])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');