/*
    Version 1.1
    Module for tenant auth information

    Author: kris.bhanushali@oracle.com

    
*/

var fs = require('fs');
var os = require('os');


/* Begin ---- Tenant auth info */

var tenancyId=  "ocid1.tenancy.oc1..aaaaaaaawrgt5au6hbledhhyas2secm3q2atqiuvihck45rbi3jyc5tfyfga";
var authUserId= "ocid1.user.oc1..aaaaaaaa4tfljmeejbutmrydmms62ooqdl2ay4x52m2xutb35nylnn6vupja";
var keyFingerprint = "d3:5b:36:21:2e:82:4b:b2:cf:de:31:4f:df:f2:ba:ad";
var rootCompartment = "ocid1.tenancy.oc1..aaaaaaaawrgt5au6hbledhhyas2secm3q2atqiuvihck45rbi3jyc5tfyfga";
var privateKeyPath = "/Users/danny/Documents/ATP1/ATP-REST-nodejs/oci_api_key.pem";

// if(privateKeyPath.indexOf("~/") === 0) {
//     privateKeyPath = privateKeyPath.replace("~", os.homedir())
// }
var privateKey = fs.readFileSync(privateKeyPath, 'ascii');

/* End ---- Tenant auth info */

module.exports = {
tenancyId: tenancyId,
authUserId: authUserId,
keyFingerprint: keyFingerprint,
privateKey: privateKey,
myCompartment: rootCompartment

};


