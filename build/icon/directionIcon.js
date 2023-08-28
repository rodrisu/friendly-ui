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
exports.DirectionIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var DirectionIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("path", { d: "M22.9,8.2l-3-4C19.807,4.074,19.657,4,19.5,4H15V1.5C15,1.224,14.775,1,14.5,1h-6C8.224,1,8,1.224,8,1.5V4H2.5 C2.224,4,2,4.224,2,4.5v8C2,12.775,2.224,13,2.5,13H8v10.5C8,23.775,8.224,24,8.5,24h6c0.275,0,0.5-0.225,0.5-0.5V13h4.5 c0.157,0,0.307-0.074,0.4-0.2l3-4C23.033,8.622,23.033,8.378,22.9,8.2z M9,2h5v2H9V2z M14,23H9V13h5V23z M19.25,12H3V5h16.25 l2.625,3.5L19.25,12z" }))); };
exports.DirectionIcon = DirectionIcon;
exports.DirectionIcon.defaultProps = icon_1.BaseIconDefaultProps;
