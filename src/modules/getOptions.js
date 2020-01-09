import { extend } from "./extend.js";

export const getOptions = function(opt) {
  return extend(
    true,
    {
      env: {
        mapbox: {
          token: ""
        }
      },
      map: {
        container: "",
        center: [35, 35],
        zoom: 2,
        pitch: 0,
        bearing: 0,
        hash: true
      },
      controls: {
        fullscreen: false,
        geolocation: true,
        navigation: true
      },
      colors: {
        light: {
          primary: "#1976D2",
          secondary: "#FAFAFA"
        },
        dark: {
          primary: "#455A64",
          secondary: "#FFA000"
        }
      },
      defaultMapColors: {
        light: {
          background: "#0D47A1",
          fill: "#EFEBE9",
          line: "#3E2723",
          text: "#3E2723"
        },
        dark: {
          background: "#101518",
          fill: "#263238",
          line: "#E1F5FE",
          text: "#E1F5FE"
        }
      },
      useBuiltIn: false,
      styles: {
        // light: "/mapcraft/jsons/styles/light/style.json",
        // dark: "/mapcraft/jsons/styles/dark/style.json",
        light: "mapbox://styles/mapbox/light-v10",
        dark: "mapbox://styles/mapbox/dark-v10"
      },
      defaultStyle: "light",
      icons: {
        default: "./mapcraft/images/icon-default.png"
      },
      defaultIcon: "default",
      geoJsons: {},
      layers: {
        polygon: {
          fill: true,
          line: true
        },
        polyline: {
          line: true,
          symbol: false
        },
        point: {
          symbol: true
        }
      },
      sourcePrefix: "",
      layersPrefixes: {
        polygon: {
          fill: "polygon-fill-",
          line: "polygon-line-"
        },
        polyline: {
          line: "polyline-line-",
          symbol: "polyline-symbol-"
        },
        point: {
          symbol: "point-symbol-"
        }
      }
    },
    opt
  );
};
