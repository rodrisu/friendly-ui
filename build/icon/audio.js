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
exports.AudioIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var AudioIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M9.033 6.19h11.953V2.994H9.033V6.19zm11.953.994H9.033v11.295A3.519 3.519 0 015.517 22 3.519 3.519 0 012 18.48a3.519 3.519 0 013.517-3.521c.99 0 1.885.41 2.524 1.07V2.496c0-.275.222-.497.496-.497h12.945c.274 0 .496.222.496.497V16.1a3.519 3.519 0 01-3.495 3.913 3.519 3.519 0 01-3.516-3.52 3.519 3.519 0 013.516-3.521c.98 0 1.865.4 2.503 1.047V7.184zm0 9.568v-.591a2.526 2.526 0 00-2.503-2.196 2.526 2.526 0 00-2.524 2.527 2.526 2.526 0 002.524 2.527 2.526 2.526 0 002.506-2.216.503.503 0 01-.003-.051zm-15.47 4.254a2.526 2.526 0 002.525-2.527 2.526 2.526 0 00-2.524-2.527 2.526 2.526 0 00-2.525 2.527 2.526 2.526 0 002.525 2.527z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.AudioIcon = AudioIcon;
exports.AudioIcon.defaultProps = status_1.StatusIcon.defaultProps;
