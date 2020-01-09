export const prepareSource = function(suffix) {
  const prefix = this.options.sourcePrefix;
  const source = prefix + suffix;

  if (this.map.getSource(source)) this.map.removeSource(source);

  return source;
};
