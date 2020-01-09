export const prepareLayers = function(suffix) {
  const prefixes = this.options.layersPrefixes;
  const layers = {};

  for (const featureKey in prefixes) {
    const featureValue = prefixes[featureKey];

    layers[featureKey] = {};

    for (const typeKey in featureValue) {
      const layer = featureValue[typeKey] + suffix;

      layers[featureKey][typeKey] = layer;

      if (this.map.getLayer(layer)) this.map.removeLayer(layer);
    }
  }

  return layers;
};
