var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), options);
    center: {
        lat: -34.397,
            lng: 150.644
    }
    zoom: 8,
        draggable: false,
        scaleControl: false,
        streetViewControl: false
};

// Add marker
var marker = new google.maps.Marker({
        position: {lat: 47.3396, lng: 8.5806},
        map: map
    }
);
//Listen for click on map
google.maps.event.addListener(map, 'click');

function add_marker(event) {
    //Add marker
    addMarker({coords: event.latLng});
}

let markers = stations.features;
console.log(markers);
for (var x = 0; x < markers.length; x++) {
    let stationName = markers [x].properties.stopname;
    let latitude = markers[x].geometry.coordinates[1];
    let longitude = markers[x].geometry.coordinates[0];
    //console.log(stationName + "+latitude+" "+longitude");
    dropMarker(latitude, longitude);
}
}
function dropMarker(lat, lng) {
    var location = {lat: lat, lng: lng}
}

var contentString = "<h4>" + stationName + < /h4>;
var infoWindow = new google.maps.InfoWindow({
    content: contentString
});
var marker = new google.maps.Marker({position: location, map, title stationName})
}