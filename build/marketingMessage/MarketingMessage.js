"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingMessage = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var MarketingMessage_style_1 = require("./MarketingMessage.style");
var MarketingMessage = function (_a) {
    var children = _a.children, className = _a.className;
    return (react_1.default.createElement(MarketingMessage_style_1.StyledMarketingMessage, { className: (0, classcat_1.default)(className) }, children));
};
exports.MarketingMessage = MarketingMessage;
