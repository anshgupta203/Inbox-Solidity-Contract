const path = require("path");
const fs = require("fs");
const solc = require("solc");


//getting contract path
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");

//Read the contract from the inboxPath
const source = fs.readFileSync(inboxPath, "utf8");

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

var output = JSON.parse(solc.compile(JSON.stringify(input)));

const bytecode = output.contracts['Inbox.sol'].Inbox.evm.bytecode.object
const interface = output.contracts['Inbox.sol'].Inbox.abi

module.exports = {
    bytecode,
    interface
}
