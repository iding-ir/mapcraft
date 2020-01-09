import Terraformer from "terraformer";
import { extend } from "./extend.js";

export const fitBounds = function(opt) {
  const options = extend(
    true,
    {
      geoJson: undefined,
      padding: 100,
      pitch: 0,
      bearing: 0
    },
    opt
  );

  const polygon = new Terraformer.Primitive(options.geoJson);

  const bbox = polygon.bbox();

  this.map.fitBounds(bbox, {
    padding: options.padding,
    pitch: options.pitch,
    bearing: options.bearing
  });
};
