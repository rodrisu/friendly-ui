"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.BusIcon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var BusIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 28 17" }),
    react_1.default.createElement("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd", color: props.iconColor, stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M.67 6.33V2C.67.92 1.33.33 2.33.33h21.02C26 .33 27.33 3.01 27.33 5v6.34a1 1 0 0 1-1 1H4.67l-3.32-1.11a1 1 0 0 1-.68-.95V6.33z" }),
        react_1.default.createElement("path", { d: "M.67 5h20c1 0 1.66 1.66 2.66 1.66h4v4.67a1 1 0 0 1-1 1H4.67L1 11.1a.5.5 0 0 1-.34-.47V5z", fill: "currentColor" }),
        react_1.default.createElement("path", { d: "M4 7h7.33", strokeLinecap: "round", strokeLinejoin: "round" }),
        react_1.default.createElement("path", { d: "M4.67 5.67V.33M10 5V.33m5.33 6v-6m5.34 6v-6", strokeLinecap: "square" }),
        react_1.default.createElement("circle", { fill: branding_1.color.white, cx: "22.67", cy: "13", r: "2" }),
        react_1.default.createElement("circle", { fill: branding_1.color.white, cx: "6", cy: "13", r: "2" }),
        react_1.default.createElement("circle", { fill: branding_1.color.white, cx: "11.67", cy: "13", r: "2" })))); };
var StyledBusIcon = (0, styled_components_1.default)(BusIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & path,\n  & circle {\n    color: ", ";\n  }\n"], ["\n  & path,\n  & circle {\n    color: ", ";\n  }\n"])), function (props) { return (props.isDisabled ? branding_1.color.gray : 'currentColor'); });
exports.BusIcon = StyledBusIcon;
StyledBusIcon.defaultProps = __assign({}, icon_1.BaseIconDefaultProps);
var templateObject_1;
