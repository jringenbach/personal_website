/**On créé un layer et on récupère les tuiles sur OpenStreetMap */
var osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});

/** On récupère les coordonnées DATUM de Birmingham et on les convertir en Mercator */
var birmingham = ol.proj.transform([-1.81185, 52.44314], 'EPSG:4326', 'EPSG:3857');

/** Création d'une vue centrée sur birmingham avec un niveau de zoom de 6 */
var view = new ol.View({
   center : birmingham,
   zoom : 6
});

/** Création de la carte liée au div avec l'id 'map' */
var map = new ol.Map({
   target : 'map'
});

/** On ajoute le layer à la carte */
map.addLayer(osmLayer);

/** On définit la vue sur la carte */
map.setView(view);

/**
 * On aurait pu écrire
 * 
 * var map = new ol.Map({
 *  target : 'map',
 *  layers : [osmLayer]
 * })
 * 
 */
