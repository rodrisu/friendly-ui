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
exports.SendIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var SendIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 21 22" }),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" },
        react_1.default.createElement("path", { d: "M.5 9.1l19-7.6-3.8 19z" }),
        react_1.default.createElement("path", { d: "M19.5 1.5L5.2 12.9v6.7l3.5-4.1" })))); };
exports.SendIcon = SendIcon;
exports.SendIcon.defaultProps = icon_1.BaseIconDefaultProps;
