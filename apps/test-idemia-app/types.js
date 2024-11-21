"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionListOutput = exports.SecureElementTransaction = exports.Transac = exports.SecureElementOutputList = exports.SecureElementOutput = exports.SecureElement = exports.SecureElementKey = exports.StoreOutput = exports.StoreInput = exports.FetchOutput = exports.FetchInput = exports.ErrorMessage = void 0;
let ErrorMessage = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ErrorMessage = _classThis = class {
    };
    __setFunctionName(_classThis, "ErrorMessage");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ErrorMessage = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ErrorMessage = _classThis;
})();
exports.ErrorMessage = ErrorMessage;
let FetchInput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var FetchInput = _classThis = class {
    };
    __setFunctionName(_classThis, "FetchInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FetchInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FetchInput = _classThis;
})();
exports.FetchInput = FetchInput;
let FetchOutput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var FetchOutput = _classThis = class {
    };
    __setFunctionName(_classThis, "FetchOutput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FetchOutput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FetchOutput = _classThis;
})();
exports.FetchOutput = FetchOutput;
let StoreInput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var StoreInput = _classThis = class {
    };
    __setFunctionName(_classThis, "StoreInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreInput = _classThis;
})();
exports.StoreInput = StoreInput;
let StoreOutput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var StoreOutput = _classThis = class {
    };
    __setFunctionName(_classThis, "StoreOutput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StoreOutput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StoreOutput = _classThis;
})();
exports.StoreOutput = StoreOutput;
let SecureElementKey = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SecureElementKey = _classThis = class {
    };
    __setFunctionName(_classThis, "SecureElementKey");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SecureElementKey = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SecureElementKey = _classThis;
})();
exports.SecureElementKey = SecureElementKey;
let SecureElement = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SecureElement = _classThis = class {
    };
    __setFunctionName(_classThis, "SecureElement");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SecureElement = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SecureElement = _classThis;
})();
exports.SecureElement = SecureElement;
let SecureElementOutput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SecureElementOutput = _classThis = class {
    };
    __setFunctionName(_classThis, "SecureElementOutput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SecureElementOutput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SecureElementOutput = _classThis;
})();
exports.SecureElementOutput = SecureElementOutput;
let SecureElementOutputList = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SecureElementOutputList = _classThis = class {
    };
    __setFunctionName(_classThis, "SecureElementOutputList");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SecureElementOutputList = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SecureElementOutputList = _classThis;
})();
exports.SecureElementOutputList = SecureElementOutputList;
let Transac = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Transac = _classThis = class {
        constructor() {
            this.amount = 0;
        }
    };
    __setFunctionName(_classThis, "Transac");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Transac = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Transac = _classThis;
})();
exports.Transac = Transac;
let SecureElementTransaction = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SecureElementTransaction = _classThis = class {
    };
    __setFunctionName(_classThis, "SecureElementTransaction");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SecureElementTransaction = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SecureElementTransaction = _classThis;
})();
exports.SecureElementTransaction = SecureElementTransaction;
let TransactionListOutput = (() => {
    let _classDecorators = [serializable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var TransactionListOutput = _classThis = class {
    };
    __setFunctionName(_classThis, "TransactionListOutput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionListOutput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionListOutput = _classThis;
})();
exports.TransactionListOutput = TransactionListOutput;
