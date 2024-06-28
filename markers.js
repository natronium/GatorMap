let pot_markers = pot_info.map(({ pos, id }) => {
    const marker = L.marker(pos);
    marker.bindPopup(`Pot ID: ${id}`);
    return marker;
});
let pot_layer = L.layerGroup(pot_markers);

let chest_markers = chest_info.map(({ pos, id }) => {
    const marker = L.marker(pos);
    marker.bindPopup(`Chest ID: ${id}`);
    return marker;
});
let chest_layer = L.layerGroup(chest_markers);

let race_markers = race_info.map(({ pos, id }) => {
    const marker = L.marker(pos);
    marker.bindPopup(`Race ID: ${id}`);
    return marker;
});
let race_layer = L.layerGroup(race_markers);

let npc_markers = npc_info.map(({pos, name}) => {
    const marker = L.marker(pos);
    marker.bindPopup(name);
    return marker;
});
let npc_layer = L.layerGroup(npc_markers);

let npc_paths = npc_path_info.map(({path_points, name}) => {
    const line = L.polyline(path_points);
    line.bindPopup(name);
    return line;
});
let npc_path_layer = L.layerGroup(npc_paths);