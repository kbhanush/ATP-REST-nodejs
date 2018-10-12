/*
    Version 1.1
    Module for tenant auth information

    Author: kris.bhanushali@oracle.com

    
*/

var fs = require('fs');
var os = require('os');


/* Begin ---- Tenant auth info */


var data = fs.readFileSync("/root/.oci/config", 'utf8');
var lines = data.split("\n");

var authUserId= lines[1].split("=")[1];
var keyFingerprint= lines[2].split("=")[1];
var tenancyId= lines[4].split("=")[1];

//User will enter their compartment here
if(lines.length == 8){
	var rootCompartment = lines[6].split("=")[1];
}
else{
	console.log("Please edit the /root/.oci/config file to have a compartmentid parameter")
}

// if(privateKeyPath.indexOf("~/") === 0) {
//     privateKeyPath = privateKeyPath.replace("~", os.homedir())
// }
var privateKey = fs.readFileSync("/root/.oci/oci_api_key.pem", 'ascii');

/* End ---- Tenant auth info */

module.exports = {
tenancyId: tenancyId,
authUserId: authUserId,
keyFingerprint: keyFingerprint,
privateKey: privateKey,
myCompartment: rootCompartment

};


