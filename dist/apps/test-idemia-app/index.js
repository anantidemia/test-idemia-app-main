"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchValue = fetchValue;
exports.storeValue = storeValue;
exports.getSecureElement = getSecureElement;
exports.createSecureElement = createSecureElement;
exports.listSecureElement = listSecureElement;
exports.storeTransaction = storeTransaction;
exports.listTransactionsBySecureElement = listTransactionsBySecureElement;
const sdk_1 = require("@klave/sdk");
const utils_1 = require("./utils");
const myTableName = "my_storage_table";
const secureElementTable = "se_table";
const secureElementTransactionTable = "transaction_table";
function fetchValue(input) {
    let value = sdk_1.Ledger.getTable(myTableName).get(input.key);
    if (value.length === 0) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: `key '${input.key}' not found in table`
        });
    }
    else {
        sdk_1.Notifier.sendJson({
            success: true,
            value
        });
    }
}
function storeValue(input) {
    if (input.key && input.value) {
        sdk_1.Ledger.getTable(myTableName).set(input.key, input.value);
        sdk_1.Notifier.sendJson({
            success: true
        });
        return;
    }
    sdk_1.Notifier.sendJson({
        success: false,
        message: `Missing value arguments`
    });
}
function getSecureElement(input) {
    let secureElement = sdk_1.Ledger.getTable(secureElementTable).get(input.key);
    if (secureElement.length === 0) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: `key '${input.key}' not found in secure element table`
        });
        return;
    }
    else {
        sdk_1.Notifier.sendJson({
            success: true,
            secureElement
        });
    }
}
function createSecureElement(input) {
    const seTable = sdk_1.Ledger.getTable(secureElementTable);
    const seObj = {
        key: input.key,
        field1: input.field1,
        field2: input.field2,
        creationDate: (0, utils_1.getDate)(),
        status: input.status
    };
    const secureElement = seTable.get(input.key);
    if (secureElement.length > 0) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: "secure element already exists"
        });
        return;
    }
    const keysList = seTable.get('keysList');
    if (keysList.length > 0) {
        const existingKeys = sdk_1.JSON.parse(keysList);
        if (!existingKeys.includes(input.key)) {
            existingKeys.push(input.key);
            seTable.set('keysList', sdk_1.JSON.stringify(existingKeys));
        }
    }
    else {
        seTable.set('keysList', sdk_1.JSON.stringify([input.key]));
    }
    seTable.set(input.key, sdk_1.JSON.stringify(seObj));
    sdk_1.Notifier.sendJson({
        success: true,
        value: "Secure element with key " + input.key + " has been stored."
    });
}
function listSecureElement() {
    sdk_1.Subscription.setReplayStart();
    const seTable = sdk_1.Ledger.getTable(secureElementTable);
    const keysList = seTable.get('keysList');
    const existingKeys = sdk_1.JSON.parse(keysList);
    const existingSecureElement = [];
    for (let i = 0; i < existingKeys.length; i++) {
        const key = existingKeys[i];
        const se = sdk_1.JSON.parse(seTable.get(key));
        existingSecureElement.push(se);
    }
    sdk_1.Notifier.sendJson({
        success: true,
        seList: existingSecureElement
    });
    return;
}
function storeTransaction(input) {
    if (!input.origin || !input.payee || !input.payer || input.amount <= 0) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: "Wrong arguments in the input"
        });
        return;
    }
    const originSecureElement = input.origin;
    const payeeSecureElement = input.payee;
    const payerSecureElement = input.payer;
    if (!sdk_1.Ledger.getTable(secureElementTable).get(originSecureElement)) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: "Origin Secure Element doesn't exist - transaction won't be stored"
        });
        return;
    }
    if (!sdk_1.Ledger.getTable(secureElementTable).get(payeeSecureElement)) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: "Payee Secure Element doesn't exist - transaction won't be stored"
        });
        return;
    }
    if (!sdk_1.Ledger.getTable(secureElementTable).get(payerSecureElement)) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: "Payer Secure Element doesn't exist - transaction won't be stored"
        });
        return;
    }
    input.storeDate = (0, utils_1.getDate)();
    const seTransactionTable = sdk_1.Ledger.getTable(secureElementTransactionTable);
    let transactionList = seTransactionTable.get(originSecureElement);
    if (transactionList.length > 0) {
        let existingTransactions = sdk_1.JSON.parse(transactionList);
        existingTransactions.push(input);
        seTransactionTable.set(originSecureElement, sdk_1.JSON.stringify(existingTransactions));
    }
    else {
        seTransactionTable.set(originSecureElement, sdk_1.JSON.stringify([input]));
    }
    sdk_1.Notifier.sendJson({
        success: true
    });
}
function listTransactionsBySecureElement(input) {
    const secureElement = sdk_1.Ledger.getTable(secureElementTable).get(input.key);
    if (secureElement.length === 0) {
        sdk_1.Notifier.sendJson({
            success: false,
            message: `key '${input.key}' not found in secure element table`
        });
        return;
    }
    const seTransactionTable = sdk_1.Ledger.getTable(secureElementTransactionTable);
    let transactionList = seTransactionTable.get(input.key);
    let listTransactionsOutput = [];
    if (transactionList.length > 0) {
        listTransactionsOutput = sdk_1.JSON.parse(transactionList);
    }
    sdk_1.Notifier.sendJson({
        success: true,
        transactionList: listTransactionsOutput
    });
}
//# sourceMappingURL=index.js.map