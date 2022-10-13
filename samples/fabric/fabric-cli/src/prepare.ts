import { Hash, SHA256 } from "sdks/fabric/interoperation-node-sdk/src/HashFunctions";

function generateHandshakeSharedSecret() 
{
    let tempSecret: Hash;
    tempSecret.generateRandomPreimage(50);
    const returnedSecret = tempSecret.getSerializedPreimageBase64();
}

export {
    generateHandshakeSharedSecret
}