## Index

- [Installation](#installation)
- [Examples](#examples)
- [Why Mapcraft](#why-mapcraft)
- [Initialization](#initialization)
- [Properties](#properties)
- [Methods](#methods)
- [Built-in Map](#built-in-map)

## Installation

Use as a node module:

```
npm install mapcraft --save
```

Or clone this repository, build a bundle, and add it to your html file.

```
git clone https://github.com/iding-ir/mapcraft.git
cd mapcraft
npm run build
```

To run the example:

```
npm start
```

## Examples

[Demo](http://realestate-map.iding.ir) - [Github](https://github.com/iding-ir/realestate-map)

[Demo](http://g2ocean.iding.ir) - [Github](https://github.com/iding-ir/g2-ocean)

## Why Mapcraft?

[Mapbox GL JS](https://mapbox.com/) is a wonderful library, but starting to develop a single page app with it can be a slow task.

Would it not be great if you initialized your map in an instant so you could jump into your real code?

Take adding custom icons/images for example ([official documents](https://docs.mapbox.com/mapbox-gl-js/example/add-image/)). It's not the prettiest of codes, and if you want to add multiple images it becomes even worse:

```
map.on("load", function() {
  map.loadImage("https://address/to/image/default.png", function(error, image) {
    if (error) throw error;

    map.addImage("default", image);

    map.loadImage("https://address/to/image/cat.png", function(error, image) {
      if (error) throw error;

      map.addImage("cat", image);

      map.loadImage("https://address/to/image/dog.png", function(error, image) {
        if (error) throw error;

        map.addImage("dog", image);

        map.addLayer({
          id: "points",
          type: "symbol",
          source: {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [{
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [0, 0]
                }
              }]
            }
          },
          layout: {
            "icon-image": [
              "case", ["==", ["get", "icon"], "cat"],
              "cat", ["==", ["get", "gender"], "dog"],
              "dog",
              "default"
            ],
            "icon-size": 1
          }
        });
      });
    });
  });
});
```

Since Mapbox doesn't provide Javascript Promises, you will end up adding to your code indent for every custom image that you add.

There is a second option tho, creating Sprites, custom style files and hosting them which is an even bigger hassle.

But what if you could load custom icons like this when you initialized your map:

```
{
  default: "/path/to/default.png",
  cat: "/path/to/cat.png",
  dog: "/path/to/dog.png"
}
```

Or, if you could similarly add GeoJSON files like below, because loading and rendering GeoJSON files is not any easier.

```
{
  cities: "/path/to/cities.json",
  borders: "/path/to/borders.json",
  lakes: "/path/to/lakes.json"
}
```

## Initialization

Minimal initialization:

```
import Mapcraft from "mapcraft";

const app = new Mapcraft({
  env: {
    mapbox: {
      token: "YOUR_MAPBOX_TOKEN"
    }
  },
  map: {
    container: "map",
    center: [5, 60],
    zoom: 5,
    pitch: 50,
    bearing: 0,
    hash: false
  },
  icons: {
    house: "./icon-house.png",
    apartment: "./icon-apartment.png",
    shared: "./icon-shared.png",
    dorm: "./icon-dorm.png"
  },
  geoJsons: {
    places: "./places.json"
  }
});
```

Initializing with all options:

```
import Mapcraft from "mapcraft";

const app = new Mapcraft({
  env: {
    mapbox: {
      token: ""
    }
  },
  map: {
    container: "map",
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
});
```

## Properties

Mapbox map object will be accessible with the 'map' property of your instance.

```
const app = new Mapcraft({...});

let center = app.map.getCenter(...);
```

Contents of the GeoJSON files will be accessible with the 'geoJsons' property of your instance.

```
const app = new Mapcraft({
  geoJsons: {
    places: "./places.json"
  }
});

console.log(app.geoJsons.places) // Will return the GeoJson object
```

Unlike Mapbox 'addSource' method, adding files like this provides access to GeoJSON objects. This is essential because methods like queryRenderedFeatures and querySourceFeatures do not quite do what their names suggest and you will soon find yourself using Javascript to filter the original GeoJSON data.

GeoJSON layers that are created will be accessible like this:

```
const app = new Mapcraft({
  geoJsons: {
    places: "./places.json"
  }
});

// Layer id = prefix + key
app.map.on("click", "point-symbol-places", event => {
  // Your awesome code here
});
```

## Methods

### Mapcraft.fitbounds

Fits the view port into the bounds of a GeoJSON.

```
let myGeoJson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              31.3330078125,
              48.60385760823255
            ],
            [
              21.97265625,
              49.49667452747045
            ],
            [
              20.214843749999996,
              42.779275360241904
            ],
            [
              27.6416015625,
              41.64007838467894
            ],
            [
              31.3330078125,
              48.60385760823255
            ]
          ]
        ]
      }
    }
  ]
}

app.fitBounds({
  geoJson: myGeoJson
});
```

## Built-in Map

[Mapbox vector tiles](https://docs.mapbox.com/vector-tiles/reference/) are great, and [Mapbox Style specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/) is amazing, but if for any reason you want to use a built-in map of the world instead of vector tiles, copy the 'mapcraft' directory in this repository to your project root and initialize Mapcraft like this:

```
const app = new Mapcraft({
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
  useBuiltIn: true,
  styles: {
    light: "/mapcraft/jsons/styles/light/style.json",
    dark: "/mapcraft/jsons/styles/dark/style.json",
  },
  defaultStyle: "light",
});
```
