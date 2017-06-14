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
    var coord = event.coordinate; /* On récupère les coordonnées du click */
    var degrees = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326'); /*On convertit la position en dégrés géographiques */
    var hdms = ol.coordinate.toStringHDMS(degrees);/*Conversion des données en chaîne de caractères */
    var element = overlay.getElement();/*On récupère l'élément html auquel est lié l'overlay */
    element.innerHTML = hdms; /*On insère la chaîne de caractère dans l'élément */
    overlay.setPosition(coord);/*On change la position de l'overlay sur la coordonnée de l'évènement */
    map.addOverlay(overlay);/*On ajout l'overlay à la carte */
});

/** On créé une variable checkbox qui est lié à un input de type checkbox dans map03.html */
var checkbox = document.getElementById("visible");

/**On ajoute un EventListener à la checkbox
 * getVisible() renvoie true or false suivant si le layer est affiché ou non
 * *setVisible() permet de passer la variable visible du layer à true or false.
 * Ici, on envoie à setVisible la valeur de la checkbox. Si elle est cochée, on affiche le layer, sinon on le rend invisible.
 */
checkbox.addEventListener('change', function() {
  var checked = this.checked;
  if (checked !== layer.getVisible()) {
    layer.setVisible(checked);
  }
});

layer.on('change:visible', function() {
  var visible = this.getVisible();
  if (visible !== checkbox.checked) {
    checkbox.checked = visible;
  }
});