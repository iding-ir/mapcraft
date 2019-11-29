import mapboxgl from "mapbox-gl";

export default function(opt) {
  const options = Object.assign(
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
}
