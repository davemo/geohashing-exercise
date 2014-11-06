crypto  = require('crypto');

module.exports = function(lat, lon, opening, cacheKey) {
  md5 = crypto.createHash('md5');
  md5.update(cacheKey + "-" + opening);
  var hash = md5.digest('hex');
  var left  = parseInt(hash.substring(0,15), 16);
  var right = parseInt(hash.substring(16, 31), 16);

  var newLat = lat.split(".")[0] + "." + left;
  var newLon = lon.split(".")[0] + "." + right;
  return result = {lat: newLat, lon: newLon};
};
