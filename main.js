let latitude = 22.7868542, longitude = 88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = "pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4

})



//Add Mapbox Geocoder
map.addControl(
    new mapboxgl.GeolocateControl({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)




var img1 = document.querySelector("#amber")
var img2 = document.querySelector("#gateway")
var img3 = document.querySelector("#indiagate")
var img4 = document.querySelector("#lotustemple")
var img5 = document.querySelector("#victoriaMemorial")
// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
    element: img1,
    
})
.setLngLat([75.85133, 26.98547])
.addTo(map);
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
    element: img2,
    
})
.setLngLat([72.8320794, 18.9219892])
.addTo(map);
// Create a India Gate Marker and add it to the map.

var marker3 = new mapboxgl.Marker({
    element: img3,
    
})
.setLngLat([77.2134209, 28.6090739])
.addTo(map);
// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
    element: img4,
    
})
.setLngLat([77.2562515, 28.5534967])
.addTo(map);

//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var marker5 = new mapboxgl.Marker({
    element: img5,
    
})
.setLngLat([ 88.34250811815956, 22.544952728680904])
.addTo(map);
