var mongodb = require('mongodb');
var express = require('express');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var app = express();

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://abel1987-fcc_basejumps-3506899:27017/test';

//Insert a collection on test
var insertDocument = function(db, callback) {
   db.collection('test2').insertOne( {
      "url": "test2222222", "url short": "another test22222222"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the test2 collection.");
    callback();
  });
};



MongoClient.connect(url, function(err, db){
    if(err) {console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('connection established to', url);
        insertDocument(db, function(){
            
            db.close();
        });
            

    }
    
});

app.listen(8080, function(){
    console.log('Server running');
});
