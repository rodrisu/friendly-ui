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
exports.HandLuggageIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var HandLuggageIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M12 2c1.831 0 3.259 1.254 3.355 2.91l.005.179v.388c3.15.254 5.64 2.701 5.64 5.66v10.366c0 .275-.242.497-.54.497H3.54c-.298 0-.54-.222-.54-.497V11.136c0-2.958 2.49-5.405 5.64-5.659V5.09C8.64 3.346 10.104 2 12 2zm1.88 11.36h-3.76c-3.367 0-6.04 2.456-6.04 5.551v2.095h15.838v-2.129l-.003-.18c-.118-2.92-2.62-5.222-5.796-5.332l-.24-.004zm.399-6.911H9.72V7.68c0 .275-.241.497-.54.497-.265 0-.486-.176-.532-.407l-.008-.09-.001-1.204c-2.552.25-4.558 2.251-4.558 4.66l-.002 4.285c1.212-1.781 3.333-2.973 5.79-3.05l.251-.004h3.76c2.562 0 4.786 1.212 6.04 3.052v-4.283c0-2.409-2.007-4.41-4.559-4.66V7.68c0 .275-.243.497-.541.497-.265 0-.486-.176-.532-.407l-.009-.09V6.45zM12 2.994c-1.243 0-2.194.824-2.274 1.94l-.005.155-.001.366h4.559v-.366c0-1.195-.98-2.095-2.279-2.095z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.HandLuggageIcon = HandLuggageIcon;
exports.HandLuggageIcon.defaultProps = status_1.StatusIcon.defaultProps;
