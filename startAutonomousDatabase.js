/*
    Version 1.1

    Author: kris.bhanushali@oracle.com
    
    Start specified ATP Service

    Before running this example, install necessary dependencies by running:
    npm install http-signature jssha
*/
var auth = require('./auth.js');
var regions = require('./regions.js');
var headers = require('./headers.js');
var https = require('https');

//Start autonomous database ATP 


function startATP(autonomousDatabaseId, callback) {

    var options = {
        host: regions.dbPhoenixRegion,
        path: '/20160918/autonomousDatabases/'+ encodeURIComponent(autonomousDatabaseId) + "/actions/start",
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    };

    var request = https.request(options, headers.handleRequest(callback));

    headers.sign(request, {
        privateKey: auth.privateKey,
        keyFingerprint: auth.keyFingerprint,
        tenancyId: auth.tenancyId,
        userId: auth.authUserId
    });

    request.end();
};


// test the above functions
console.log("GET USER:");

headers.getUser(auth.authUserId, function(data) {
    console.log(data);

   var autonomousDatabase = process.argv[2];

    console.log("\nStarting Autonomous Database:");

    // TODO: replace this with a compartment you have access to
    
    startATP(autonomousDatabase,function(data) {
        
        console.log(data);
    });


   
});