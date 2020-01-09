import { extend } from "./extend.js";

export const loadIcons = function(opt) {
  const options = extend(
    true,
    {
      icons: undefined
    },
    opt
  );

  return new Promise((resolve, reject) => {
    let promises = {};

    for (let key in options.icons) {
      const value = options.icons[key];

      promises[key] = new Promise((resolve, reject) => {
        this.map.loadImage(value, (error, image) => {
          if (error) {
            reject(error);
          } else {
            this.map.addImage(key, image);

            resolve();
          }
        });
      });
    }

    Promise.all(Object.values(promises))
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};
