/**
 * OPENLAYERS 3 BEGINNER'S GUIDE : Exemple page 90 (Chapitre 3)
 */

/**On instancie le layer */
var layer = new ol.layer.Tile({
    source : new ol.source.OSM()
});

/**Coordonnées de la ville de montpellier convertie sous la norme EPSG:3857 */
var montpellier = new ol.proj.transform([3.875083,43.609631], 'EPSG:4326', 'EPSG:3857');

/**On instancie la vue */
var view = new ol.View({
    center : montpellier,
    zoom : 6
});

/** On instancie la carte*/
var map = new ol.Map({
    target : 'map',
    layers : [layer],
    renderer : 'dom',
    view : view
});

function changeTarget(){
    var target = map.getTarget();
    if(target == "map"){
        map.setTarget('map2');
    }
    else{
        map.setTarget('map');
    }
}