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
exports.MapIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var MapIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 22 20" }),
    react_1.default.createElement("g", { fill: "none" },
        react_1.default.createElement("path", { d: "M8.391 1.435v15.652M13.61 3.174v15.652M1.435 3.174l6.956-1.74 5.218 1.74 6.956-1.74v15.653l-6.956 1.74-5.218-1.74-6.956 1.74z", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" })))); };
exports.MapIcon = MapIcon;
exports.MapIcon.defaultProps = icon_1.BaseIconDefaultProps;
