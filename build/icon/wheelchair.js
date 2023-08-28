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
exports.WheelchairIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var WheelchairIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M8.654 10.293a.5.5 0 01-.245.664 5 5 0 106.472 6.955.5.5 0 01.875.484 6 6 0 11-7.766-8.347.5.5 0 01.664.244zm4.081-2.018l.983 4.625h3.949c.285 0 .537.143.687.362a.83.83 0 01.145.293l1.376 5.136a1.484 1.484 0 11-2.866.768l-.865-3.226h-4.56l-.05-.001a.834.834 0 01-.868-.659L9.27 9.011a1.77 1.77 0 113.464-.736zm-1.927-.549a.938.938 0 00-.722 1.112L11.48 15.4H16.784l1.03 3.843a.65.65 0 001.256-.336l-1.376-5.136-.027-.037h-4.624L11.92 8.447a.938.938 0 00-1.112-.722zM16.498 10a.5.5 0 110 1H14.5a.5.5 0 110-1h1.998zm-5.394-8a2.187 2.187 0 110 4.375 2.187 2.187 0 010-4.375zm0 .833a1.354 1.354 0 100 2.709 1.354 1.354 0 000-2.709z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.WheelchairIcon = WheelchairIcon;
exports.WheelchairIcon.defaultProps = status_1.StatusIcon.defaultProps;
