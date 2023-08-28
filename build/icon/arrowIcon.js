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
exports.ArrowIcon = void 0;
var react_1 = __importDefault(require("react"));
var icon_1 = require("../_utils/icon");
var ArrowIcon = function (_a) {
    var right = _a.right, props = __rest(_a, ["right"]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props),
        react_1.default.createElement("g", __assign({ fill: "none", stroke: props.iconColor, strokeWidth: "2", strokeMiterlimit: "10", strokeLinejoin: "round", strokeLinecap: "round" }, (right && { transform: 'rotate(180 12 12)' })),
            react_1.default.createElement("path", { d: "M9 19l-7-7 7-7" }),
            react_1.default.createElement("path", { d: "M22 12H2" }))));
};
exports.ArrowIcon = ArrowIcon;
exports.ArrowIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { right: false });
