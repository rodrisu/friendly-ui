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
exports.CarConvertibleIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarConvertibleIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.046 8.21A.495.495 0 0114 8a.5.5 0 01.492-.5h.008c.245 0 .487.112.799.313a7.646 7.646 0 01.71.531L19.18 11h.318c1.488 0 2.5 1.02 2.5 2.5v1.666c0 .46-.448.834-1 .834h-1.55a2.5 2.5 0 01-4.9 0h-5.1a2.5 2.5 0 01-4.9 0H3c-.552 0-1-.373-1-.834v-3.333c0-.46.448-.833 1-.833h8v-1a.5.5 0 011 0v1h3.242l-1.196-2.79zM21 15h-1.55a2.5 2.5 0 00-4.9 0h-5.1a2.5 2.5 0 00-4.9 0H3v-3h16.5a1.5 1.5 0 011.5 1.5V15zm-4.67-4h1.293l-2.016-1.687L16.33 11zM8.5 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", fill: props.iconColor }))); };
exports.CarConvertibleIcon = CarConvertibleIcon;
exports.CarConvertibleIcon.defaultProps = icon_1.BaseIconDefaultProps;
