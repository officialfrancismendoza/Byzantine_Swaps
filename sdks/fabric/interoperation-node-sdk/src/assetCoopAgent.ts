import log4js from "log4js";
import crypto from "crypto";
import fabproto6 from "fabric-protos";
import * as helpers from "./helpers";
import assetLocksPb from "@hyperledger-labs/weaver-protos-js/common/asset_locks_pb";
import { Contract, ContractListener } from "fabric-network";
import { Hash, SHA256 } from "./HashFunctions"

//Unique libraries and conditions
import * as assetManagerHelpers from "./AssetManager";
import * as hashFunctionsHelpers from "./HashFunctions"

declare var require: any
const { generateKeyPair } = require("crypto");
//---------------------------------------------------------------------------------------------
//TODO: REDO payload as a protobuf structure (L36 in AssetManager.ts)
//TODO: Take inspiration from createFungibleAssetExchangeAgreementSerialized function on how to populate protobuf
class payload {
    payloadSharedSecret: string;
    recipient: string;
    //TODO: Refer to recipientECert (address) and how it's being parsed

    //lock.ts within samples. There is a wallet for each user (recipient/locker).
    //Fetch certificate from recipientCert (L164 in lock.ts). String in base64 data type.

    /*
        Define a "struct" and then a function to instantiate the struct, EXACTLY like
        asset_locks.proto AssetExchangeAgreement. 

        [!!!] TODO: Can define this within asset_locks.proto
        Revisit detailed documentation
    */

    timestamp: number;
    transactionID: string;

    constructor(samplePayload: string, sampleRecipient: string, sampleTimestamp: number) {
        //TODO: New file in CLI, "prepare.ts". Used to generate payloadSharedSecret
        this.payloadSharedSecret = samplePayload;
        this.recipient = sampleRecipient;
        this.timestamp = sampleTimestamp;

        let hashInstance: Hash;
        hashInstance.generateRandomPreimage(50);
        this.transactionID = hashInstance.getSerializedPreimageBase64();
        //TODO: transactionID is a hash. Generated locally, use the same preimage code
    }
}

//TODO: Create class for party/counterparty
class transactionParty {
    name: String;
    initialHTLCSecret: String;
    publicKey: String;
    privateKey: String;

    constructor(inputName: string) {
        this.name = inputName;

        //TODO: Generate secret (S) for party
        let randomInput = (Math.random() + 1).toString(36).substring(2);
        this.initialHTLCSecret = crypto.createHash('sha256').update(randomInput).digest('hex');

        //[!!!] TODO: Update public and private keys with rsaKeyGeneration
        this.publicKey;
        this.privateKey;
    }

    //Async function to generate keypair
    rsaKeyGeneration = async (): Promise<any> => {
        crypto.generateKeyPair('rsa', {
          modulusLength: 1024,
          publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
          },
          privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
          }
        }, (err: Error | null, publicKey: string, privateKey: string) => {
          if (err) throw err
          return { publicKey, privateKey }
        })
      }
}
//---------------------------------------------------------------------------------------------
/* 
    Struct representing payload cosigned by party & counterparty 
    to initiate Byzantine Swap
*/
var handshakePayload: {payload:string, recipient:string, timestamp:number, aID:string} = {
    payload: "",
    recipient: "",
    timestamp: 0,
    aID: ""
};

//TODO: initiateHandshake functions to generate hash, timestamp, aID
function initiateHandshake(recipientAddress) {
    handshakePayload.recipient = recipientAddress;

    return handshakePayload;
}

//---------------------------------------------------------------------------------------------
//TODO: Locks asset (party starts out with secret)

//TODO: Locks asset (counterparty does NOT start with secret)