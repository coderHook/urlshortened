var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var aggregateURL = function(db, callback) {
    db.collection('restaurants').aggregate(
        
        {"url": prot.concat('://' + primeurl ), "urlShort": 'https://fcc-basejumps-abel1987.c9users.io/' + urlShort}
        
        )};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateURL(db, function() {
      db.close();
  });
});