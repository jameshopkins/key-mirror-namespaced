'use strict';

const mirrorKey = (path, obj) => {
  let res = {};
  for (const key in obj) {
    const newPath = path.concat([key]);
    res[key] = obj[key] ? mirrorKey(newPath, obj[key]) : newPath.join('.');
  }
  return res;
};

module.exports = mirrorKey.bind(null, []);
