import "mapbox-gl/dist/mapbox-gl.css";

import Mapcraft from "../src/mapcraft.js";
import "./index.css";

let app = new Mapcraft({
  map: {
    container: "app-map",
  },
  styles: {
    light: "/mapcraft/jsons/styles/light/style.json",
    dark: "/mapcraft/jsons/styles/dark/style.json",
  },
  icons: {
    cat: "/assets/images/icon-cat.png",
    dog: "/assets/images/icon-dog.png",
  },
  geoJsons: {
    cats: "/data/cats.json",
    dogs: "/data/dogs.json",
    ways: "/data/ways.json",
  },
});

app.load().then(() => {
  let showPopup = (event) => {
    let name = event.features[0].properties.name;
    let html = `<div><h6>${name}</h6></div>`;
    let coordinates = event.lngLat;

    app.openPopup({
      lnglat: coordinates,
      html,
    });
  };

  app.map.on("click", "point-symbol-cats", showPopup);
  app.map.on("click", "point-symbol-dogs", showPopup);
  app.map.on("click", "polyline-line-ways", showPopup);
});
