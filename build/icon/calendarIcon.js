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
exports.CalendarIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CalendarIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M18.087 4.174h3.478v17.391H2.435V4.174h3.478m1.74 0h8.695", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M5.913 2.435h1.74v3.478h-1.74V2.435zm10.435 0h1.739v3.478h-1.74V2.435zM2.435 9.39h19.13-19.13zM5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M5.913 12.87h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm-5.217 4.347h1.74v.87h-1.74v-.87zm5.217 0h1.74v.87h-1.74v-.87zm5.218-4.347h1.739v.87h-1.74v-.87z", fill: props.iconColor, fillRule: "nonzero" })))); };
exports.CalendarIcon = CalendarIcon;
exports.CalendarIcon.defaultProps = icon_1.BaseIconDefaultProps;
