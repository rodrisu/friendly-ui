"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheVoice = void 0;
var react_1 = __importDefault(require("react"));
var TheVoice_style_1 = require("./TheVoice.style");
var TheVoice = function (_a) {
    var id = _a.id, className = _a.className, children = _a.children, isInverted = _a.isInverted, _b = _a.as, as = _b === void 0 ? 'h1' : _b;
    return (react_1.default.createElement(TheVoice_style_1.StyledTheVoice, { id: id, as: as, className: className, isInverted: isInverted }, children));
};
exports.TheVoice = TheVoice;
