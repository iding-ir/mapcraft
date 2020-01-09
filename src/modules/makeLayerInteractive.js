import { extend } from "./extend.js";

export default function(opt) {
  const options = extend(true,
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
