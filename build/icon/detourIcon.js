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
exports.DetourIcon = void 0;
var react_1 = __importDefault(require("react"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var DetourIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 20 20" }),
    react_1.default.createElement("g", { transform: "translate(-2 -2)", fill: "none", fillRule: "evenodd" },
        react_1.default.createElement("circle", { fill: props.isDisabled ? 'none' : branding_1.color.green, cx: "12", cy: "12", r: "10" }),
        react_1.default.createElement("path", { stroke: branding_1.color.white, strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 9.5L19 12l-2.5 2.5" }),
        react_1.default.createElement("path", { d: "M19.025 12H12a2 2 0 1 0-4 0H4.5", stroke: branding_1.color.white, strokeLinecap: "round", strokeLinejoin: "round" })))); };
exports.DetourIcon = DetourIcon;
exports.DetourIcon.defaultProps = icon_1.BaseIconDefaultProps;
