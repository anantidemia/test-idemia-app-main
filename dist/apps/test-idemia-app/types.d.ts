export declare class ErrorMessage {
    success: boolean;
    message: string;
}
export declare class FetchInput {
    key: string;
}
export declare class FetchOutput {
    success: boolean;
    value: string;
}
export declare class StoreInput {
    key: string;
    value: string;
}
export declare class StoreOutput {
    success: boolean;
}
export declare class SecureElementKey {
    key: string;
}
export declare class SecureElement {
    key: string;
    field1: string;
    field2: string;
    creationDate: i64;
    status: string;
}
export declare class SecureElementOutput {
    success: boolean;
    secureElement: string;
}
export declare class SecureElementOutputList {
    success: boolean;
    seList: SecureElement[];
}
export declare class Transac {
    origin: string;
    payer: string;
    payee: string;
    amount: number;
    storeDate: i64;
}
export declare class SecureElementTransaction {
    secureElement: string;
    transactionList: Transac[];
}
export declare class TransactionListOutput {
    success: boolean;
    transactionList: Transac[];
}
