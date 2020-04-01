var map;
var info = [];
var center = {
    lat: -34.4291969,
    lng: 150.8907369
};

var marks = [{
    placeName: "St.Michael's Cathedral",
    LatLng: [{
        lat: -34.4236536676,
        lng: 150.89512236
    }]
},
    {
        placeName: "Old Post Office",
        LatLng: [{
            lat: -34.4245901,
            lng: 150.8688307
        }]
    },
    {
        placeName: "Regent Theatre",
        LatLng: [{
            lat: -34.4389004,
            lng: 150.8817069
        }]
    },
    {
        placeName: "Stuart Park",
        LatLng: [{
            lat: -34.4091,
            lng: 150.8994
        }]
    },
    {
        placeName: "Breakwater Lighthouse",
        LatLng: [{
            lat: -34.4197,
            lng: 150.9068
        }]
    },
    {
        placeName: "Art Gallery",
        LatLng: [{
            lat: -34.4264,
            lng: 150.8975
        }]
    }

];

window.onload = function () {
    initMap();
};

function addpointers() {

    for (var i = 0; i < marks.length; i++) {
        var contentString = '<div id="content"><h1>' + marks[i].placeName +
            '</h1><p>See our <a href="heritage.html">Heritage page </a> for further details</p></div>';

        const marker = new google.maps.Marker({
            position: marks[i].LatLng[0],
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        marker.addListener('click', function () {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            info[0] = infowindow;
        });

    }
}

function closeOtherInfo() {
    if (info.length > 0) {
        info[0].set("marker", null);
        info[0].close();
        info.length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: center,
        draggable: true,
        scaleControl: true,
        streetViewControl: false
    });
    addpointers();
}