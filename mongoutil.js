'use strict'

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect(){
        client.connect('  mongodb://testfcc:testfcc@ds023325.mlab.com:23325/myurl', (err, db)=>{
            
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
