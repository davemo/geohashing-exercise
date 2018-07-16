const dowOpenUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='

Meteor.methods({
  geohash(lat, long) {
    console.log(arguments);
    let seedHash = getSeedHash();

    //get whole-number parts of arguments
    let [newLat, newLong] = [lat, long].map(Math.floor)
    //get (decimal) fractional parts from seedHash0..15, seedHash16..31
    let [newLatFraction, newLongFraction] = [seedHash.substring(0,16), seedHash.substring(16, 32)].map(hex => parseInt(hex, 16))
    return [newLat + "." + newLatFraction, newLong + "." + newLongFraction]
  }
})

function getSeedHash() {
  let openingQuoteDoc = HTTP.get(dowOpenUrl).data;
  let openingQuote = openingQuoteDoc.query.results.quote[0].Open;
  let crypto = Meteor.npmRequire('crypto');
  let hash = crypto.createHash('md5');
  return hash.update(moment().format("YYYY-MM-DD") + "-" + openingQuote).digest('hex');
}
