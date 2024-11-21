"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionListOutput = exports.SecureElementTransaction = exports.Transac = exports.SecureElementOutputList = exports.SecureElementOutput = exports.SecureElement = exports.SecureElementKey = exports.StoreOutput = exports.StoreInput = exports.FetchOutput = exports.FetchInput = exports.ErrorMessage = void 0;
let ErrorMessage = class ErrorMessage {
};
exports.ErrorMessage = ErrorMessage;
exports.ErrorMessage = ErrorMessage = __decorate([
    serializable
], ErrorMessage);
let FetchInput = class FetchInput {
};
exports.FetchInput = FetchInput;
exports.FetchInput = FetchInput = __decorate([
    serializable
], FetchInput);
let FetchOutput = class FetchOutput {
};
exports.FetchOutput = FetchOutput;
exports.FetchOutput = FetchOutput = __decorate([
    serializable
], FetchOutput);
let StoreInput = class StoreInput {
};
exports.StoreInput = StoreInput;
exports.StoreInput = StoreInput = __decorate([
    serializable
], StoreInput);
let StoreOutput = class StoreOutput {
};
exports.StoreOutput = StoreOutput;
exports.StoreOutput = StoreOutput = __decorate([
    serializable
], StoreOutput);
let SecureElementKey = class SecureElementKey {
};
exports.SecureElementKey = SecureElementKey;
exports.SecureElementKey = SecureElementKey = __decorate([
    serializable
], SecureElementKey);
let SecureElement = class SecureElement {
};
exports.SecureElement = SecureElement;
exports.SecureElement = SecureElement = __decorate([
    serializable
], SecureElement);
let SecureElementOutput = class SecureElementOutput {
};
exports.SecureElementOutput = SecureElementOutput;
exports.SecureElementOutput = SecureElementOutput = __decorate([
    serializable
], SecureElementOutput);
let SecureElementOutputList = class SecureElementOutputList {
};
exports.SecureElementOutputList = SecureElementOutputList;
exports.SecureElementOutputList = SecureElementOutputList = __decorate([
    serializable
], SecureElementOutputList);
let Transac = class Transac {
    constructor() {
        this.amount = 0;
    }
};
exports.Transac = Transac;
exports.Transac = Transac = __decorate([
    serializable
], Transac);
let SecureElementTransaction = class SecureElementTransaction {
};
exports.SecureElementTransaction = SecureElementTransaction;
exports.SecureElementTransaction = SecureElementTransaction = __decorate([
    serializable
], SecureElementTransaction);
let TransactionListOutput = class TransactionListOutput {
};
exports.TransactionListOutput = TransactionListOutput;
exports.TransactionListOutput = TransactionListOutput = __decorate([
    serializable
], TransactionListOutput);
//# sourceMappingURL=types.js.map