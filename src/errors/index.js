"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoferaiApiTimeoutError = exports.SoferaiApiError = void 0;
var SoferaiApiError_1 = require("./SoferaiApiError");
Object.defineProperty(exports, "SoferaiApiError", {
    enumerable: true,
    get: function () {
        return SoferaiApiError_1.SoferaiApiError;
    },
});
var SoferaiApiTimeoutError_1 = require("./SoferaiApiTimeoutError");
Object.defineProperty(exports, "SoferaiApiTimeoutError", {
    enumerable: true,
    get: function () {
        return SoferaiApiTimeoutError_1.SoferaiApiTimeoutError;
    },
});
