/*
    Version 1.1

    Author: kris.bhanushali@oracle.com
    
    Create a VCN

    Before running this example, install necessary dependencies by running:
    npm install http-signature jssha
*/



var auth = require('./auth.js');
var regions = require('./regions.js');
var headers = require('./headers.js');
var https = require('https');




// creates an OCI VCN in the specified compartment
function createVCN(compartmentId, displayName, cidrBlock, callback) {
    
    var body = JSON.stringify({
        compartmentId: compartmentId,
        displayName: displayName,
        cidrBlock: cidrBlock
    });

    var options = {
        host: regions.coreServicesPhoenixRegion,
        path: '/20160918/vcns',
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
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

// test the above functions
console.log("GET USER:");

headers.getUser(auth.authUserId, function(data) {
    console.log(data);
        
    console.log("\nCREATING VCN:");

    // TODO: replace this with a compartment you have access to
    var compartmentIdToCreateVcnIn = auth.krisBCompartment;

    createVCN(compartmentIdToCreateVcnIn, "MyAppVCN4", "10.11.0.0/16", function(data) {
        console.log(data);
    });
});