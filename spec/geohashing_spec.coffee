geohash = require "./../lib/geohash.js"

describe "GeoHashing Lib E2E test", ->

  When (done) ->
    geohash "37.421542", "-122.085589", (result) =>
      @result = result
      done()

  Then ->
    # { lat : '37.390481682527257200', lon : '-122.414098619598641500' }.
    expect(~~@result.lat).toEqual(37)
    expect(~~@result.lon).toEqual(-122)

xkcdResultBuilder = require "./../lib/xkcd_result_builder.js"

describe "XKCD Result Builder Unit Test", ->
  Given ->
    @lat = '37.421542'
    @lon = '-122.085589'
    @dowOpening = '10458.68'
    @cacheKey   = '10-6-2014'

  When -> @result = xkcdResultBuilder(@lat, @lon, @dowOpening, @cacheKey)
  Then -> @result.lat == "37.580183407357135400"
  And  -> @result.lon == "-122.179116035569581220"



