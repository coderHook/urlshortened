'use strict'

let express = require('express');
let colors = require('colors');
let app = express();
let assert = require('assert');
let mongoUtil = require('./mongoutil.js');

var find = false;
 
mongoUtil.connect();

app.use (express.static('public'));


app.get('/:prot://:primeurl', (req, res) => {
    
    let prot = req.params.prot;
    let primeurl = req.params.primeurl;
    let myUrl = mongoUtil.myUrl();
    let shortened = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    
    if(prot.match(/http(s)?/i)){   
        
    //We are going to look for the url introduced and in case we have 
     //and in case we dont have it we are going to store it.
        
        myUrl.find({"url": prot.concat('://' + primeurl )}).toArray((err, docs)=>{
            assert.equal(err, null);
            if(docs.length == 0){
                //If its 0 we can add it because its not in the db
                myUrl.insert({"url": prot.concat('://' + primeurl ), "urlShort": 'https://fcc-basejumps-abel1987.c9users.io/' + shortened});
                res.send({"url": prot.concat('://' + primeurl ), "urlShort": 'https://fcc-basejumps-abel1987.c9users.io/' + shortened, "Message": "The url was NOT in the db "});

            }
            else {
                //If it is in the db we show it
                res.send({"url": docs[0].url, "urlShort": docs[0].urlShort, "Message": "The url was Already in the db "});
            }
           
   
     });
    }
    
}); //Here we look for the url and if its not in our db we store it.

app.get('/:shortened', (req, res)=>{
    let shortened = req.params.shortened;
    let myUrl = mongoUtil.myUrl();
    console.log(shortened);
    myUrl.find({"urlShort": "https://fcc-basejumps-abel1987.c9users.io/"+shortened}).toArray(function (err, docs){
        
        assert.equal(err, null);
        
        if(docs.length == 0){ res.send("Invalid ShortUrl, please verify it and try again");}
        else{ res.redirect(docs[0].url);}
    });
    
    
}); //Here if someone introduce a shorturl we look for it, and if we have it, we redirect to the correct url


app.listen(process.env.PORT || 8080, () => console.log("Server running on port 8080 url: https://fcc-basejumps-abel1987.c9users.io" .green));

