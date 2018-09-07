/*
    Version 1.1
    Module for tenant auth information

    Author: kris.bhanushali@oracle.com

    
*/

var fs = require('fs');
var os = require('os');


/* Begin ---- Tenant auth info */

var tenancyId=  "ocid1.tenancy.oc1..aaaaaaaajdkjdvlavavhalsvammojd24mb6utvkymyo4xwxyv3gfa";
var authUserId= "ocid1.user.oc1..aaaaaaaajkasvkjbavavkabvlajsbvapgrnmixnsmiqhaxt34qvna3ybduoq";
var keyFingerprint = "e8:2c:1e:34:8f:26:d5:d3:51:ec:09:f8:b8:c4:8a:3d";
var krisBCompartment = "ocid1.compartment.oc1..aaaaaaaaascugascabscagscaschqfvwjr6nyx63ryre56shk4ek3k7r6iq";
var DBPMCompartment =  "ocid1.compartment.oc1..aaaaaaaay7gk2asvkdsvaldvdlasdvlddvplkz7s7qpeagfjuledsbb27hq";
var privateKeyPath = "~/keys/oci_api_key.pem";

if(privateKeyPath.indexOf("~/") === 0) {
    privateKeyPath = privateKeyPath.replace("~", os.homedir())
}
var privateKey = fs.readFileSync(privateKeyPath, 'ascii');

/* End ---- Tenant auth info */

module.exports = {
tenancyId: tenancyId,
authUserId: authUserId,
keyFingerprint: keyFingerprint,
privateKey: privateKey,
krisBCompartment: krisBCompartment,
DBPMCompartment: DBPMCompartment

};


