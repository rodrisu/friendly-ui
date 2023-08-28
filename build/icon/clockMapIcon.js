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
exports.ClockMapIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ClockMapIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", null,
        react_1.default.createElement("path", { d: "M1.5 20.4l7.4-1.8c.3-.1.5.1.6.4.1.3-.1.5-.4.6l-8 2c-.3.1-.6-.2-.6-.5V3c0-.2.2-.4.4-.5l8-2h.3l5.9 2 7.9-2c.3-.1.6.2.6.5v9c0 .3-.2.5-.5.5s-.6-.2-.6-.5V1.6l-7.4 1.8h-.3L9 1.5 1.5 3.4v17zM18.5 16.5H20c.3 0 .5.2.5.5s-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5s.5.2.5.5v1.5z" }),
        react_1.default.createElement("path", { d: "M18 22.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zm0-1c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5-4.5 2-4.5 4.5 2 4.5 4.5 4.5z" })))); };
exports.ClockMapIcon = ClockMapIcon;
exports.ClockMapIcon.defaultProps = icon_1.BaseIconDefaultProps;
