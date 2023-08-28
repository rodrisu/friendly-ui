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
exports.MeetingPointIcon = void 0;
var react_1 = __importDefault(require("react"));
var classcat_1 = __importDefault(require("classcat"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var MeetingPointIcon = function (_a) {
    var active = _a.active, shadowed = _a.shadowed, props = __rest(_a, ["active", "shadowed"]);
    var strokeColor = active ? branding_1.color.white : branding_1.color.blue;
    var fillColor = active ? branding_1.color.blue : branding_1.color.white;
    var className = (0, classcat_1.default)([props.className, { 'kirk-icon-shadowed': shadowed }]);
    return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { className: className, viewBox: "0 0 22 22" }),
        react_1.default.createElement("g", { fill: "none", fillRule: "evenodd" },
            react_1.default.createElement("g", { transform: "translate(-1 -1)", stroke: strokeColor, strokeLinecap: "round", strokeLinejoin: "round" },
                react_1.default.createElement("circle", { fill: fillColor, cx: "12", cy: "12", r: "10" }),
                react_1.default.createElement("path", { d: "M17 7l-3 3M17 10h-3V7" }),
                react_1.default.createElement("path", { d: "M7 17l3-3M7.25 14H10v2.75" }),
                react_1.default.createElement("path", { d: "M7 7l2.5 2.625M7.25 10H10V7.25" }),
                react_1.default.createElement("path", { d: "M17 17l-3-3M16.75 14H14v2.75" })))));
};
exports.MeetingPointIcon = MeetingPointIcon;
exports.MeetingPointIcon.defaultProps = __assign(__assign({}, icon_1.BaseIconDefaultProps), { active: false, shadowed: false });
