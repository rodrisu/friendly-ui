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
exports.OdnoklassnikiIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var OdnoklassnikiIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M3 0h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm7.97 3.283c-2.176 0-3.94 1.774-3.94 3.962s1.764 3.963 3.94 3.963 3.943-1.775 3.943-3.963-1.765-3.962-3.942-3.962zm1.393 11.077c1.578-.323 2.523-1.074 2.573-1.114.462-.373.536-1.05.166-1.515a1.068 1.068 0 0 0-1.507-.166c-.01.008-1.018.785-2.678.786-1.66 0-2.689-.778-2.699-.786a1.068 1.068 0 0 0-1.506.166 1.081 1.081 0 0 0 .165 1.515c.05.04 1.036.811 2.658 1.127l-2.261 2.375c-.411.428-.399 1.11.028 1.523a1.065 1.065 0 0 0 1.515-.028l2.1-2.249 2.313 2.264c.42.42 1.098.42 1.516-.001a1.081 1.081 0 0 0-.001-1.524l-2.382-2.373zM10.97 8.883c-.9 0-1.63-.733-1.63-1.638 0-.904.73-1.638 1.63-1.638s1.63.734 1.63 1.638c0 .905-.73 1.638-1.63 1.638z", fillRule: "evenodd", fill: props.isDisabled ? branding_1.color.gray : props.iconColor }))); };
exports.OdnoklassnikiIcon = OdnoklassnikiIcon;
exports.OdnoklassnikiIcon.defaultProps = icon_1.BaseIconDefaultProps;
