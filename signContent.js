// General imports
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const sha256 = require('js-sha256');

// DID imports and setup
const didResolver = require('did-resolver');
const ethrDidResolver = require('ethr-did-resolver');
const register = ethrDidResolver.default();
const EthrDID = require('ethr-did');
const didJWT = require('did-jwt');

// Create a web3 object
const HttpProvider = require('ethjs-provider-http');
const providerUrl = process.env.PROVIDER_URL;
const provider = new HttpProvider(providerUrl);

// Get a did instance
const address = process.env.ETH_ADDRESS;
const privateHex = process.env.PRIVATE_KEY;
const signer = didJWT.SimpleSigner(privateHex);
const did = new EthrDID({address, provider, signer});

// Get filename from command file args
function getFilename() {
    // Make sure we got a filename on the command line
    if (process.argv.length < 3) {
        console.log('SourceCheck - Sign content script');
        console.log('Usage: node ./signContent.js <filename>');
        process.exit(1);
    }
    return process.argv[2];
}

// Read the file and return its content as a promise
function readContentFile(filename) {
    var promise = new Promise(async function(resolve, reject) {
        fs.readFile(filename, 'utf8', function (err, data) {
            if (err) {
                reject(err);
                return;
            }
            resolve (data);
        });
    });
    return promise;
}

// Execute code
(async () => {
    // Get filename
    const filename = getFilename();
    // console.log('filename', filename);

    // Read content from file
    const content = await readContentFile(filename)
    // console.log('content', content);

    // Hash content
    const contentHash = sha256(content);
    // console.log('contentHash', contentHash);

    // Create payload to sign
    const jwtPayload = { 
        claims: {
            name: process.env.CLAIM_NAME,
            url: process.env.CLAIM_URL,
            author: contentHash,
        } 
    };

    // Sign payload and print to the console
    const signedJwt = await did.signJWT(jwtPayload);
    console.log(signedJwt);
})();
