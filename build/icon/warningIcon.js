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
exports.WarningIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var WarningIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { fill: props.iconColor, d: "M12.3 2.1a1.5 1.5 0 0 0-2.6 0L1.2 16.2a1.5 1.5 0 0 0 1.3 2.3h17a1.5 1.5 0 0 0 1.3-2.3l-8.5-14zm.8-.5l8.5 14.1a2.5 2.5 0 0 1-2.1 3.8h-17a2.5 2.5 0 0 1-2.1-3.8L8.9 1.6a2.5 2.5 0 0 1 4.2 0zm-2.7 10.5l-.3-4.8a.9.9 0 1 1 1.8 0l-.3 4.8a.6.6 0 0 1-1.2 0zm1.5 2.5a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0z" })))); };
exports.WarningIcon = WarningIcon;
exports.WarningIcon.defaultProps = icon_1.BaseIconDefaultProps;
