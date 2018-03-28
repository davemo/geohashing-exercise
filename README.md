# Geohashing Exercise

Implement a geohashing restful service, as described in XKCD:

![XKCD](http://imgs.xkcd.com/comics/geohashing.png)

Given: `GET /geohash?lat=37.421542&lon=-122.085589`

Expected Output from API: `=> 200 application/json {lat: 37.857713, lon: -122.544543}`

# Inputs

- Dow Opening Query:

via Yahoo API

https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22%5ENDX%22%2C%22INDU%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=

via alphavantage.co (get an API key here: https://www.alphavantage.co/)

curl "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDX&apikey=YOUR_API_KEY

# Extra Credit

- Accept lat/lon as POST
- Abstract the geohashing logic into a separate module
- Cache the dow opening API call to occur once per day
- Write unit tests for the module _and/or_ TDD your way there!
- Use pipe instead of a callback to handle the stock call
- Implement a "cacheable" function that takes as input a function to cache, and a cacheKey such that when you compose the functions together ie: `cacheable(myFunc() {..}, "my-cache-key")` you are returned a function that caches results for that key; use this function as your caching strategy
- Implement a promise-based API
- Make the promise-based API also handle callbacks :)
