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