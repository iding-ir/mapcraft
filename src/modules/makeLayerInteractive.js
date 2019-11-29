export default function(opt) {
  const options = Object.assign(
    {
      layer: undefined
    },
    opt
  );

  this.map.on("mousemove", options.layer, event => {
    this.map.getCanvas().style.cursor = "pointer";
  });

  this.map.on("mouseleave", options.layer, event => {
    this.map.getCanvas().style.cursor = "grab";
  });
}
