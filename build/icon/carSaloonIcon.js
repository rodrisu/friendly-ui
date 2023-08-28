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
exports.CarSaloonIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CarSaloonIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 11h-3.175L16.567 8.17c-.365-.82-1.23-1.348-2.181-1.348H7.615c-.952 0-1.817.527-2.182 1.348L4.175 11H3a1 1 0 00-1 1v4a1 1 0 001 1h1.55a2.5 2.5 0 004.9 0h5.1a2.5 2.5 0 004.9 0H21a1 1 0 001-1v-4a1 1 0 00-1-1zm-4 3a2.5 2.5 0 00-2.45 2h-5.1a2.5 2.5 0 00-4.9 0H3v-4h18v4h-1.55A2.5 2.5 0 0017 14zm-5.5-3h5.23l-1.077-2.425c-.2-.448-.7-.754-1.267-.754H11.5v3.18zm-1-3.179v3.18H5.27l1.077-2.426c.2-.448.7-.754 1.268-.754H10.5zm-2 8.68a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17 18A1.5 1.5 0 1017 15a1.5 1.5 0 000 3z", fill: props.iconColor }))); };
exports.CarSaloonIcon = CarSaloonIcon;
exports.CarSaloonIcon.defaultProps = icon_1.BaseIconDefaultProps;
