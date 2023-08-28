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
exports.HourglassIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var HourglassIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 16 21" }),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { d: "M2.75 14.75h10.333M13.75 19.75v-.833c0-3.667-1.417-6.917-3.417-8.334 2-1.416 3.417-4.666 3.417-8.333v-.833m-11.667 0v.833c0 3.667 1.417 6.917 3.417 8.333-2 1.417-3.417 4.667-3.417 8.334v.833M.417 1.417h15m-15 18.333h15", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" })))); };
exports.HourglassIcon = HourglassIcon;
exports.HourglassIcon.defaultProps = icon_1.BaseIconDefaultProps;
