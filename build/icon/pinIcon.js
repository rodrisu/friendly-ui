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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var PinIcon = function (_a) {
    var bgColor = _a.bgColor, strokeColor = _a.strokeColor, isDisabled = _a.isDisabled, props = __rest(_a, ["bgColor", "strokeColor", "isDisabled"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
        react_1.default.createElement("g", { stroke: strokeColor, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10" },
            react_1.default.createElement("path", { fill: bgColor, d: "M20 9c0 4.9-8 13-8 13S4 13.9 4 9c0-5.1 4.1-8 8-8s8 2.9 8 8z" }),
            react_1.default.createElement("circle", { fill: isDisabled ? 'none' : strokeColor, cx: "12", cy: "9", r: "3" }))));
};
exports.PinIcon = PinIcon;
exports.PinIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { bgColor: 'none', strokeColor: branding_1.color.lightMidnightGreen });
