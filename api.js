express = require('express');
app     = express();

geoHash = require('./lib/geohash');

app.get('/geohash', function(req, res, next) {
  respond = function(data){
    res.json(data);
  };

  geoHash(req.query.lat, req.query.lon, respond);
});

console.log("api listening on 8000");

app.listen(8000);

module.exports = app;
