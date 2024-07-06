import { pot_info, chest_info, race_info, npc_info, npc_path_info } from "./raw_data.js"
import location_info from "./csv_data.js";

export const pot_markers = pot_info.map(({ pos, id }) => {
    const name = location_info.data.find(({ client_id }) => client_id == id)?.longname ?? "Undefined";
    const marker = L.marker(pos, { title: `${name} (${id})` });
    marker.bindPopup(`${name} (${id})`);
    return marker;
});
export const pot_layer = L.layerGroup(pot_markers);

export const chest_markers = chest_info.map(({ pos, id }) => {
    const name = location_info.data.find(({ client_id }) => client_id == id)?.longname ?? "Undefined";
    const marker = L.marker(pos, { title: `${name} (${id})` });
    marker.bindPopup(`${name} (${id})`);
    return marker;
});
export const chest_layer = L.layerGroup(chest_markers);

export const race_markers = race_info.map(({ pos, id }) => {
    const name = location_info.data.find(({ client_id }) => client_id == id)?.longname ?? "Undefined";
    const marker = L.marker(pos, { title: `${name} (${id})` });
    marker.bindPopup(`${name} (${id})`);
    return marker;
});
export const race_layer = L.layerGroup(race_markers);

export const npc_markers = npc_info.map(({ pos, name, internal_name }) => {
    const marker = L.marker(pos, { title: `${name} (${internal_name})` });
    marker.bindPopup(`${name} (${internal_name})`);
    return marker;
});
export const npc_layer = L.layerGroup(npc_markers);

export const npc_paths = npc_path_info.map(({ path_points, name }) => {
    const line = L.polyline(path_points);
    line.bindPopup(name);
    return line;
});
export const npc_path_layer = L.layerGroup(npc_paths);