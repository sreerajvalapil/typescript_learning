"use strict";
// Unknown data type ;
let unknownA;
let anyA;
let b = 100;
let c = "sdsdsd";
//b = unknownA ;
b = anyA;
function computeValue(messageValue, code) {
    throw { messege: messageValue, errorCode: code };
}
