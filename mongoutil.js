'use strict'

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect(){
        client.connect('mongodb://abel1987-fcc_basejumps-3506899:27017/test', (err, db)=>{
            
            if(err){
                console.log("Error connection to mongo - check mongod connection");
                process.exit(1);
            }
            _db = db;
            console.log("Connected to mongo");
        });
    },
    myUrl(){
        return _db.collection('myUrl');
    }
}