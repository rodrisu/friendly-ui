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
exports.RotateIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var RotateIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 20 20" }),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", stroke: props.iconColor },
        react_1.default.createElement("path", { d: "M19.524 10c0 5.238-4.286 9.524-9.524 9.524C4.762 19.524.476 15.238.476 10 .476 4.762 4.762.476 10 .476c3.714 0 6.952 2.095 8.476 5.238" }),
        react_1.default.createElement("path", { d: "M19.333.19l-.762 5.62-5.714-.762" })))); };
exports.RotateIcon = RotateIcon;
exports.RotateIcon.defaultProps = icon_1.BaseIconDefaultProps;
