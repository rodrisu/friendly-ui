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
exports.MealIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var MealIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M21.47 2a.53.53 0 01.521.435L22 2.53v6.313a4.319 4.319 0 01-3.787 4.286l-.001 8.341a.53.53 0 01-1.051.095l-.009-.095v-8.34a4.32 4.32 0 01-3.783-4.071l-.005-.216V2.53a.53.53 0 011.051-.095l.009.095v6.313a3.258 3.258 0 006.51.192l.006-.192V2.53a.53.53 0 01.53-.53zM6.318 2a4.318 4.318 0 014.318 4.318v2.525a4.319 4.319 0 01-3.787 4.286l-.001 8.341a.53.53 0 01-1.051.095l-.009-.095-.001-8.341A4.319 4.319 0 012 8.843V6.318A4.318 4.318 0 016.318 2zm0 1.06A3.258 3.258 0 003.06 6.318v2.525a3.258 3.258 0 006.516 0V6.318c0-1.8-1.459-3.258-3.258-3.258zM17.682 2a.53.53 0 01.521.435l.009.095v6.313a.53.53 0 01-1.051.096l-.009-.096V2.53a.53.53 0 01.53-.53z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.MealIcon = MealIcon;
exports.MealIcon.defaultProps = status_1.StatusIcon.defaultProps;
