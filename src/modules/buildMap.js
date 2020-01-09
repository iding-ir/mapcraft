import mapboxgl from "mapbox-gl";

export const buildMap = function() {
  return new Promise((resolve, reject) => {
    mapboxgl.accessToken = this.options.env.mapbox.token;

    const { container, center, zoom, pitch, bearing, hash } = this.options.map;

    this.map = new mapboxgl.Map({
      container,
      center,
      zoom,
      pitch,
      bearing,
      minZoom: 2,
      maxZoom: 20,
      hash,
      style: this.options.styles[this.options.defaultStyle]
    });

    const { fullscreen, geolocation, navigation } = this.options.controls;

    this.addControls({
      fullscreen,
      geolocation,
      navigation
    });

    if (this.options.useBuiltIn)
      this.map.on("style.load", () => {
        const colors = this.options.defaultMapColors[this.options.defaultStyle];

        this.colorizeDefaultMap({
          colors
        });
      });

    this.map.on("load", () => {
      resolve();
    });
  });
};
