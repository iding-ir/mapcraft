import { extend } from "./extend.js";

export default function(opt) {
  const options = extend(
    true,
    {
      geoJsons: undefined
    },
    opt
  );

  return new Promise((resolve, reject) => {
    for (let key in options.geoJsons) {
      const value = options.geoJsons[key];

      const source = this.prepareSource(key);
      const layers = this.prepareLayers(key);

      const mustRender = this.options.layers;

      const primaryColor = this.options.colors[this.options.defaultStyle]
        .primary;
      const secondaryColor = this.options.colors[this.options.defaultStyle]
        .secondary;

      this.map.addSource(source, {
        type: "geojson",
        data: value
      });

      if (mustRender.polygon.fill)
        this.map.addLayer({
          id: layers.polygon.fill,
          type: "fill",
          minzoom: 1,
          source: source,
          filter: [
            "any",
            ["==", ["geometry-type"], "Polygon"],
            ["==", ["geometry-type"], "MultiPolygon"]
          ],
          paint: {
            "fill-color": [
              "interpolate",
              ["exponential", 1],
              ["zoom"],
              1,
              primaryColor,
              12,
              primaryColor
            ],
            "fill-opacity": [
              "interpolate",
              ["exponential", 0.8],
              ["zoom"],
              0,
              0,
              12,
              0.4
            ]
          }
        });

      this.makeLayerInteractive({
        layer: layers.polygon.fill
      });

      if (mustRender.polygon.line)
        this.map.addLayer({
          id: layers.polygon.line,
          type: "line",
          minzoom: 1,
          source: source,
          filter: [
            "any",
            ["==", ["geometry-type"], "Polygon"],
            ["==", ["geometry-type"], "MultiPolygon"]
          ],
          layout: {
            "line-cap": "round",
            "line-join": "round"
          },
          paint: {
            "line-width": [
              "interpolate",
              ["exponential", 1],
              ["zoom"],
              0,
              0,
              12,
              4
            ],
            "line-color": [
              "interpolate",
              ["exponential", 1],
              ["zoom"],
              1,
              secondaryColor,
              12,
              secondaryColor
            ],
            "line-opacity": [
              "interpolate",
              ["exponential", 0.8],
              ["zoom"],
              0,
              0,
              12,
              1
            ]
          }
        });

      this.makeLayerInteractive({
        layer: layers.polygon.line
      });

      if (mustRender.polyline.line)
        this.map.addLayer({
          id: layers.polyline.line,
          type: "line",
          minzoom: 1,
          source: source,
          filter: [
            "any",
            ["==", ["geometry-type"], "LineString"],
            ["==", ["geometry-type"], "MultiLineString"]
          ],
          layout: {
            "line-cap": "round",
            "line-join": "round"
          },
          paint: {
            "line-width": [
              "interpolate",
              ["exponential", 1],
              ["zoom"],
              0,
              1,
              12,
              6
            ],
            "line-color": [
              "interpolate",
              ["exponential", 1],
              ["zoom"],
              1,
              secondaryColor,
              12,
              secondaryColor
            ],
            "line-opacity": [
              "interpolate",
              ["exponential", 0.8],
              ["zoom"],
              0,
              0,
              12,
              1
            ],
            "line-dasharray": [4, 4]
          }
        });

      this.makeLayerInteractive({
        layer: layers.polyline.line
      });

      if (mustRender.polyline.symbol)
        this.map.addLayer({
          id: layers.polyline.symbol,
          type: "symbol",
          minzoom: 1,
          source: source,
          filter: [
            "any",
            ["==", ["geometry-type"], "LineString"],
            ["==", ["geometry-type"], "MultiLineString"]
          ],
          layout: {
            "icon-image": this.options.defaultIcon,
            "icon-size": 1,
            "icon-anchor": "center",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true
          },
          paint: {
            "icon-opacity": [
              "interpolate",
              ["exponential", 0.8],
              ["zoom"],
              0,
              0,
              4,
              1
            ]
          }
        });

      this.makeLayerInteractive({
        layer: layers.polyline.symbol
      });

      if (mustRender.point.symbol)
        this.map.addLayer({
          id: layers.point.symbol,
          type: "symbol",
          minzoom: 1,
          source: source,
          filter: [
            "any",
            ["==", ["geometry-type"], "Point"],
            ["==", ["geometry-type"], "MultiPoint"]
          ],
          layout: {
            "icon-image": [
              "case",
              ["has", "icon"],
              ["get", "icon"],
              ["has", "type"],
              ["get", "type"],
              this.options.defaultIcon
            ],
            "icon-size": 1,
            "icon-anchor": "center",
            "icon-allow-overlap": true,
            "icon-ignore-placement": true
          },
          paint: {
            "icon-opacity": [
              "interpolate",
              ["exponential", 0.8],
              ["zoom"],
              0,
              0,
              4,
              1
            ]
          }
        });

      this.makeLayerInteractive({
        layer: layers.point.symbol
      });
    }

    resolve();
  });
}
