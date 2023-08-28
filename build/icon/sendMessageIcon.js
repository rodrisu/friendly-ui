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
exports.SendMessageIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var SendMessageIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M3.825 2.83l18.172 8.26a1 1 0 0 1 0 1.82L3.825 21.17a1 1 0 0 1-1.39-1.127l1.402-6.309a1 1 0 0 1 .914-.78L12 12.5a.501.501 0 0 0 0-1l-7.25-.453a1 1 0 0 1-.913-.781l-1.402-6.31a1 1 0 0 1 1.39-1.127z", fill: props.isDisabled ? branding_1.color.gray : props.iconColor })))); };
exports.SendMessageIcon = SendMessageIcon;
exports.SendMessageIcon.defaultProps = icon_1.BaseIconDefaultProps;
