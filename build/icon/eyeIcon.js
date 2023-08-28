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
exports.EyeIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var EyeIcon = function (_a) {
    var off = _a.off, props = __rest(_a, ["off"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
        react_1.default.createElement("g", { fill: "none", stroke: props.iconColor, strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round" },
            off && (react_1.default.createElement("g", null,
                react_1.default.createElement("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
                react_1.default.createElement("line", { x1: "1", y1: "1", x2: "23", y2: "23" }))),
            !off && (react_1.default.createElement("g", null,
                react_1.default.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
                react_1.default.createElement("circle", { cx: "12", cy: "12", r: "3" }))))));
};
exports.EyeIcon = EyeIcon;
exports.EyeIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { off: false });
