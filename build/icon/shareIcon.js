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
exports.ShareIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ShareIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 22 22" }),
    react_1.default.createElement("g", { fill: "none", stroke: props.iconColor, strokeLinecap: "round", strokeLinejoin: "round" },
        react_1.default.createElement("path", { d: "M9.043 10.435l5.914-2.957m-5.914 6l5.914 2.957" }),
        react_1.default.createElement("circle", { cx: "5.913", cy: "12", r: "3.478" }),
        react_1.default.createElement("circle", { cx: "18.087", cy: "5.913", r: "3.478" }),
        react_1.default.createElement("circle", { cx: "18.087", cy: "18.087", r: "3.478" })))); };
exports.ShareIcon = ShareIcon;
exports.ShareIcon.defaultProps = icon_1.BaseIconDefaultProps;
