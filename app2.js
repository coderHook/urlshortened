'use strict'

let express = require('express');
let app = express();
let mongoUtil = require('./mongoutil.js');

mongoUtil.connect();

app.use (express.static('public'));

app.get('/:prot://:primeurl', (req, res) => {
    
    var prot = req.params.prot;
    var primeurl = req.params.primeurl;
    
    
    if(prot.match(/http(s)?/i)){ 
        
        var urlShort = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        
        
    }
    
});


app.listen(8080, () => console.log('listening on 8080'));


