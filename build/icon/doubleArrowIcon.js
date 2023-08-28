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
exports.DoubleArrowIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var DoubleArrowIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: props.iconColor, fillRule: "nonzero" },
        react_1.default.createElement("path", { d: "M7.786 16.762a.5.5 0 0 1-1 0V2.476a.5.5 0 1 1 1 0v14.286z" }),
        react_1.default.createElement("path", { d: "M3.83 6.64a.5.5 0 0 1-.707-.708l3.81-3.81a.5.5 0 0 1 .706 0l3.81 3.81a.5.5 0 0 1-.707.707L7.286 3.183 3.83 6.64zm12.48-.354a.5.5 0 1 1 1 0v15.238a.5.5 0 1 1-1 0V6.286z" }),
        react_1.default.createElement("path", { d: "M20.265 17.36a.5.5 0 0 1 .708.708l-3.81 3.81a.5.5 0 0 1-.707 0l-3.81-3.81a.5.5 0 0 1 .708-.707l3.456 3.456 3.455-3.456z" })))); };
exports.DoubleArrowIcon = DoubleArrowIcon;
exports.DoubleArrowIcon.defaultProps = icon_1.BaseIconDefaultProps;
