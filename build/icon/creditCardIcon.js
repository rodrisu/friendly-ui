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
exports.CreditCardIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CreditCardIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.5 6C3.67157 6 3 6.67157 3 7.5V8H3.39062H20.608H21V7.5C21 6.67157 20.3284 6 19.5 6H4.5ZM21 9H20.608H3.39062H3V11H3.39062H20.608H21V9ZM3 16.5V12H3.39062H20.608H21V16.5C21 17.3284 20.3284 18 19.5 18H4.5C3.67157 18 3 17.3284 3 16.5ZM2 7.5C2 6.11929 3.11929 5 4.5 5H19.5C20.8807 5 22 6.11929 22 7.5V16.5C22 17.8807 20.8807 19 19.5 19H4.5C3.11929 19 2 17.8807 2 16.5V7.5ZM5.5 15H5V16H5.5H11.5H12V15H11.5H5.5ZM16 15H16.5H18.5H19V16H18.5H16.5H16V15Z", fill: props.iconColor }))); };
exports.CreditCardIcon = CreditCardIcon;
exports.CreditCardIcon.defaultProps = icon_1.BaseIconDefaultProps;
