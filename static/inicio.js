// Variables globales

var urlVehiculo = window.location.origin + "/api/vehiculo/"
var urlIconCar = window.location.origin + "/static/icon-car.png"

// Token para usar mapbox

mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2VvbGlzIiwiYSI6ImNrOHNkNW1sODAwZDIzbnFuaGc0eGVtOWoifQ.BFDyncWZ7AkQMhvOJLbYNw';


// Documento Listo

$(document).ready(function() {
    mapa = new Mapa()
});


// Funcion principal

function Mapa() {
    this.map = null
    this.mexico = {
        lat: 22.3905413,
        lng: -99.2846132
    }
    this.Init()
}

// Inicializador

Mapa.prototype.Init = function () {
    this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8',
        center: this.mexico,
        zoom: 5
    });

    $.ajax({
        method: "GET",
        url: urlVehiculo,
        context: this,
        success: function (response) {
            response.forEach(function (vehiculo) {
                this.mapa.makeFeature(vehiculo)
            });
        },
        error: function(response){
            console.error(response)
        }
    });
}

// metodo para crear objeto json

Mapa.prototype.makeFeature = function (vehiculo) {
    if (vehiculo.lat != 0 && vehiculo.lng != 0) {
        var marker = {
            "type": "Feature",
            "properties": {
                "identificador": vehiculo.identificador,
                "placas": vehiculo.placas,
                "lat": vehiculo.lat,
                "lng": vehiculo.lng,
            },
            "geometry": {
                "type": "Point",
                "coordinates": [ vehiculo.lng, vehiculo.lat]
            }
        }
        this.drawMarker(marker)
    }
}

// metodo para "dibujar" marker en mapa 

Mapa.prototype.drawMarker = function (marker) {
    var element = document.createElement('div');
    element.className = 'marker';
    element.style.backgroundImage = 'url(' + urlIconCar + ')';
    element.addEventListener('click', function () {
        mapa.map.flyTo({
            center: marker.geometry.coordinates,
            zoom: 14
        });
    });
    new mapboxgl.Marker(element)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>ID: ' + marker.properties.identificador + '</h3><p>Placas:' + marker.properties.placas + '</br> Latitud: ' + marker.properties.lat + "</br> Longitud: "+ marker.properties.lng + '</p>'))
        .addTo(mapa.map);
}