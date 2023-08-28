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
exports.CarpoolIcon = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var branding_1 = require("../_utils/branding");
var icon_1 = require("../_utils/icon");
var CarpoolIcon = function (props) { return (react_1.default.createElement(icon_1.BaseIcon, __assign({}, props, { viewBox: "0 0 28 16" }),
    react_1.default.createElement("g", { fill: "none", fillRule: "evenodd", color: props.iconColor, stroke: "currentColor" },
        react_1.default.createElement("path", { d: "M6.62.33h8.04a4 4 0 0 1 3.2 1.6l2.8 3.75 4.06.8a3.25 3.25 0 0 1 2.61 3.19v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95v-3.6a1 1 0 0 1 1-1h1.66l2.4-4.8a1 1 0 0 1 .89-.55z" }),
        react_1.default.createElement("path", { d: "M10 .33v5.34", strokeLinecap: "square" }),
        react_1.default.createElement("path", { d: "M1.67 5.67h19l4.05.8a3.25 3.25 0 0 1 2.61 3.2v1.66a1 1 0 0 1-1 1H4.68l-3.33-1.1a1 1 0 0 1-.68-.95V6.67a1 1 0 0 1 1-1z", fill: "currentColor" }),
        react_1.default.createElement("circle", { fill: branding_1.color.white, cx: "7.33", cy: "12.33", r: "2.67" }),
        react_1.default.createElement("circle", { fill: branding_1.color.white, cx: "20.67", cy: "12.33", r: "2.67" })))); };
var StyledCarpoolIcon = (0, styled_components_1.default)(CarpoolIcon)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & path,\n  & circle {\n    color: ", ";\n  }\n"], ["\n  & path,\n  & circle {\n    color: ", ";\n  }\n"])), function (props) { return (props.isDisabled ? branding_1.color.gray : 'currentColor'); });
exports.CarpoolIcon = StyledCarpoolIcon;
StyledCarpoolIcon.defaultProps = __assign({}, icon_1.BaseIconDefaultProps);
var templateObject_1;
