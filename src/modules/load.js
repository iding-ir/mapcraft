export default function() {
  return new Promise((resolve, reject) => {
    this.buildMap().then(() => {
      this.loadIcons({
        icons: this.options.icons
      })
        .then(() => {
          this.fetchGeoJson({
            geoJsons: this.options.geoJsons
          })
            .then(geoJsons => {
              this.renderGeoJson({
                geoJsons: geoJsons
              })
                .then(() => {
                  resolve();
                })
                .catch(error => {
                  reject(error);
                });
            })
            .catch(error => {
              reject(error);
            });
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}
