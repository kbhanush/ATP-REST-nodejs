/*
    Version 1.1

    Author: kris.bhanushali@oracle.com
    
    update an Autonomous Transaction Processing Service

    Before running this example, install necessary dependencies by running:
    npm install http-signature jssha
*/
var auth = require('./auth.js');
var regions = require('./regions.js');
var headers = require('./headers.js');
var https = require('https');
//update autonomous database ATP 

var ocid = process.argv[2];

var body = JSON.stringify({
  "cpuCoreCount" : parseInt(process.argv[3]),
  "dataStorageSizeInTBs" : parseInt(process.argv[4])
});

function updateATP(callback) {

var options = {
        host: regions.dbPhoenixRegion,
        path: '/20160918/autonomousDatabases/' + ocid,
        method: 'PUT',
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


    console.log("\nUpdating ATP Service:");

    
    updateATP(function(data) {
        console.log(data);
    });

});


   
