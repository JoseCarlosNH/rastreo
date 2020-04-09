mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2VvbGlzIiwiYSI6ImNrOHNkNW1sODAwZDIzbnFuaGc0eGVtOWoifQ.BFDyncWZ7AkQMhvOJLbYNw';

var mexico = {
    lat: 22.3905413,
    lng: -99.2846132
}
var map

$(document).ready(function() {
    mapa = new Mapa()
});


function Mapa() {
    this.Init()
}

Mapa.prototype.Init = function () {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v8',
        center: mexico,
        zoom: 5
    });
}