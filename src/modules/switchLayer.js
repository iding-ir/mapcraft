import { extend } from "./extend.js";

export default function(opt) {
  const options = extend(true,
    {
      layer: undefined,
      visibility: undefined
    },
    opt
  );

  this.map.setLayoutProperty(options.layer, "visibility", options.visibility);
}
