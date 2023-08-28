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
exports.VideoSystemIcon = void 0;
var react_1 = __importDefault(require("react"));
var status_1 = require("../_utils/icon/status");
var VideoSystemIcon = function (props) { return (react_1.default.createElement(status_1.StatusIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M17.184 20.021a.497.497 0 01.089.986l-.09.008H6.817a.497.497 0 01-.089-.986l.09-.008h10.367zM21.504 3c.274 0 .496.22.496.49v13.616c0 .27-.222.49-.497.49H2.497a.493.493 0 01-.497-.49V3.49C2 3.22 2.222 3 2.497 3zm-.498.978H2.993v12.638h18.013V3.978zM9.776 6.894c0-.391.442-.624.772-.408l5.183 3.405a.485.485 0 010 .814l-5.183 3.404a.497.497 0 01-.773-.407zm.992.914v4.98l3.791-2.49-3.791-2.49z", fill: props.iconColor, fillRule: "nonzero" }))); };
exports.VideoSystemIcon = VideoSystemIcon;
exports.VideoSystemIcon.defaultProps = status_1.StatusIcon.defaultProps;
