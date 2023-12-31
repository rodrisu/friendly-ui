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
exports.SnackIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var SnackIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M9.974 6.055c4.397 0 7.974 3.576 7.974 7.972 0 4.396-3.577 7.973-7.974 7.973S2 18.423 2 14.027c0-.223.015-.443.033-.661a.443.443 0 01.562-.391c1.592.45 3.148-.651 3.357-2.198a.443.443 0 01.38-.38 2.635 2.635 0 001.523-.755c.502-.502.778-1.17.778-1.878a2.63 2.63 0 00-.198-1.004.441.441 0 01.344-.606 7.878 7.878 0 011.195-.1zm0 .886c-.175 0-.355.008-.546.025.06.26.091.527.091.797 0 .946-.368 1.836-1.037 2.505a3.506 3.506 0 01-1.71.95c-.399 1.723-2.07 2.946-3.885 2.719l-.001.09c0 3.908 3.18 7.087 7.088 7.087s7.088-3.18 7.088-7.087c0-3.907-3.18-7.086-7.088-7.086zm.886 11.073a.886.886 0 110 1.772.886.886 0 010-1.772zm-4.43-2.547a.886.886 0 110 1.772.886.886 0 010-1.772zm4.43-2.436a.886.886 0 110 1.772.886.886 0 010-1.772zm3.987 0a.886.886 0 110 1.772.886.886 0 010-1.772zM16.301 3A5.698 5.698 0 0122 8.698c0 1.423-.52 2.764-1.445 3.798a.498.498 0 01-.743-.664 4.68 4.68 0 001.191-3.134 4.701 4.701 0 00-7.836-3.505.498.498 0 01-.665-.743 5.677 5.677 0 013.8-1.45zm-4.684 6.143a.886.886 0 110 1.772.886.886 0 010-1.772zm6.22-3.088a.886.886 0 110 1.772.886.886 0 010-1.772z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.SnackIcon = SnackIcon;
exports.SnackIcon.defaultProps = status_1.StatusIcon.defaultProps;
