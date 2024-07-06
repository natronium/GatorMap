//unmapped, tl corner = 85,-180, BR= -85, 180
//ingame coords TL= -165, 315. BR = 315, -165

// ingame map image is from (x=-165,z=315) to (x=315,z=-165)
// width & height = 480

L.CRS.GatorCRS = L.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(256 / 480, 88, -256 / 480, 168)
})


let graticuleOverlay = L.svgOverlay(document.querySelector('#graticule_grid'),
  L.latLngBounds([[315, -165], [-165, 315]]), {
  opacity: 0.7,
  interactive: true
});

let graticule_layer = L.layerGroup([graticuleOverlay]);

let map = L.map('map', {
  crs: L.CRS.GatorCRS,
  layers: [pot_layer, chest_layer, race_layer, npc_layer, npc_path_layer, graticule_layer]
}).setView([75, 75], 2);

L.tileLayer('maptiles/{z}/{x}_{y}.png', {
  maxZoom: 7,
  noWrap: true,
  bounds: [[315,-165], [-165, 315]]
}).addTo(map);

let layerControl = L.control.layers({}, {
  "Pots": pot_layer,
  "Chests": chest_layer,
  "Races": race_layer,
  "NPCs": npc_layer,
  "NPC Paths": npc_path_layer,
  "Grid": graticule_layer,
}).addTo(map);

// Patch first to avoid longitude wrapping.
L.Control.Coordinates.include({
  _update: function (evt) {
    var pos = evt.latlng,
      opts = this.options;
    if (pos) {
      //pos = pos.wrap(); // Remove that instruction.
      this._currentPos = pos;
      this._inputY.value = L.NumberFormatter.round(pos.lat, opts.decimals, opts.decimalSeperator);
      this._inputX.value = L.NumberFormatter.round(pos.lng, opts.decimals, opts.decimalSeperator);
      this._label.innerHTML = this._createCoordinateLabel(pos);
    }
  }
});

L.control.coordinates({
  position: "bottomleft", //optional default "bootomright"
  decimals: 2, //optional default 4
  decimalSeperator: ".", //optional default "."
  labelTemplateLat: "Latitude: {y}", //optional default "Lat: {y}"
  labelTemplateLng: "Longitude: {x}", //optional default "Lng: {x}"
  enableUserInput: true, //optional default true
  useDMS: false, //optional default false
  useLatLngOrder: true, //ordering of labels, default false-> lng-lat
  markerType: L.marker, //optional default L.marker
  markerProps: {}, //optional default {},
}).addTo(map);