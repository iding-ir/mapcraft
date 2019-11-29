export default function(opt) {
  const options = Object.assign(
    {
      layer: undefined,
      visibility: undefined
    },
    opt
  );

  this.map.setLayoutProperty(options.layer, "visibility", options.visibility);
}
