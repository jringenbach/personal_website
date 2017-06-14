/**
 * ANIMATIONS AVEC OPENLAYERS4
 */

/** On insère les lieux que l'on va utiliser dans des variables */

var montpellier = new ol.proj.transform([3.875083,43.609631], 'EPSG:4326', 'EPSG:3857');
var rome = new ol.proj.transform([12.5,41.9], 'EPSG:4326', 'EPSG:3857');

/**On créé la vue, que l'on centre sur montpellier */
var view = new ol.View({
    center : montpellier,
    zoom : 6
});

/** On créé notre layer */
var layer = new ol.layer.Tile({
    source : new ol.source.OSM()
});

/** On créé la carte */
var map = new ol.Map({
    layers : [layer],
    target : 'map',
    view : view
});

/** Création de l'animation doBounce qui va appeler la méthode bounce */
function doBounce(location){
    view.animate({
    center: location,
    duration: 2000,
    easing: bounce
    });
}

/** Création de l'animation : pan */
function doPan(location){
        view.animate({
          center: location,
          duration: 2000
        });
}

/** Effectue une rotation au dessus du lieu où est la carte */
function doRotate(){
        view.animate({
          rotation: view.getRotation() - Math.PI / 2
        });
}

/**Méthode bounce : from https://github.com/DmitryBaranovskiy/raphael */
function bounce(t) {
    var s = 7.5625, p = 2.75, l;
    if (t < (1 / p)) {
        l = s * t * t;
    } 
    else {
        if (t < (2 / p)) {
            t -= (1.5 / p);
            l = s * t * t + 0.75;
        } 
        else {
            if (t < (2.5 / p)) {
                t -= (2.25 / p);
                l = s * t * t + 0.9375;
            } else {
                t -= (2.625 / p);
                l = s * t * t + 0.984375;
            }
        }
    }
    return l;
}