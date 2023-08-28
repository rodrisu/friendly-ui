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
exports.SearchIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var SearchIcon = function (_a) {
    var strokeWidth = _a.strokeWidth, props = __rest(_a, ["strokeWidth"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
        react_1.default.createElement("g", { fill: "none", stroke: props.iconColor, strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10" },
            react_1.default.createElement("line", { x1: "22", y1: "22", x2: "16.4", y2: "16.4" }),
            react_1.default.createElement("circle", { cx: "10", cy: "10", r: "9" }))));
};
exports.SearchIcon = SearchIcon;
exports.SearchIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { strokeWidth: '1' });
