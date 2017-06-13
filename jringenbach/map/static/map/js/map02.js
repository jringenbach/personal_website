/** Création du layer */

var layer = new ol.layer.Tile({
    source : new ol.source.OSM()
});

/**On créé une intéraction */
var interaction = new ol.interaction.DragRotateAndZoom();

/**On créé un contrôle */
var control = new ol.control.FullScreen();

/**Création de l'overlay */
var center = ol.proj.transform([3.875083,43.609631], 'EPSG:4326', 'EPSG:3857');

var overlay = new ol.Overlay({
    position : center,
    element : document.getElementById('overlay')
});

/**Création de la vue */
var view = new ol.View({
    center : center,
    zoom : 6
});

/**Création de la carte */
var map = new ol.Map({
    target : 'map',
    layers : [layer],
    interactions : [interaction],
    controls : [control],
    overlays : [overlay],
    view : view
});