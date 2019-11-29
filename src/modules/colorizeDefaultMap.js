export default function(opt) {
  const options = Object.assign(
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
