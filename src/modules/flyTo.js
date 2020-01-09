import { extend } from "./extend.js";

export default function(opt) {
  const options = extend(true,
    {
      lnglat: undefined,
      zoom: 10
    },
    opt
  );

  let center = options.lnglat;
  let zoom = options.zoom + (2 * Math.random() - 1);
  let speed = 1 + 0.5 * Math.random();
  let curve = 1 + 0.5 * Math.random();
  let pitch = Math.floor(Math.random() * 50);
  let bearing = Math.floor(Math.random() * 60 - 30);

  this.map.flyTo({
    center,
    zoom,
    speed,
    curve,
    pitch,
    bearing,
    easing: function(t) {
      return t;
    }
  });
}
