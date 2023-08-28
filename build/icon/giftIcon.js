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
exports.GiftIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var GiftIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M18.83 8.4v12.17H3.17V8.39h15.66zM1.43 4.9h19.14V8.4H1.43V4.91z" }),
        react_1.default.createElement("path", { d: "M5.78 3.17c0-.96.78-1.74 1.74-1.74C10.1 1.43 11 4.91 11 4.91H7.52s-1.74-.78-1.74-1.74zm10.44 0c0-.96-.78-1.74-1.74-1.74C11.9 1.43 11 4.91 11 4.91h3.48s1.74-.78 1.74-1.74zm-3.48 1.74v15.66H9.26V4.9h3.48z" })))); };
exports.GiftIcon = GiftIcon;
exports.GiftIcon.defaultProps = icon_1.BaseIconDefaultProps;
