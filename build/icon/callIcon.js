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
exports.CallIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var CallIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("path", { d: "M16 12.27L13.27 15 6 7.73 8.73 5 4.18.45 1.45 3.18c0 9.04 7.33 16.37 16.37 16.37l2.73-2.73L16 12.27z", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" })))); };
exports.CallIcon = CallIcon;
exports.CallIcon.defaultProps = icon_1.BaseIconDefaultProps;
