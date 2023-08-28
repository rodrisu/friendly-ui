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
exports.BanIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var BanIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 22 22" }),
    react_1.default.createElement("path", { d: "M11 1C5.455 1 1 5.455 1 11s4.455 10 10 10 10-4.455 10-10S16.545 1 11 1zm0 3.636c1.09 0 2.09.273 3 .728L5.364 14a6.644 6.644 0 0 1-.728-3A6.324 6.324 0 0 1 11 4.636zm0 12.728c-1.09 0-2.09-.273-3-.728L16.636 8c.455.91.728 1.91.728 3A6.324 6.324 0 0 1 11 17.364z", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }))); };
exports.BanIcon = BanIcon;
exports.BanIcon.defaultProps = icon_1.BaseIconDefaultProps;
