
// Import required libraries 
const ethers = require('ethers');  
const crypto = require('crypto');
const ObjectsToCsv = require('objects-to-csv')


// Initial collection
var i = 0;
var addressAndPriv = [];
var addressOnly = [];

while (i < 1002) {

    // Generate Ethereum address Keypairs
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    var wallet = new ethers.Wallet(privateKey);
    console.log("Create Address " + i + " " + wallet.address);

    // Add to collection;
    addressAndPriv.push({address: wallet.address, privateKey: privateKey});
    addressOnly.push({address: wallet.address});
    i++;
}

// Write address collection to file 
const csv = new ObjectsToCsv(addressAndPriv)
csv.toDisk('./address_and_priv_key.csv', { append: true })

const addrcsv = new ObjectsToCsv(addressOnly)
addrcsv.toDisk('./address_only.csv', { append: true })

