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
exports.StarIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var StarIcon = function (_a) {
    var bgColor = _a.bgColor, fill = _a.fill, props = __rest(_a, ["bgColor", "fill"]);
    // needs to be unique, otherwise all stars will use the first defined linear gradient
    var id = "gradient-".concat(fill);
    var offset = "".concat(fill * 100, "%");
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "-2 -4 84 82" }),
        react_1.default.createElement("g", null,
            react_1.default.createElement("linearGradient", { y2: "0%", x2: "100%", y1: "0%", x1: "0%", id: id },
                react_1.default.createElement("stop", { stopColor: props.iconColor, offset: offset }),
                react_1.default.createElement("stop", { stopColor: bgColor, offset: "0%" })),
            react_1.default.createElement("path", { stroke: props.iconColor, strokeWidth: 4, fill: "url(#".concat(id, ")"), d: "M 40.000 60.000 L 63.511 72.361 L 59.021 46.180\n          L 78.042 27.639 L 51.756 23.820 L 40.000 0.000 L 28.244 23.820\n          L 1.958 27.639 L 20.979 46.180 L 16.489 72.361 L 40.000 60.000" }))));
};
exports.StarIcon = StarIcon;
exports.StarIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { bgColor: branding_1.color.white, fill: 0 });
