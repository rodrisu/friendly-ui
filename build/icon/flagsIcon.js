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
exports.FlagsIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var FlagsIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round", d: "M12.74 5.783h6.086L17.087 11l1.74 5.217H7.521" }),
        react_1.default.createElement("path", { stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round", d: "M1.435 2.304h11.304V12.74H1.435M1.435 1.435v19.13" })))); };
exports.FlagsIcon = FlagsIcon;
exports.FlagsIcon.defaultProps = icon_1.BaseIconDefaultProps;
