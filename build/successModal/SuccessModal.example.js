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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWithButton = void 0;
var react_1 = __importStar(require("react"));
var baseSection_1 = require("../layout/section/baseSection");
var index_1 = require("./index");
var ModalWithButton = function (_a) {
    var illustration = _a.illustration;
    var _b = (0, react_1.useState)(false), isOpened = _b[0], setOpened = _b[1];
    return (react_1.default.createElement(baseSection_1.BaseSection, null,
        react_1.default.createElement("button", { type: "button", onClick: function () {
                setOpened(true);
            } }, "Open SuccessModal"),
        react_1.default.createElement(index_1.SuccessModal, { isOpen: isOpened, onClose: function () {
                setOpened(false);
            }, illustration: illustration, confirmLabel: "Got it!", closeOnEsc: true }, "Booking approved! Buddy will travel with you")));
};
exports.ModalWithButton = ModalWithButton;
