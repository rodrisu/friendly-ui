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
exports.ProfileIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ProfileIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", stroke: props.iconColor, strokeWidth: "1" },
        react_1.default.createElement("circle", { cx: "12", cy: "12", r: "10" }),
        react_1.default.createElement("path", { d: "M6.67 20.5A5 5 0 0 1 11 18h2a5 5 0 0 1 4.34 2.52" }),
        react_1.default.createElement("rect", { width: "7", height: "9", x: "8.5", y: "6.5", rx: "3.5" })))); };
exports.ProfileIcon = ProfileIcon;
exports.ProfileIcon.defaultProps = icon_1.BaseIconDefaultProps;
