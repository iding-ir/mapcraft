export default function(opt) {
  const options = Object.assign(
    {
      geoJsons: undefined
    },
    opt
  );

  return new Promise((resolve, reject) => {
    let promises = {};
    let geoJsons = {};

    for (let key in options.geoJsons) {
      const value = options.geoJsons[key];

      promises[key] = new Promise((resolve, reject) => {
        fetch(value)
          .then(response => response.json())
          .then(json => {
            this.geoJsons[key] = json;

            geoJsons[key] = json;

            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }

    Promise.all(Object.values(promises))
      .then(() => {
        resolve(geoJsons);
      })
      .catch(error => {
        reject(error);
      });
  });
}
