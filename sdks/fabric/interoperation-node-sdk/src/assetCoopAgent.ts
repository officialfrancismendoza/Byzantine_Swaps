import log4js from "log4js";
import crypto from "crypto";
import fabproto6 from "fabric-protos";
import * as helpers from "./helpers";
import assetLocksPb from "@hyperledger-labs/weaver-protos-js/common/asset_locks_pb";
import { Contract, ContractListener } from "fabric-network";
import { Hash, SHA256 } from "./HashFunctions"

//TODO: Create class to instantiate multiple handshakes 
class payload {
    payload: string;
    recipient: string;
    timestamp: number;
    aID;

    constructor() {

    }
}

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

/*
    Imported methods for Asset exchange, lock, and claim serialization,
    originally from AssetManager.ts
*/
// Create an asset exchange agreement structure
function createAssetExchangeAgreementSerialized(assetType, assetID, recipientECert, lockerECert)
{
    const assetExchangeAgreement = new assetLocksPb.AssetExchangeAgreement();
    assetExchangeAgreement.setType(assetType);
    assetExchangeAgreement.setId(assetID);
    assetExchangeAgreement.setRecipient(recipientECert);
    assetExchangeAgreement.setLocker(lockerECert);
    return Buffer.from(assetExchangeAgreement.serializeBinary()).toString('base64');
}

// Create a fungible asset exchange agreement structure
function createFungibleAssetExchangeAgreementSerialized(assetType, numUnits, recipientECert, lockerECert)
{
    const assetExchangeAgreement = new assetLocksPb.FungibleAssetExchangeAgreement();
    assetExchangeAgreement.setType(assetType);
    assetExchangeAgreement.setNumunits(numUnits);
    assetExchangeAgreement.setRecipient(recipientECert);
    assetExchangeAgreement.setLocker(lockerECert);
    return Buffer.from(assetExchangeAgreement.serializeBinary()).toString('base64');
}

// Create an asset lock structure
function createAssetLockInfoSerialized(hash, expiryTimeSecs)
{
    const lockInfoHTLC = new assetLocksPb.AssetLockHTLC();
    lockInfoHTLC.setHashmechanism(hash.HASH_MECHANISM);
    lockInfoHTLC.setHashbase64(Buffer.from(hash.getSerializedHashBase64()));
    lockInfoHTLC.setExpirytimesecs(expiryTimeSecs);
    lockInfoHTLC.setTimespec(assetLocksPb.AssetLockHTLC.TimeSpec.EPOCH)
    const lockInfoHTLCSerialized = lockInfoHTLC.serializeBinary();
    const lockInfo = new assetLocksPb.AssetLock();
    lockInfo.setLockmechanism(assetLocksPb.LockMechanism.HTLC);
    lockInfo.setLockinfo(lockInfoHTLCSerialized);
    return Buffer.from(lockInfo.serializeBinary()).toString('base64');
}

// Create an asset claim structure
function createAssetClaimInfoSerialized(hash)
{
    const claimInfoHTLC = new assetLocksPb.AssetClaimHTLC();
    claimInfoHTLC.setHashmechanism(hash.HASH_MECHANISM);
    claimInfoHTLC.setHashpreimagebase64(Buffer.from(hash.getSerializedPreimageBase64()));
    const claimInfoHTLCSerialized = claimInfoHTLC.serializeBinary();
    const claimInfo = new assetLocksPb.AssetClaim();
    claimInfo.setLockmechanism(assetLocksPb.LockMechanism.HTLC);
    claimInfo.setClaiminfo(claimInfoHTLCSerialized);
    return Buffer.from(claimInfo.serializeBinary()).toString('base64');
}


//TODO: Locks asset (party starts out with secret)

//TODO: Locks asset (counterparty does NOT start with secret)