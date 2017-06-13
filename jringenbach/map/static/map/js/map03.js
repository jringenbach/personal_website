/**Création d'un layer */
var layer = new ol.layer.Tile({
    source : new ol.source.OSM()
});

/** Création du point central */
var center = new ol.proj.transform([3.875083,43.609631], 'EPSG:4326', 'EPSG:3857');

/** Création de la vue */
var view = new ol.View({
    center : center,
    zoom : 6
});

/** Création de la carte */
var map = new ol.Map({
    target : 'map',
    view : view,
    layers : [layer]
});

/** Création de l'overlay */
var overlay = new ol.Overlay({
    element : document.getElementById("overlay"),
    positioning : 'bottom-center'
});

/** Création d'un évènement qui réagira lorsque l'on cliquera sur l'overlay */
map.on('click', function(event){
    var coord = event.coordinate;
    var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
    var hdms = ol.coordinate.toStringHDMS(degrees);
    var element = overlay.getElement();
    element.innerHTML = hdms;
    overlay.setPosition(coord);
    map.addOverlay(overlay);
});