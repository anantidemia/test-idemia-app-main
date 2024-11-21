"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = getDate;
exports.getCurrentUser = getCurrentUser;
const sdk_1 = require("@klave/sdk");
function getDate() {
    //trusted_time is a unix timestamp in nano second, cast it in i64 and convert in ms
    const unixTimeStamp = i64.parse(sdk_1.Context.get("trusted_time")) / 1000000;
    return unixTimeStamp;
}
function getCurrentUser() {
    return sdk_1.Context.get('sender');
}
