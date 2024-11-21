"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = require("@secretarium/connector");
const fs = __importStar(require("fs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const scp = new connector_1.SCP();
            const KLAVE_CONNECTION_KEYPAIR = './config/connectionKeys/key1.secretarium';
            const encryptedKey = fs.readFileSync(KLAVE_CONNECTION_KEYPAIR);
            const myKey = yield connector_1.Key.importKey(JSON.parse(encryptedKey.toString()));
            console.log('\n>> Opening SCP...');
            let result = yield scp.connect('wss://klave-prod.secretarium.org/', myKey);
            const myAppId = 'master.dcbde589.test-idemia-app.Idemia.klave.network';
            console.log('\n>> Write Data...');
            let tx = {
                "dcapp": myAppId,
                "function": "storeValue",
                "args": { key: 'myKey', value: 'aqswdefrgthyjukilo' }
            };
            result = yield scp.newTx(tx.dcapp, tx.function, 'requestId1', tx.args).send();
            console.log('\n>> Load Data...');
            let query = {
                "dcapp": myAppId,
                "function": "fetchValue",
                "args": { key: 'myKey' }
            };
            let resultQuery = yield scp.newQuery(query.dcapp, query.function, 'requestId2', query.args).send();
            console.log(resultQuery);
            console.log('\n>> Finished...');
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
//# sourceMappingURL=index.js.map