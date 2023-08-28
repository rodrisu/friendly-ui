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
exports.LightningIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var LightningIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fill: "none", stroke: props.iconColor, strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10", d: "M15.5 1.5h-7l-3 11h6l-2 8 10-12h-6z" }))); };
exports.LightningIcon = LightningIcon;
exports.LightningIcon.defaultProps = icon_1.BaseIconDefaultProps;
