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
exports.RedCircleIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var RedCircleIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { size: 24, viewBox: "0 0 24 24" }),
    react_1.default.createElement("circle", { cx: "12", cy: "12", r: "7.5", fill: "#F53F5B", stroke: "white" }))); };
exports.RedCircleIcon = RedCircleIcon;
exports.RedCircleIcon.defaultProps = icon_1.BaseIconDefaultProps;
