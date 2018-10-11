/*
    Version 1.1

    Author: kris.bhanushali@oracle.com
    
    Restore an Autonomous Transaction Processing Service

    Before running this example, install necessary dependencies by running:
    npm install http-signature jssha
*/
var auth = require('./auth.js');
var regions = require('./regions.js');
var headers = require('./headers.js');
var https = require('https');
//Restore autonomous database ATP 

function restoreATP(callback) {

var ocid = process.argv[2];
var timestamp = process.argv[3];


var body = JSON.stringify({
  "timestamp" : timestamp
});
var options = {
        host: regions.dbPhoenixRegion,
        path: '/20160918/autonomousDatabases/' + ocid + '/actions/restore',
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    };
var request = https.request(options, headers.handleRequest(callback));

    headers.sign(request, {
        body: body,
        privateKey: auth.privateKey,
        keyFingerprint: auth.keyFingerprint,
        tenancyId: auth.tenancyId,
        userId: auth.authUserId
    });

    request.end(body);
};

headers.getUser(auth.authUserId, function(data) {
    console.log(data);


    console.log("\nRestoring ATP Service:");

    
    restoreATP(function(data) {
        console.log(data);
    });

});


   
