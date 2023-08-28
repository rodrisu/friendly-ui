"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexibilityIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var FlexibilityIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 24 24" }),
    react_1.default.createElement("path", { fill: props.iconColor, fillRule: "evenodd", d: "M20 10a10 10 0 01-10 9.9 10 10 0 01-8.4-4.6L1 20l-1-.1.9-6.6 6.6.9-.1 1-5.2-.7A9 9 0 0010 19a9 9 0 009-8.7V10zM19 0l1 .1-.9 6.6-6.6-.9.1-1 5.2.7A9 9 0 0010 1a9 9 0 00-9 8.7v.3H0A10 10 0 0110 .1a10 10 0 018.4 4.6z" }))); };
exports.FlexibilityIcon = FlexibilityIcon;
exports.FlexibilityIcon.defaultProps = icon_1.BaseIconDefaultProps;
