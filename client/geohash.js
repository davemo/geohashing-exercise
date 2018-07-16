Template.hash.events({
  'change #lat': updateHash,
  'change #long': updateHash
});

function updateHash() {
  Meteor.promise("geohash", Number($("#lat").val()), Number($("#long").val()))
    .then(newHash => $("#newHash").val(newHash))

}
