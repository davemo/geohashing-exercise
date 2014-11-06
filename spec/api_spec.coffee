api = require "../api.js"
request = require "superagent"

describe "/geohash", ->
  Given -> @agent = request.agent()

  Then (done) ->
    @agent
      .get('http://127.0.0.1:8000/geohash?lat=37.421542&lon=-122.085589')
      .end (err, res) ->
        expect(res.body).toEqual({ lat : '37.148149310130685500', lon : '-122.1106016318308795900' })
        done()


