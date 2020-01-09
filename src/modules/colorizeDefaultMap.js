import { extend } from "./extend.js";

export default function(opt) {
  const options = extend(true,
    {
      colors: undefined
    },
    opt
  );

  this.map.setPaintProperty(
    "background",
    "background-color",
    options.colors.background
  );

  this.map.setPaintProperty("country-fills", "fill-color", options.colors.fill);

  this.map.setPaintProperty("country-lines", "line-color", options.colors.line);

  this.map.setPaintProperty(
    "country-symbols",
    "text-color",
    options.colors.text
  );
}
