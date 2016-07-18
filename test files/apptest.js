'user strict'
var express = require('express'),
    colors = require('colors');
    
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://abel1987-fcc_basejumps-3506899:27017/test';

app.use(express.static('public'));

app.get('/:prot://:primeurl', function(req, res){
    
    var prot = req.params.prot;
    var primeurl = req.params.primeurl;
    
    //Here we aggregate the URL in a json format with both cases.
        
        var insertURL = function(db, callback){
            
            db.collection('myUrl').insertOne(
                {"url": prot.concat('://' + primeurl ), "urlShort": 'https://fcc-basejumps-abel1987.c9users.io/' + urlShort} 
            );
            
            db.close();
        }
        
        if(prot.match(/http(s)?/i)){ 
        
        var urlShort = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        
        
        //Let's connect to the mongoDb and addd the parameter to the collection.
        
         MongoClient.connect(url, function(err, db) {
           if(err){
               console.log('Unable to connect to the mongoDB server. Error:', err);
           } else  {
               console.log('Connection established to, ' + url);
               insertURL(db);
           }
         });

        
        res.status(200).send({"url": prot.concat('://' + primeurl ), "urlShort": 'https://fcc-basejumps-abel1987.c9users.io/' + urlShort}); 
        
    } else { res.status(400).json("Invalid URL, check the protocol and if there is a valid webpage");}
    
});



app.listen(8080, function(){
    console.log("Server running on port 8080 url: https://fcc-basejumps-abel1987.c9users.io" .green);
    
});
