request = require('request');
xkcdResultBuilder = require('./xkcd_result_builder.js');

var cache = {};

module.exports = function(lat, lon, callback) {
  var today = new Date();
  var cacheKey = [today.getUTCMonth(), today.getUTCDate(), today.getUTCFullYear()].join("-");
  var query = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';

  if(cache[cacheKey]) {
    console.log('cache hit for', cacheKey, cache[cacheKey]);
    callback(xkcdResultBuilder(lat, lon, cache[cacheKey]));
  } else {
    request(query, function(err, response, body) {
      yahooApiData = JSON.parse(body);
      dowOpening = yahooApiData.query.results.quote[0].Open
      cache[cacheKey] = dowOpening;
      console.log('cache miss caching', dowOpening);
      callback(xkcdResultBuilder(lat, lon, dowOpening, cacheKey));
    });
  }
};
