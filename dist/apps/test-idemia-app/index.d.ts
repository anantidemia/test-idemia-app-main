import { FetchInput, StoreInput, SecureElementKey, SecureElement, Transac } from './types';
export declare function fetchValue(input: FetchInput): void;
export declare function storeValue(input: StoreInput): void;
export declare function getSecureElement(input: SecureElementKey): void;
export declare function createSecureElement(input: SecureElement): void;
export declare function listSecureElement(): void;
export declare function storeTransaction(input: Transac): void;
export declare function listTransactionsBySecureElement(input: SecureElementKey): void;
