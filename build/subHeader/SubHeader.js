"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubHeader = void 0;
var react_1 = __importDefault(require("react"));
var SubHeader_style_1 = require("./SubHeader.style");
var SubHeader = function (_a) {
    var children = _a.children, _b = _a.as, as = _b === void 0 ? 'h2' : _b, noHorizontalSpacing = _a.noHorizontalSpacing;
    return (react_1.default.createElement(SubHeader_style_1.StyledSubHeader, { as: as, noHorizontalSpacing: noHorizontalSpacing }, children));
};
exports.SubHeader = SubHeader;
