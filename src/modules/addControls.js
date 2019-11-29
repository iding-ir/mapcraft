import mapboxgl from "mapbox-gl";

export default function(opt) {
  const options = Object.assign(
    {
      fullscreen: false,
      geolocation: false,
      navigation: false
    },
    opt
  );

  if (options.fullscreen) {
    let fullscreenControl = new mapboxgl.FullscreenControl({});

    this.map.addControl(fullscreenControl, "top-right");
  }

  if (options.geolocation) {
    let geolocateControl = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: false
    });

    this.map.addControl(geolocateControl, "bottom-right");
  }

  if (options.navigation) {
    let navigationControl = new mapboxgl.NavigationControl({});

    this.map.addControl(navigationControl, "top-right");
  }
}
