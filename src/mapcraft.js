/*
Author: Aydin Ghane Kh.
Email: aydin.ghane.kh@gmail.com
Website: http://iding.ir
Github: https://github.com/iding-ir/mapcraft
*/

import { getOptions } from "./modules/getOptions";
import { getAppUrl } from "./modules/getAppUrl";
import { load } from "./modules/load";
import { buildMap } from "./modules/buildMap";
import { loadIcons } from "./modules/loadIcons";
import { fetchGeoJson } from "./modules/fetchGeoJson";
import { prepareSource } from "./modules/prepareSource";
import { prepareLayers } from "./modules/prepareLayers";
import { renderGeoJson } from "./modules/renderGeoJson";
import { closePopup } from "./modules/closePopup";
import { openPopup } from "./modules/openPopup";
import { colorizeDefaultMap } from "./modules/colorizeDefaultMap";
import { addControls } from "./modules/addControls";
import { makeLayerInteractive } from "./modules/makeLayerInteractive";
import { fitBounds } from "./modules/fitBounds";
import { flyTo } from "./modules/flyTo";
import { switchLayer } from "./modules/switchLayer";

export default class Mapcraft {
  constructor(opt) {
    this.options = getOptions(opt);
    this.geoJsons = {};
    this.popup = undefined;
  }
}

Mapcraft.prototype.getAppUrl = getAppUrl;
Mapcraft.prototype.load = load;
Mapcraft.prototype.buildMap = buildMap;
Mapcraft.prototype.loadIcons = loadIcons;
Mapcraft.prototype.fetchGeoJson = fetchGeoJson;
Mapcraft.prototype.prepareSource = prepareSource;
Mapcraft.prototype.prepareLayers = prepareLayers;
Mapcraft.prototype.renderGeoJson = renderGeoJson;
Mapcraft.prototype.closePopup = closePopup;
Mapcraft.prototype.openPopup = openPopup;
Mapcraft.prototype.colorizeDefaultMap = colorizeDefaultMap;
Mapcraft.prototype.addControls = addControls;
Mapcraft.prototype.makeLayerInteractive = makeLayerInteractive;
Mapcraft.prototype.fitBounds = fitBounds;
Mapcraft.prototype.flyTo = flyTo;
Mapcraft.prototype.switchLayer = switchLayer;
