# Geohashing Exercise

Implement a geohashing restful service, as described in XKCD:

![XKCD](http://imgs.xkcd.com/comics/geohashing.png)

Given: `GET /geohash?lat=37.421542&lon=-122.085589`

Expected Output from API: `=> 200 application/json {lat: 37.857713, lon: -122.544543}`

# Inputs

- Dow Opening Query:

`curl "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NDX&apikey=YOUR_API_KEY"`

- (if you get an API error you may need to get an API key here: https://www.alphavantage.co/)

# Extra Credit

- Accept lat/lon as POST
- Abstract the geohashing logic into a separate module
- Cache the dow opening API call to occur once per day
- Write unit tests for the module _and/or_ TDD your way there!
- Use pipe instead of a callback to handle the stock call
- Implement a "cacheable" function that takes as input a function to cache, and a cacheKey such that when you compose the functions together ie: `cacheable(myFunc() {..}, "my-cache-key")` you are returned a function that caches results for that key; use this function as your caching strategy
- Implement a promise-based API
- Make the promise-based API also handle callbacks :)
