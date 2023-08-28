"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomSection = void 0;
var react_1 = __importDefault(require("react"));
var BottomSection_style_1 = require("./BottomSection.style");
var BottomSection = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(BottomSection_style_1.StyledBottomSection.Container, null,
        react_1.default.createElement(BottomSection_style_1.StyledBottomSection.Content, null, children)));
};
exports.BottomSection = BottomSection;
