import mapboxgl from "mapbox-gl";
import { extend } from "./extend.js";

export const openPopup = function(opt) {
  const options = extend(
    true,
    {
      lnglat: undefined,
      html: ""
    },
    opt
  );

  this.closePopup();

  this.popup = new mapboxgl.Popup({
    closeButton: false
  })
    .setLngLat(options.lnglat)
    .setHTML(options.html)
    .addTo(this.map);
};
